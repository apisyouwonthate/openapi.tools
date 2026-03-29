---
name: arazzo-cli
description: Standalone Arazzo 1.0 workflow executor with runtime engine, debugger, and MCP server for AI agent integration.
categories:
  - testing
  - mcp
  - data-validators
link: https://strefethen.github.io/arazzo-cli/
languages:
  cli: true
repo: https://github.com/strefethen/arazzo-cli
oaiSpecs:
  oas: true
  arazzo: true
oasVersions:
  v2: false
  v3: true
  v3_1: true
  v3_2: false
---

## Overview

arazzo-cli executes Arazzo 1.0 API workflow specifications — chained, multi-step API test sequences with expressions, control flow, and authentication. It includes a runtime engine, VS Code debugger, and an MCP server that exposes OpenAPI introspection and workflow generation as AI-agent tools.

## Features

- Execute Arazzo workflows against live APIs with chained step outputs
- Generate CRUD workflows from OpenAPI specs with realistic example values
- MCP server with 7 tools for AI agent integration (describe, generate, run)
- VS Code debug adapter with breakpoints and step-through
- Dry-run mode, parallel execution, JSON output, trace recording

## Usage

\`\`\`bash

# Validate a spec

arazzo-cli validate my-workflow.arazzo.yaml

# Run a workflow

arazzo-cli run my-workflow.arazzo.yaml workflow-id -i key=value

# Generate workflows from OpenAPI

arazzo-cli generate --spec petstore.openapi.yaml
\`\`\`
