import { readdir, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoDir = join(scriptDir, '..');
const catalogPath = join(repoDir, 'tools.openapis.org');
const toolsDir = join(repoDir, 'src', 'content', 'tools');

// Case-insensitive substrings; a project is ignored if its name, repository
// or websites contain any of them.
const BLOCKLIST = ['postman', 'swagger'];

function isBlocked(project) {
  const haystack = [project.name, project.repository, ...project.websites]
    .filter(Boolean)
    .join('\n')
    .toLocaleLowerCase();
  return BLOCKLIST.some((term) => haystack.includes(term.toLocaleLowerCase()));
}

function scalar(value) {
  const trimmed = value.trim();
  if (trimmed === 'null') return null;
  if (
    (trimmed.startsWith("'") && trimmed.endsWith("'")) ||
    (trimmed.startsWith('"') && trimmed.endsWith('"'))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function normalizeName(value) {
  return value.trim().toLocaleLowerCase();
}

function normalizeUrl(value) {
  const url = new URL(value);
  url.hostname = url.hostname.toLocaleLowerCase().replace(/^www\./, '');
  url.pathname = url.pathname.replace(/\/+$/, '').replace(/\.git$/i, '');
  url.search = '';
  url.hash = '';
  return url.toString().toLocaleLowerCase().replace(/\/$/, '');
}

function parseCatalog(content) {
  const projects = [];
  let project;
  let readingWebsites = false;

  for (const line of content.split(/\r?\n/)) {
    const nameMatch = line.match(/^  - name:\s*(.+)$/);
    if (nameMatch) {
      project = { name: scalar(nameMatch[1]), repository: null, websites: [] };
      projects.push(project);
      readingWebsites = false;
      continue;
    }

    if (!project) continue;

    const repositoryMatch = line.match(/^    repository:\s*(.+)$/);
    if (repositoryMatch) {
      project.repository = scalar(repositoryMatch[1]);
      readingWebsites = false;
      continue;
    }

    if (/^    websites:\s*$/.test(line)) {
      readingWebsites = true;
      continue;
    }

    if (/^    \S/.test(line)) {
      readingWebsites = false;
      continue;
    }

    const websiteMatch = readingWebsites && line.match(/^      - (.+)$/);
    if (websiteMatch) project.websites.push(scalar(websiteMatch[1]));
  }

  return projects;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;

  const fields = {};
  for (const line of match[1].split(/\r?\n/)) {
    const fieldMatch = line.match(/^(name|repo|link):\s*(.*?)\s*$/);
    if (fieldMatch) fields[fieldMatch[1]] = scalar(fieldMatch[2]);
  }
  return fields;
}

async function main() {
  const [catalogContent, filenames] = await Promise.all([
    readFile(catalogPath, 'utf8'),
    readdir(toolsDir),
  ]);
  const allProjects = parseCatalog(catalogContent);
  const projects = allProjects.filter((project) => !isBlocked(project));
  const toolFiles = filenames.filter((filename) => filename.endsWith('.md'));
  const tools = await Promise.all(
    toolFiles.map(async (filename) => ({
      filename,
      fields: parseFrontmatter(
        await readFile(join(toolsDir, filename), 'utf8')
      ),
    }))
  );

  const definedNames = new Set();
  const definedRepositories = new Set();
  const definedWebsites = new Set();

  for (const { fields } of tools) {
    if (!fields) continue;
    if (fields.name) definedNames.add(normalizeName(fields.name));

    const repository = fields.repo && normalizeUrl(fields.repo);
    if (repository) definedRepositories.add(repository);

    const website = fields.link && normalizeUrl(fields.link);
    if (website) definedWebsites.add(website);
  }

  const missing = projects.filter((project) => {
    if (definedNames.has(normalizeName(project.name))) return false;

    const repository = project.repository && normalizeUrl(project.repository);
    if (repository && definedRepositories.has(repository)) return false;

    return !project.websites.some((website) => {
      const normalizedWebsite = normalizeUrl(website);
      return normalizedWebsite && definedWebsites.has(normalizedWebsite);
    });
  });

  if (process.argv.includes('--json')) {
    console.log(JSON.stringify(missing, null, 2));
    process.exitCode = missing.length > 0 ? 1 : 0;
    return;
  }

  console.log(
    `Catalog projects: ${projects.length} (${allProjects.length - projects.length} blocklisted)`
  );
  console.log(`Tool definitions: ${tools.length}`);

  if (missing.length === 0) {
    console.log('All catalog projects have a matching tool definition.');
    return;
  }

  console.log(
    `\nCatalog projects without a tool definition (${missing.length}):`
  );
  for (const project of missing) {
    console.log(`- ${project.name}`);
  }
  process.exitCode = 1;
}

main().catch((error) => {
  console.error('Failed to check tool coverage:', error);
  process.exitCode = 1;
});
