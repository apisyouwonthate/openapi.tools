import fs from 'fs';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Convert categories
const categoriesYaml = fs.readFileSync(join(rootDir, '_data/categories.yml'), 'utf8');
const categories = yaml.load(categoriesYaml);
fs.writeFileSync(
  join(rootDir, 'src/content/categories/data.json'),
  JSON.stringify(categories, null, 2)
);
console.log('✅ Converted categories.yml to src/content/categories/data.json');

// Convert tools
const toolsYaml = fs.readFileSync(join(rootDir, '_data/tools.yml'), 'utf8');
const tools = yaml.load(toolsYaml);
fs.writeFileSync(
  join(rootDir, 'src/content/tools/data.json'),
  JSON.stringify(tools, null, 2)
);
console.log('✅ Converted tools.yml to src/content/tools/data.json');
console.log(`📊 Total tools: ${tools.length}`);
