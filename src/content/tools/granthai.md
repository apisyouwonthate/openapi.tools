---
name: 'GranthAi'
description: 'Make any legacy or new backend AI-ready with no code changes. GranthAi generates an OpenAPI 3.1 description, API documentation and an MCP server from live API traffic, using a language-agnostic proxy (granthai-agent) that works with REST APIs written in any language.'
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

It comes in two forms:

- [`granthai`](https://www.npmjs.com/package/granthai): Express middleware for Node.js apps
- [`granthai-agent`](https://www.npmjs.com/package/granthai-agent): a reverse proxy that sits in front of an API written in any language (Python, Java, Go, Rust, PHP, ...)

## Features

- OpenAPI 3.1 descriptions with JSON Schema inferred from real request and response bodies, merged across calls so optional and nullable fields are captured
- Path parameters detected automatically (numeric IDs, UUIDs, Mongo ObjectIds, hashes), with route templates for slug-style URLs
- Interactive docs served next to the API; the agent also saves the description to disk so it survives restarts
- An MCP server (Streamable HTTP) with one tool per operation; tool calls forward the caller's `Authorization`, cookie and CSRF headers, so the API's own auth still applies
- Only schemas are stored, never request or response values

## Usage

Put the agent in front of any API, here one listening on port 8000:

```bash
npx granthai-agent --target 8000
```

Send traffic to `http://localhost:4000` instead of `:8000`, then open:

- `http://localhost:4000/_granthai/api-docs` for the docs
- `http://localhost:4000/_granthai/openapi.json` for the OpenAPI description
- `http://localhost:4000/_granthai/mcp` for the MCP server

For Express apps, use the middleware instead:

```js
const GranthAi = require('granthai');
app.use(GranthAi({ docTitle: 'My API', baseUrl: 'http://localhost:3000' }));
```
