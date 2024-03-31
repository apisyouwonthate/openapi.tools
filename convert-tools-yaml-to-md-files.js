import fs from 'fs';
import yaml from 'js-yaml';
import { z } from 'zod';

// Define the schema using zod
const toolSchema = z.object({
  name: z.string(),
  description: z.string(),
  categories: z.array(z.string()),
  link: z.string().url().optional(),
  languages: z.record(z.boolean()),
  repo: z.string().url().optional().nullable(),
  openApiVersions: z.object({
    v2: z.boolean().optional(),
    v3: z.boolean().optional(),
    v3_1: z.boolean().optional(),
    v4: z.boolean().optional(),
  }),
  sponsorship: z
    .object({
      startDate: z.date(),
      endDate: z.date().optional(), // will be set when sponsorship ends
      url: z.string().url().optional(), // optionally override default link while sponsored
      testimonial: z.string().optional(), // optionally include a testimonial
    })
    .optional(),
});

const allLanguagesEncountered = new Set();
const allCategoriesEncountered = new Set();

const convertToolToMarkdown = (tool) => {
  // Convert tool data to match the schema
  const {
    name,
    description,
    category,
    language,
    link,
    github,
    sponsoredDate,
    testimonial,
    ...versions
  } = tool;

  // Ensure categories is an array
  let categories = Array.isArray(category) ? category : [category]; // Adjust here

  categories.forEach((category, index) => {
    let cat = category.toLowerCase();
    switch (cat) {
      case 'documentation':
        cat = 'docs';
        break;
      case 'dsl':
        cat = 'domain-specific-languages';
        break;
      case 'learning':
        cat = 'education';
        break;
      case 'description-validator':
      case 'description-validators':
        cat = 'schema-validators';
        break;
      case 'data-validation':
        cat = 'data-validators';
        break;
      case 'gateway':
        cat = 'gateways';
        break;
      case 'gui-editors':
        cat = 'ides';
        break;
      case 'miscellaneous':
        cat = 'misc';
        break;
      case 'mock':
        cat = 'mocking-tools';
        break;
      case 'parser':
        cat = 'parsers';
        break;
      case 'sdk':
      case 'sdks':
        cat = 'sdk-generators';
        break;
      case 'server':
        cat = 'servers';
        break;
      case 'testing-tools':
        cat = 'testing';
        break;
      case 'text-editor':
      case 'text-editors':
        cat = 'text-editors-extensions';
        break;
      case 'validator':
        cat = 'schema-validators';
        break;
    }

    categories[index] = cat;

    // Add the category to the set of all categories encountered
    allCategoriesEncountered.add(cat);
  });

  const languages = {};
  // clean up the language string and split it into an array:

  language
    ?.replace(/and/gi, '') // remove "and" from the string
    .replace(/\//gi, ',') // turn "/" into ","
    .replace(/\.js/gi, '') // remove ".js"
    .replace(/\.JS/gi, '') // remove ".JS"
    .replace(/JS/gi, '') // remove "JS"
    .replace(/c#/gi, 'csharp') // replace "c#" with "csharp"
    .replace(/c\+\+/gi, 'cpp') // replace "c++" with "cpp"
    // replace the standalone word "or" with a comma
    .replace(/\bor\b/gi, ',')
    .replace(/\.{3}/gi, '') // delete "..."
    .split(',')
    .forEach((lang) => {
      // finally, split the string into an array and remove whitespace
      lang = lang.trim().toLowerCase();

      if (!lang || lang.length === 0) return;

      // Add the language to the languages object
      languages[lang] = true;

      // Add the language to the set of all languages encountered
      allLanguagesEncountered.add(lang.trim().toLowerCase());
    });

  const openApiVersions = {
    v2: versions.v2 || false,
    v3: versions.v3 || false,
    v3_1: versions.v3_1 || false,
    v4: false, // Assuming v4 is false by default since it's not in the original data
  };

  let sponsorship = undefined;
  if (sponsoredDate) {
    sponsorship = {
      startDate: new Date(sponsoredDate),
      testimonial,
    };
  }

  const toolData = toolSchema.parse({
    name,
    description,
    categories, // Use the adjusted categories array
    languages,
    link,
    repo: github === 'null' || github === null ? undefined : github, // filter out the string "null"
    openApiVersions,
    sponsorship,
  });

  // Convert the data to YAML frontmatter
  const frontmatter = yaml.dump(toolData, { lineWidth: -1 });
  const content = `---
${frontmatter}---
`;

  return content;
};

const generateMarkdownFiles = (tools) => {
  tools.forEach((tool) => {
    const markdown = convertToolToMarkdown(tool);
    const sanitizedTitle = tool.name
      .replace(/[\s@]+/g, '-') // Replace spaces and "@" with a single hyphen.
      .replace(/[^a-zA-Z0-9-_]+/g, '-') // Replace sequences of non-alphanumeric characters (except - and _) with a single hyphen
      .replace(/-+/g, '-') // Collapse multiple hyphens into one.
      .replace(/^-+/, '') // Remove any leading hyphens
      .toLowerCase();

    const filePath = `./src/content/tools/${sanitizedTitle}.md`;
    fs.writeFileSync(filePath, markdown);
    console.log(`Generated ${filePath}`);
  });

  // Log all languages encountered
  console.log(
    allLanguagesEncountered.size,
    'Languages encountered:',
    Array.from(allLanguagesEncountered).sort()
  );

  // Log all categories encountered
  console.log(
    allCategoriesEncountered.size,
    'Categories encountered:',
    Array.from(allCategoriesEncountered).sort()
  );
};

// Load tools from the YAML file
const loadToolsFromYaml = (filePath) => {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = yaml.load(fileContents);
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

const main = () => {
  const tools = loadToolsFromYaml('./tools.yml');
  if (!fs.existsSync('./src/content/tools')) {
    fs.mkdirSync('./src/content/tools');
  }
  generateMarkdownFiles(tools);
};

main();
