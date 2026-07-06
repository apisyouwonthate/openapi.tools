---
name: Keymaker
description: Generates an agent-ready stack from an OpenAPI description — a runnable MCP server (stdio and Streamable HTTP), llms.txt, and an auth.md agent-signup endpoint issuing scoped, hashed, metered API keys. Also produces a curation report flagging weakly documented operations.
categories:
  - mcp
  - code-generators
languages:
  javascript: true
  nodejs: true
  cli: true
repo: https://github.com/adityaaa-IIT-BHU/keymaker
oasVersions:
  v2: false
  v3: true
  v3_1: true
  v3_2: false
---

Keymaker turns an OpenAPI description into everything an AI agent needs to discover, sign up for, and call an API:

- **MCP server** — every operation exposed as a tool, runnable over stdio or served as hosted Streamable HTTP
- **llms.txt** — an agent-readable API overview
- **auth.md + agent signup** — a `/agent-auth` endpoint issuing scoped, hashed, usage-metered API keys, following the auth.md pattern, with optional Stripe usage-based billing
- **Curation report** — flags operations and parameters with missing or weak documentation, since generated tools are only as good as the descriptions behind them

MIT licensed, plain Node.js (18+). The generated gateway can also be mounted inside an existing `node:http` or Express app.
