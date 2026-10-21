---
name: 'GranthAi'
description: 'Make any legacy or new backend AI-ready with no code changes. GranthAi generates an OpenAPI 3.1 description, API documentation and an MCP server from live API traffic, using a language-agnostic proxy (granthai-agent) that works with REST APIs written in any language. Self-hosted, so API traffic and PII never leave your servers.'
categories:
  - learning
  - docs
  - mcp
languages: { 'nodejs': true, 'cli': true, 'any': true }
link: 'https://granthai.vercel.app'
repo: 'https://github.com/GranthAi/granthai'
oaiSpecs:
  oas: true
  overlays: false
  arazzo: false
oasVersions:
  v2: false
  v3: false
  v3_1: true
  v3_2: false
---

## Overview

GranthAi turns an existing REST API into something AI agents can use, without touching its code. It watches the requests and responses the API actually serves, generates an OpenAPI 3.1 description from them, renders it as interactive API documentation, and exposes every operation as an MCP tool. It's useful for undocumented legacy APIs, for keeping docs in sync with what the API really does, and for giving Claude, Cursor or any MCP client access to an API.

It runs as [`granthai-agent`](https://www.npmjs.com/package/granthai-agent), a reverse proxy that sits in front of an API written in any language (Python, Java, Go, Rust, PHP, Node.js, ...).

## Features

- OpenAPI 3.1 descriptions with JSON Schema inferred from real request and response bodies, merged across calls so optional and nullable fields are captured
- Path parameters detected automatically (numeric IDs, UUIDs, Mongo ObjectIds, hashes), with route templates for slug-style URLs
- Interactive docs served next to the API, with the description saved to disk so it survives restarts
- An MCP server (Streamable HTTP) with one tool per operation; tool calls forward the caller's `Authorization`, cookie and CSRF headers, so the API's own auth still applies
- Only schemas are stored, never request or response values

## Security and privacy

- **Runs on-prem.** The agent runs on your own servers, next to your API. There is no GranthAi cloud service, account or telemetry, so API traffic, payloads and PII are never sent to a third-party server.
- **Keeps metadata, not data.** Only the inferred structure is kept (endpoints, parameter and field names, types). Request and response values, tokens and passwords are never stored.
- **You own the files.** The OpenAPI description is a plain file on your server (`granthai.openapi.json`, or wherever `--out` points), so you decide where it lives, who can read it and whether it goes into version control.
- **Your API's auth still applies.** MCP tool calls carry the caller's own credentials; the agent doesn't hold API keys or bypass auth.
- **Local by default.** The agent listens on `127.0.0.1` unless told otherwise. Its docs and MCP endpoints have no login of their own, so only expose them on networks you trust.

The docs page loads the Swagger UI scripts and styles from a public CDN in the viewer's browser; no API data is sent with those requests.

## Usage

Put the agent in front of any API, here one listening on port 8000:

```bash
npx granthai-agent --target 8000
```

Send traffic to `http://localhost:4000` instead of `:8000`, then open:

- `http://localhost:4000/_granthai/api-docs` for the docs
- `http://localhost:4000/_granthai/openapi.json` for the OpenAPI description
- `http://localhost:4000/_granthai/mcp` for the MCP server
