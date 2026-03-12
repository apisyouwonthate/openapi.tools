---
name: arazzo2openapi
description: |
  Convert Arazzo workflow documents into OpenAPI documents.
  Supports CLI and programmatic usage, with intelligent type inference
  from referenced OpenAPI source descriptions.
categories:
  - converters
  - text-editors-extensions
  - cli
link: https://frankkilcommins.github.io/arazzo2openapi
languages:
  typescript: true
  javascript: true
repo: https://github.com/frankkilcommins/arazzo2openapi
oaiSpecs:
  oas: true
  overlays: false
  arazzo: true
oasVersions:
  v2: false
  v3: true
  v3_1: true
  v3_2: false
badges:
  - arazzo-support
---

## Overview

`arazzo2openapi` converts Arazzo workflow descriptions into OpenAPI documents. It intelligently infers types, formats, and constraints from the referenced source OpenAPI documents — preserving descriptions, enums, and nested structures rather than generating bare schemas.

Available as a CLI tool and a programmatic TypeScript/JavaScript API. Try it online at [frankkilcommins.github.io/arazzo2openapi](https://frankkilcommins.github.io/arazzo2openapi).

## Installation

```bash
npm install -g arazzo2openapi
```

## CLI Usage

```bash
# Convert a local file
arazzo2openapi workflow.yaml -o openapi.yaml

# Convert from a remote URL
arazzo2openapi https://example.com/workflow.yaml -o openapi.yaml

# Override metadata
arazzo2openapi workflow.yaml \
  --title "My API" \
  --version "2.0.0" \
  --openapi-version 3.1.0
```

**CLI options:**

| Option | Description |
|--------|-------------|
| `-o, --output <file>` | Output file path |
| `-f, --format <format>` | Output format: `json` or `yaml` |
| `--openapi-version <version>` | OpenAPI version: `3.0.0` or `3.1.0` |
| `--title <title>` | Override API title |
| `--version-override <version>` | Override API version |
| `--description <description>` | Override API description |
| `--server <url>` | Add server URL (repeatable) |
| `--response-code <code>` | HTTP response code (default: `200`) |

## Programmatic API

```typescript
import { ArazzoParser, WorkflowAnalyzer, OpenAPIGenerator } from 'arazzo2openapi';

// Parse Arazzo document
const parser = new ArazzoParser();
const { document } = await parser.loadDocument('workflow.yaml');

// Analyze workflows
const analyzer = new WorkflowAnalyzer();
const workflows = analyzer.analyzeAllWorkflows(document);

// Generate OpenAPI
const generator = new OpenAPIGenerator();
const openapi = await generator.generateOpenAPI(
  document,
  workflows,
  'workflow.yaml',
  {
    arazzoPath: 'workflow.yaml',
    outputPath: 'openapi.yaml',
    openapiVersion: '3.1.0',
  }
);
```

## Type Inference

Types and formats are inferred from the source OpenAPI documents referenced in the Arazzo workflow — not guessed:

```yaml
# Input: Arazzo workflow output references
outputs:
  petId:   $steps.getPet.outputs.id
  petName: $steps.getPet.outputs.name

# Output: OpenAPI with inferred types
schema:
  properties:
    petId:
      type: integer     # inferred from source
      format: int64
    petName:
      type: string      # inferred from source
```

Supports: primitive types, formats (uuid, email, date-time, int32, int64, float, etc.), enums, constraints (min/max, pattern), nested objects and arrays, and `$ref` resolution.

## Supported Versions

| Spec    | Versions      |
|---------|---------------|
| Arazzo  | 1.0.x         |
| OpenAPI | 3.0.0, 3.1.0  |
