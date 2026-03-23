---
name: Delimit
description: |
  Catch breaking API changes before merge. 27 detection types (17 breaking, 10 non-breaking), semver classification, migration guides, and policy enforcement for OpenAPI specs. Works as a GitHub Action, CLI, and MCP server for AI coding assistants.
categories:
  - linting
  - testing
link: https://delimit.ai
languages:
  any: true
repo: https://github.com/delimit-ai/delimit
oaiSpecs:
  oas: true
  overlays: false
  arazzo: false
oasVersions:
  v2: true
  v3: true
  v3_1: true
  v3_2: false
---

## Overview

Delimit detects breaking API changes in OpenAPI specs with 27 change types — deterministic rules, not AI inference. Same input always produces the same result.

## Features

- **GitHub Action** — runs on every PR, posts severity-graded comments with migration guides
- **CLI** — `npx delimit-cli lint`, `diff`, `explain` for local development
- **MCP Server** — 81 tools for AI coding assistants (Claude Code, Codex, Cursor, Gemini CLI)
- **Policy enforcement** — custom rules in `.delimit/policies.yml` with presets (strict/default/relaxed)
- **Semver classification** — deterministic MAJOR/MINOR/PATCH/NONE recommendation

## Usage

```yaml
# GitHub Action
- uses: delimit-ai/delimit-action@v1
  with:
    spec: api/openapi.yaml
```

```bash
# CLI
npx delimit-cli lint old.yaml new.yaml
npx delimit-cli diff old.yaml new.yaml
```
