---
name: 'mcpgen-cli'
description: 'Generate MCP servers from OpenAPI or Postman specifications.'
categories:
  - mcp
  - code-generators
languages: { 'Python': true }
link: 'https://pypi.org/project/mcpgen-cli/'
repo: 'https://github.com/JnanaSrota/mcpgen'
oaiSpecs:
  oas: true
  overlays: false
  arazzo: false
oasVersions:
  v2: false
  v3: true
  v3_1: true
  v3_2: false
---

## Overview

mcpgen-cli generates a ready-to-run MCP server from an OpenAPI or Postman spec, so an existing API can be exposed to Claude, Cursor, and other MCP clients without hand-writing the integration layer.

## Features

- Generates a complete MCP server from OpenAPI or Postman input
- Installable via `pip install mcpgen-cli`
- [2-3 more real ones — auth handling, transports supported, output structure, whatever's actually true]

## Usage

```bash
pip install mcpgen-cli
```

Generate from an OpenAPI specification:

```bash
mcpgen generate --input openapi.yaml --output ./mcp-server
```

Generate from a Postman collection:

```bash
mcpgen generate --input collection.json --output ./mcp-server
```
