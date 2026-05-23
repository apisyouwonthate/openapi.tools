---
name: Mockzilla
description: Open-source OpenAPI mock server built with Go. Runs multiple specs on one server, validates requests, proxies to real backends with mock fallback, and ships an MCP server for AI-agent workflows.
categories:
  - mocking
  - mcp
  - data-validators
languages:
  golang: true
link: https://mockzilla.org
repo: https://github.com/mockzilla/mockzilla
oaiSpecs:
  oas: true
  overlays: false
  arazzo: false
oasVersions:
  v2: false
  v3: true
  v3_1: true
---

## Overview

Mockzilla is an open-source mock server for OpenAPI specifications, validated against 2,200+ real-world specs across 98,000+ endpoints. Point it at a spec and get a running mock API in seconds -- no code, no config, no separate infrastructure.

Run multiple third-party APIs on a single local server, validate incoming requests against the spec, proxy to real backends with automatic mock fallback, or embed specs into a portable binary for offline and air-gapped environments.

## Features

- **Multiple specs, one server** -- each spec gets its own URL prefix
- **Request validation** -- every request validated against the OpenAPI spec
- **Upstream proxy with mock fallback** -- mix real and mocked endpoints
- **Latency and error simulation** -- test timeout and failure handling
- **Selective overrides** -- hand-craft specific endpoints while the rest stay auto-generated
- **Portable binary mode** -- embed specs via `go:embed`, no runtime dependencies
- **Codegen mode** -- generate typed Go handlers with custom middleware
- **MCP server** -- AI tools (Claude Code, Cursor, Gemini CLI) can launch mock APIs directly from any OpenAPI spec

## Usage

```bash
# Homebrew
brew tap mockzilla/tap && brew install mockzilla
mockzilla https://petstore3.swagger.io/api/v3/openapi.json

# Go
go run github.com/mockzilla/mockzilla/v2/cmd/server@latest \
  https://petstore3.swagger.io/api/v3/openapi.json
```
