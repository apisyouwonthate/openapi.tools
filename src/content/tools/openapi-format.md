---
name: openapi-format
description: |
  A CLI to format an OpenAPI document by ordering fields in a hierarchical order, with the option to filter out flags, tags, methods, operationIDs; including the option to convert between OpenAPI 3.0, 3.1 and 3.2.
categories:
  - misc
  - parsers
  - converters
link: https://openapi-format-playground.vercel.app/
languages:
  nodejs: true
  cli: true
  web: true
repo: https://github.com/thim81/openapi-format

oaiSpecs:
  oas: true
  overlays: true

oasVersions:
  v2: false
  v3: true
  v3_1: true
  v3_2: true
badges:
  - oas-v32-early
  - overlays-pioneer

featuredArticles:
  - title: 'OpenAPI Format: A GUI for Overlays'
    url: 'https://apisyouwonthate.com/blog/openapi-format-gui-for-overlays/'
    date: 2025-10-10
  - title: 'Automatically Upgrade to OpenAPI v3.2'
    url: 'https://apisyouwonthate.com/blog/automaticly-upgrade-to-openapi-v3-2/'
    date: 2025-10-13
---

## Overview

**openapi-format** is a tool for formatting OpenAPI documents by _ordering_, _formatting_, _filtering_, _upgrading_ and applying _overlays_. It helps teams standardize OpenAPI specifications by producing clean, predictable, and consistently structured JSON or YAML output.

## Key Features

- **Sort OpenAPI fields**: Order fields hierarchically using default or custom sorting rules.
- **Filter content**: Remove operations by method, tag, operationId, flags, or custom flag values. Strip internal endpoints, beta features, or unused components from public documentation.
- **Apply OpenAPI Overlays**: Apply overlay actions to update or remove fields dynamically, following the OpenAPI Overlay specification.
- **Convert OpenAPI versions**: Upgrade OpenAPI 3.0 documents to 3.1 or 3.2, automatically transforming properties according to migration guidelines.
- **Format casing**: Enforce consistent naming conventions (camelCase, snake_case, kebab-case, PascalCase, etc.) across operationIds, properties, parameters, and component keys.
- **Generate elements**: Auto-generate `operationIds` using customizable templates based on method, path, and tags.
- **Bundle and split**: Resolve all `$ref` references into a single file, or split large documents into modular multi-file structures for easier management.
- **Strip unused components**: Automatically detect and remove schemas, parameters, examples, and other components that are no longer referenced.
- **Online playground**: Experiment with formatting options interactively at https://openapi-format-playground.vercel.app.

Built to simplify maintaining OpenAPI documents and keep specifications clean, consistent, and automation-ready.
