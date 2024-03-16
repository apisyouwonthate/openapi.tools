import fs from 'fs';
import yaml from 'js-yaml';
import { z } from 'zod';

// Define the schema using zod
const toolSchema = z.object({
  name: z.string(),
  description: z.string(),
  categories: z.array(z.string()),
  link: z.string().url().optional(),
  github: z.string().url().optional().nullable(),
  openApiVersions: z.object({
    v2: z.boolean().optional(),
    v3: z.boolean().optional(),
    v3_1: z.boolean().optional(),
    v4: z.boolean().optional(),
  }),
});

const convertToolToMarkdown = (tool) => {
  // Convert tool data to match the schema
  const { name, description, category, link, github, ...versions } = tool;

  // Ensure categories is an array
  const categories = Array.isArray(category) ? category : [category]; // Adjust here

  const openApiVersions = {
    v2: versions.v2 || false,
    v3: versions.v3 || false,
    v3_1: versions.v3_1 || false,
    v4: false, // Assuming v4 is false by default since it's not in the original data
  };

  const toolData = toolSchema.parse({
    name,
    description,
    categories, // Use the adjusted categories array
    link,
    github,
    openApiVersions,
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

    const filePath = `./tools/${sanitizedTitle}.md`;
    fs.writeFileSync(filePath, markdown);
    console.log(`Generated ${filePath}`);
  });
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
  if (!fs.existsSync('./tools')) {
    fs.mkdirSync('./tools');
  }
  generateMarkdownFiles(tools);
};

main();
