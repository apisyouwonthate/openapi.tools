---
title: Contributing
description: Learn how to contribute to OpenAPI.Tools
layout: '../../layouts/StaticPageLayout.astro'
---

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
  - code-validators
  - servers
  - mocking-tools
languages: { 'Language1': true, 'Language2': false }
link: 'https://toolwebsite.com'
repo: 'https://github.com/example/example.git'
openApiVersions:
  v2: false
  v3: true
  v3_1: true
  v4: true
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
