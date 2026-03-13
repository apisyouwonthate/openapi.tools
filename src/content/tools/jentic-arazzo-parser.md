---
name: Arazzo Parser
description: |
  TypeScript/JavaScript parser for Arazzo Specification documents.
  Parses Arazzo 1.0.0 and 1.0.1 documents from objects, strings,
  file paths, or URLs into a structured ApiDOM data model.
categories:
  - parsers
link: https://www.npmjs.com/package/@jentic/arazzo-parser
languages:
  typescript: true
  javascript: true
repo: https://github.com/jentic/jentic-arazzo-tools/tree/main/packages/jentic-arazzo-parser
oaiSpecs:
  oas: true
  overlays: false
  arazzo: true
oasVersions:
  v2: true
  v3: true
  v3_1: true
  v3_2: false
badges:
  - arazzo-support
---

## Overview

`@jentic/arazzo-parser` is a TypeScript/JavaScript library for parsing Arazzo Specification documents. It produces a structured [SpecLynx ApiDOM](https://github.com/speclynx/apidom) data model using the Arazzo 1.x namespace, giving programmatic access to workflows, steps, source descriptions, and runtime expressions.

Accepts multiple input types — plain JavaScript objects, JSON/YAML strings, local file paths, and HTTP(S) URLs — and returns a `ParseResultElement` for further processing.

## Installation

```bash
npm install @jentic/arazzo-parser
```

## Usage

```typescript
import { parseArazzo } from '@jentic/arazzo-parser';

// Parse from object, string, file path, or URL
const parseResult = await parseArazzo(source);

const arazzoSpec = parseResult.api; // ArazzoSpecification1Element
const hasErrors = parseResult.errors.length > 0;
```

**Supported inputs:**

- Plain JavaScript object
- JSON or YAML string
- Local file system path
- HTTP(S) URL

**Parse options:**

```typescript
const parseResult = await parseArazzo(source, {
  parse: {
    parserOpts: {
      strict: true, // strict parsing mode (default: true)
      sourceMap: false, // include source maps (default: false)
    },
  },
});
```

**Error handling:**

```typescript
try {
  await parseArazzo('invalid content');
} catch (error) {
  console.error(error.message); // 'Failed to parse Arazzo Document'
  console.error(error.cause); // original underlying error
}
```

## Supported Versions

| Spec    | Versions          |
| ------- | ----------------- |
| Arazzo  | 1.0.0, 1.0.1      |
| OpenAPI | 2.0, 3.0.x, 3.1.x |
