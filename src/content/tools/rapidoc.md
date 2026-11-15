---
name: RapiDoc
description: Web components that render interactive API reference docs from OpenAPI descriptions, draw and run Arazzo workflows, and export an MCP server from an OpenAPI description.
categories:
  - docs
  - mcp
link: https://rapidocui.com/
languages:
  web component: true
  javascript: true
  typescript: true
repo: https://github.com/rapi-doc/RapiDoc
oaiSpecs:
  oas: true
  arazzo: true
oasVersions:
  v2: true
  v3: true
  v3_1: true
  v3_2: true
---

RapiDoc is a framework-agnostic custom element (`<rapi-doc>`) that renders an OpenAPI description as API reference documentation, with a built-in console for trying requests. It works in plain HTML, React, Vue, Angular, Svelte, or Lit, and has light and dark themes, brand colors, three layouts (`read`, `view`, `focused`), and slots for custom content.

- `<rapi-doc>`: full API reference with a "try it" console. Swagger 2.0 is upgraded to OpenAPI 3.1 in the browser; OpenAPI 3.0, 3.1 and 3.2 are read as they are.
- `<rapi-doc-mini>`: embeds just the operations you pick, with their schemas and "try it" console, without navigation.
- `<rapi-flow>` (`rapidoc/flow`): draws an Arazzo workflow as a diagram and runs it in the browser.
- Export MCP Server: turns the loaded OpenAPI description into an MCP server project.
