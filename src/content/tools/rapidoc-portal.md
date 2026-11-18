---
name: RapiDoc Portal & CLI
description: Builds a static developer portal from OpenAPI descriptions and Markdown guides, with a CLI to preview, validate, lint, bundle, and mock descriptions and to serve them as MCP tools.
categories:
  - docs
  - mocking
  - mcp
  - schema-validators
link: https://portal.rapidocui.com/
languages:
  nodejs: true
  cli: true
  python: true
  csharp: true
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

The RapiDoc family of packages, built around the [RapiDoc](https://rapidocui.com/) web component. `npm create rapidoc` or `rapidoc init` starts a portal from the OpenAPI descriptions already in a folder.

- `@rapidoc/cli` (`rapidoc`): `dev` and `build` a portal, `preview` one description with live reload, `validate`, `lint`, `bundle` multi-file descriptions, `mock`, `mcp export` / `mcp serve`, and `migrate` from Redocly or Zudoku projects.
- `@rapidoc/portal`: the portal engine, with Markdoc guides, search, pre-rendered API reference pages and per-page access rules.
- `@rapidoc/mock`: a mock server for every API in the portal, using examples or generated data, with request validation and OAuth scope checks.
- `@rapidoc/server`: serves a built portal with OpenID Connect sign-in.
- `@rapidoc/mcp`: turns OpenAPI and Arazzo descriptions into MCP tools.
- Integrations that serve RapiDoc from an existing app or docs site: Express, Fastify, Hono, Starlight, VitePress, Docusaurus, FastAPI/Starlette (PyPI `rapidoc`) and ASP.NET Core (NuGet `RapiDoc.AspNetCore`).
