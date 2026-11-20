---
name: Agent-Ready Score
description: Open-source CLI and GitHub Action that scores an OpenAPI description 0-100 for AI-agent readiness, with fixes and a badge.
categories:
  - schema-validators
languages:
  cli: true
  typescript: true
  javascript: true
link: https://agent-ready-score.omer20sh.workers.dev
repo: https://github.com/Om3rr/agent-ready-score
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

Agent-Ready Score reads an OpenAPI description the way an AI agent would, then returns a 0-100 score, a category breakdown, and a concrete fix for every failed check. The same engine runs as a CLI, a GitHub Action with a README badge, or a paste-and-score web page.

## Features

- Scores discoverability (`llms.txt`, `/.well-known`, advertised OpenAPI documents), docs quality, RFC 9457 error responses, auth scopes, and the token cost of wrapping the API as MCP tools
- CLI and GitHub Action for local and CI use, plus a README badge
- MIT licensed

## Usage

The package is not published to npm yet. From the repository, with Node.js 20 or later:

```bash
npm ci
npm run build
node dist/cli.js ./openapi.yaml
node dist/cli.js https://petstore3.swagger.io/api/v3/openapi.json --json
```

See the [repository README](https://github.com/Om3rr/agent-ready-score) for the GitHub Action and badge.
