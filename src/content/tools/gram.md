---
name: Gram
description: A platform and TypeScript framework for building, deploying, and running MCP-based tools and applications. Generate complete MCP toolsets from OpenAPI specifications, create custom agent tools, and deploy with serverless scale. Includes managed infrastructure, OAuth support, and built-in observability.
categories:
  - mcp
  - code-generators
  - misc
link: https://www.getgram.ai/
languages:
  typescript: true
  saas: true
repo: https://github.com/speakeasy-api/gram
oasVersions:
  v2: false
  v3: true
  v3_1: true
  v3_2: false
---

Gram by Speakeasy provides a complete platform for turning OpenAPI descriptions into production-ready MCP servers. Upload a OpenAPI document and Gram instantly generates focused, curated toolsets that AI agents can use. The platform handles deployment, scaling, authentication, and observability out of the box.

Key features include:

- **Generate from OpenAPI**: Transform API specs into MCP-compatible agent tools
- **Serverless Infrastructure**: Scale from zero to millions of requests with pay-per-use pricing
- **OAuth & Enterprise Ready**: Built-in authentication with SSO, SCIM, and role-based access
- **Built-in Observability**: Track actual request/response pairs and tool usage
- **Preview & Versioning**: Automatic preview deployments for every PR
- **Tool Curation**: Reduce large APIs down to focused, essential toolsets
- **Custom Tool Builder**: Chain operations and add business logic for complex workflows
- **Interactive Playground**: Test AI agent interactions before deployment

Works seamlessly with Claude Desktop, Cursor, GitHub Copilot, and any MCP client. Integrates with LangChain, OpenAI, Mastra, n8n, and other AI frameworks.
