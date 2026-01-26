# Contributing to OpenAPI.Tools

We encourage all efforts in the OpenAPI ecosystem, and none of these tools are easy to create and maintain. That said, we don't want to be an exhaustive list of every single tool out there. OpenAPI.Tools is a curated list, which aims to help people find modern, reliable tooling, that's of as high quality as we can reasonably hope for.

Our focus on high-quality tooling means we cannot accept every tool that would like to be listed here, at least not right away. Submissions must align with the following guidelines:

- **Real-world use**: there should be evidence that people are using it, perhaps through package downloads, GitHub stars, or other means
- **Testable**: submissions should be released, and there should be a way of testing it so we can validate it works
- **Relevant**: all submissions must relate to the OpenAPI ecosystem and abide by its [Code of Conduct](https://github.com/OAI/OpenAPI-Specification/blob/main/CODE_OF_CONDUCT.md)
- **Terminology**: descriptions and language should follow the [OpenAPI Glossary](https://github.com/openapi-contrib/glossary?tab=readme-ov-file#api-description)

## 🛠 Adding New Tools

To add a new tool to the project, you need to create a new markdown file in the `src/content/tools/` directory. Each tool should have its own file.

1. Navigate to the `src/content/tools/` directory.
2. Create a new markdown file. The file name should be the name of the tool, with spaces replaced by hyphens (e.g., `my-new-tool.md`).
3. In the new markdown file, add the necessary information about the tool. Here's a basic template you can use:

```markdown
---
name: 'Tool Name'
description: 'A brief description of the tool.'
categories:
  - docs
  - sdk-generators
  - code-generators
  - mocking
languages: { 'Language1': true, 'Language2': false }
link: 'https://toolwebsite.com'
repo: 'https://github.com/tool'
oaiSpecs:
  oas: true
  overlays: false
  arazzo: false
oasVersions:
  v2: false
  v3: true
  v3_1: true
  v3_2: true
---

## Overview

Provide an overview of the tool here.

## Features

List the main features of the tool here.

## Usage

Explain how to use the tool here.
```

See `/src/content/categories/` for the list of available categories. If the tool fits into multiple categories, you can add them to the `categories` list. Make the categories you list match the file name of existing categories from the `/src/content/categories/` directory.

If you think we're missing a category, feel free create an issue or open a pull request to add a new category and we'll review it!

1. Fill in the information for the tool. Make sure to replace `'Tool Name'`, `'A brief description of the tool.'`, `'https://toolwebsite.com'`, `'The category of the tool'`, and the content of the sections with the appropriate information.

2. Save the file.

3. Open a pull request with your changes to have the new tool added to the project.

---

## Openapi.tools is built with Astro

[Astro](https://astro.build/) is the web content framework for content-driven websites. Our configuration of Astro uses React, TypeScript, and Tailwind CSS.

### 🚀 Project Structure

Inside of the repo, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── content/
│   │   ├── categories/
│   │   └── tools/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put React components.

Any static assets, like images, can be placed in the `public/` directory.

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                       |
| :--------------------- | :------------------------------------------- |
| `pnpm install`         | Installs dependencies                        |
| `pnpm dev`             | Starts local dev server at `localhost:4321`  |
| `pnpm build`           | Build your production site to `./dist/`      |
| `pnpm preview`         | Preview your build locally, before deploying |
| `pnpm astro ...`       | CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                 |
| `pnpm prettier-fix`    | Format your code with Prettier               |
| `pnpm lint`            | Lint your code with ESLint                   |

## 👀 Want to learn more about Astro?

Feel free to check out [Astro documentation](https://docs.astro.build).
