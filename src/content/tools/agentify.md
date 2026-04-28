---
name: Agentify
description: An agent interface compiler that transforms OpenAPI specifications into 9 agent-ready formats including MCP servers, AGENTS.md, CLAUDE.md, .cursorrules, Skills, llms.txt, GEMINI.md, A2A Card, and standalone CLI. Supports tiered generation strategies for APIs of any size.
categories:
  - mcp
  - code-generators
link: https://www.npmjs.com/package/agentify-cli
languages:
  typescript: true
repo: https://github.com/koriyoshi2041/agentify
oasVersions:
  v2: true
  v3: true
  v3_1: true
  v3_2: false
---

Agentify compiles a single OpenAPI specification into a complete suite of agent interface formats, so that any AI coding assistant or agent framework can interact with your API natively.

Run a single command to generate all supported formats:

```
npx agentify-cli transform <openapi-spec-url>
```

Key features include:

- **9 output formats**: MCP Server, AGENTS.md, CLAUDE.md, .cursorrules, Skills JSON, llms.txt, GEMINI.md, A2A Card, and standalone CLI
- **Tiered generation**: Automatically selects the right strategy based on API size — direct tools for small APIs (<30 endpoints), tool search and lazy loading for medium APIs (30-100), and code execution with docs search for large APIs (100+)
- **Swagger 2.0 and OpenAPI 3.x**: Parses both legacy Swagger and modern OpenAPI descriptions
- **Security-first**: Input sanitization of all spec fields, generated code scanning, and no eval/exec in output
- **MIT licensed**: Fully open source
