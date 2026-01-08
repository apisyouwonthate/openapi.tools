import { readdir, readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const TIMEOUT_MS = 5000; // 5 seconds
const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 2000;
const USER_AGENT =
  'Mozilla/5.0 (compatible; OpenAPIToolsBot/1.0; +https://openapi.tools)';

// Track results
const results = {
  total: 0,
  checked: 0,
  errors: [],
  warnings: [],
};

/**
 * Parse frontmatter from markdown file
 */
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);

  if (!match) return null;

  const frontmatter = match[1];
  const data = {};

  // Extract name
  const nameMatch = frontmatter.match(/name:\s*['"]?([^'"]+)['"]?/);
  if (nameMatch) data.name = nameMatch[1];

  // Extract link
  const linkMatch = frontmatter.match(/link:\s*['"]?([^'"]+)['"]?/);
  if (linkMatch) data.link = linkMatch[1];

  // Extract repo
  const repoMatch = frontmatter.match(/repo:\s*['"]?([^'"]+)['"]?/);
  if (repoMatch) data.repo = repoMatch[1];

  return data;
}

/**
 * Sleep for specified milliseconds
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Check if URL is accessible
 */
async function checkUrl(url, retries = MAX_RETRIES) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      method: 'HEAD',
      signal: controller.signal,
      headers: {
        'User-Agent': USER_AGENT,
      },
      redirect: 'follow',
    });

    clearTimeout(timeout);

    if (response.status === 405) {
      // Some servers don't support HEAD, try GET
      const getResponse = await fetch(url, {
        method: 'GET',
        signal: controller.signal,
        headers: {
          'User-Agent': USER_AGENT,
        },
        redirect: 'follow',
      });
      return { status: getResponse.status, ok: getResponse.ok };
    }

    return { status: response.status, ok: response.ok };
  } catch (error) {
    clearTimeout(timeout);

    if (error.name === 'AbortError') {
      if (retries > 0) {
        await sleep(RETRY_DELAY_MS);
        return checkUrl(url, retries - 1);
      }
      return { status: 0, ok: false, error: 'Timeout' };
    }

    if (retries > 0) {
      await sleep(RETRY_DELAY_MS);
      return checkUrl(url, retries - 1);
    }

    return { status: 0, ok: false, error: error.message };
  }
}

/**
 * Check a single tool
 */
async function checkTool(filePath, fileName) {
  try {
    const content = await readFile(filePath, 'utf-8');
    const tool = parseFrontmatter(content);

    if (!tool || !tool.name) {
      results.warnings.push(`⚠️  ${fileName}: Could not parse frontmatter`);
      return;
    }

    results.total++;

    // Check link
    if (tool.link) {
      results.checked++;
      const result = await checkUrl(tool.link);

      if (!result.ok) {
        results.errors.push({
          tool: tool.name,
          file: fileName,
          url: tool.link,
          type: 'link',
          status: result.status,
          error: result.error,
        });
      }

      // Small delay to avoid rate limiting
      await sleep(100);
    }

    // Check repo
    if (tool.repo) {
      results.checked++;
      const result = await checkUrl(tool.repo);

      if (!result.ok) {
        results.errors.push({
          tool: tool.name,
          file: fileName,
          url: tool.repo,
          type: 'repo',
          status: result.status,
          error: result.error,
        });
      }

      // Small delay to avoid rate limiting
      await sleep(100);
    }
  } catch (error) {
    results.warnings.push(`⚠️  ${fileName}: ${error.message}`);
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🔍 Starting tool link checker...\n');

  const toolsDir = join(__dirname, '..', 'src', 'content', 'tools');

  try {
    const files = await readdir(toolsDir);
    const mdFiles = files.filter((f) => f.endsWith('.md'));

    console.log(`Found ${mdFiles.length} tool files\n`);

    // Process files in batches to avoid overwhelming servers
    const BATCH_SIZE = 10;
    for (let i = 0; i < mdFiles.length; i += BATCH_SIZE) {
      const batch = mdFiles.slice(i, i + BATCH_SIZE);
      await Promise.all(
        batch.map((file) => checkTool(join(toolsDir, file), file))
      );

      // Progress indicator
      const progress = Math.min(i + BATCH_SIZE, mdFiles.length);
      console.log(`Progress: ${progress}/${mdFiles.length} files processed`);
    }

    // Print results
    console.log('\n📊 Results:');
    console.log(`  Total tools: ${results.total}`);
    console.log(`  URLs checked: ${results.checked}`);
    console.log(`  Errors found: ${results.errors.length}`);
    console.log(`  Warnings: ${results.warnings.length}`);

    // Print warnings
    if (results.warnings.length > 0) {
      console.log('\n⚠️  Warnings:');
      results.warnings.forEach((warning) => console.log(`  ${warning}`));
    }

    // Print and save errors
    if (results.errors.length > 0) {
      console.log('\n❌ Broken Links:\n');

      let errorReport = '### Broken Links\n\n';

      results.errors.forEach((error) => {
        const statusText =
          error.status === 0 ? `Error: ${error.error}` : `HTTP ${error.status}`;

        const message = `- **${error.tool}** (${error.file})\n  - Type: ${error.type}\n  - URL: ${error.url}\n  - Status: ${statusText}\n`;

        console.log(message);
        errorReport += message + '\n';
      });

      // Save error report for GitHub Action
      const { writeFile } = await import('fs/promises');
      await writeFile('link-check-errors.md', errorReport);

      // Exit with error code
      process.exit(1);
    } else {
      console.log('\n✅ All links are working!');
      process.exit(0);
    }
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

main();
