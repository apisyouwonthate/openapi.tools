---
name: Arazzo Resolver
description: |
  TypeScript/JavaScript resolver and dereferencer for Arazzo Specification
  and OpenAPI documents. Resolves all internal and external references
  inline, producing self-contained ApiDOM data models.
categories:
  - parsers
  - misc
link: https://www.npmjs.com/package/@jentic/arazzo-resolver
languages:
  typescript: true
  javascript: true
repo: https://github.com/jentic/jentic-arazzo-tools/tree/main/packages/jentic-arazzo-resolver
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

`@jentic/arazzo-resolver` is a TypeScript/JavaScript library for resolving and dereferencing Arazzo Specification and OpenAPI documents. It replaces all references (`$ref`, `$components.*`, JSON Schema references) with their actual content, producing self-contained [SpecLynx ApiDOM](https://github.com/speclynx/apidom) data models ready for programmatic processing.

Works standalone from a file path or URL, or in combination with `@jentic/arazzo-parser` to dereference already-parsed elements.

## Installation

```bash
npm install @jentic/arazzo-resolver
```

## Usage

**Dereference from a file path or URL:**

```typescript
import { dereferenceArazzo } from '@jentic/arazzo-resolver';

// Local file
const parseResult = await dereferenceArazzo('/path/to/arazzo.json');

// Remote URL
const parseResult = await dereferenceArazzo('https://example.com/arazzo.yaml');
// parseResult is a ParseResultElement with all references resolved inline
```

**Dereference an already-parsed element (with `@jentic/arazzo-parser`):**

```typescript
import { parseArazzo } from '@jentic/arazzo-parser';
import { dereferenceArazzoElement } from '@jentic/arazzo-resolver';

const parseResult = await parseArazzo('/path/to/arazzo.json');
const dereferenced = await dereferenceArazzoElement(parseResult);
```

**Dereference inline content — provide a `baseURI`:**

```typescript
import { parseArazzo } from '@jentic/arazzo-parser';
import { dereferenceArazzoElement } from '@jentic/arazzo-resolver';

const parseResult = await parseArazzo({ arazzo: '1.0.1', ... });
const dereferenced = await dereferenceArazzoElement(parseResult, {
  resolve: { baseURI: 'https://example.com/arazzo.json' },
});
```

**Dereference a specific child element (e.g. a single workflow):**

```typescript
import { parseArazzo } from '@jentic/arazzo-parser';
import { dereferenceArazzoElement } from '@jentic/arazzo-resolver';

const parseResult = await parseArazzo('/path/to/arazzo.json');
const workflow = parseResult.api.workflows.get(0);

const dereferencedWorkflow = await dereferenceArazzoElement(workflow, {
  dereference: { strategyOpts: { parseResult } },
});
```

**OpenAPI documents:**

```typescript
import { dereferenceOpenAPI } from '@jentic/arazzo-resolver';

const parseResult = await dereferenceOpenAPI('/path/to/openapi.yaml');
```

## API

| Function                                    | Description                                             |
| ------------------------------------------- | ------------------------------------------------------- |
| `dereferenceArazzo(uri)`                    | Dereference an Arazzo document from a file path or URL  |
| `dereferenceArazzoElement(element, opts?)`  | Dereference a SpecLynx ApiDOM Arazzo element            |
| `dereferenceOpenAPI(uri)`                   | Dereference an OpenAPI document from a file path or URL |
| `dereferenceOpenAPIElement(element, opts?)` | Dereference a SpecLynx ApiDOM OpenAPI element           |

## What Gets Resolved

**In Arazzo documents:**

- JSON Schema references
- Reusable object references (`$components.*`)

**In OpenAPI documents:**

- Reference Objects (`$ref`) — components, external files, URLs
- JSON Schema references
- Path Item Objects
- and others

## Supported Versions

| Spec    | Versions          |
| ------- | ----------------- |
| Arazzo  | 1.0.0, 1.0.1      |
| OpenAPI | 2.0, 3.0.x, 3.1.x |
