---
name: Barbacane
description: Spec-driven API gateway built in Rust. Point it at your OpenAPI 3.x or AsyncAPI 3.x spec and it becomes your gateway — routing, validation, auth, rate limiting, AI proxying, and an MCP server are all generated from the spec, with no separate gateway DSL to maintain.
categories:
  - gateways
  - mcp
  - security
  - data-validators
link: https://barbacane.dev
repo: https://github.com/barbacane-dev/barbacane
languages:
  rust: true
  docker: true
  cli: true
oaiSpecs:
  oas: true
  overlays: false
  arazzo: false
oasVersions:
  v2: false
  v3: true
  v3_1: true
  v3_2: true
featuredArticles:
  - title: 'Beyond configuration drift: how Barbacane reimagines the API gateway with Rust and WASM'
    url: https://barbacane.dev/blog/beyond-configuration-drift/
    date: 2026-02-12
  - title: 'One gateway, many specs: how Barbacane unifies your API ecosystem'
    url: https://barbacane.dev/blog/one-gateway-many-specs/
    date: 2026-02-13
  - title: 'Authorization at the gateway: CEL and OPA for policy-driven access control'
    url: https://barbacane.dev/blog/authorization-at-the-gateway/
    date: 2026-02-14
  - title: 'What is an MCP gateway? The category every API team will need in 2026'
    url: https://barbacane.dev/blog/what-is-an-mcp-gateway/
    date: 2026-04-23
---

## Overview

Barbacane is a spec-driven API gateway that compiles OpenAPI 3.x and AsyncAPI 3.x specifications into portable, signed `.bca` artifacts. Routing, validation, auth, rate limiting, AI policy, and MCP exposure are all declared inline on operations via `x-barbacane-*` extensions, so the spec is the single source of truth for gateway behaviour — no separate gateway DSL, no drift between docs and infrastructure.

## Features

- **Spec-as-config** — OpenAPI / AsyncAPI compiled into a sealed artifact; secrets resolved at runtime via `env://` and `file://` references.
- **AI gateway** — `ai-proxy` dispatcher unifies OpenAI, Anthropic and Ollama with provider fallback, plus middlewares for prompt guarding, response redaction, token-based rate limiting, and per-call cost tracking.
- **MCP server** — every operation in the spec is automatically exposed as a Model Context Protocol tool at `POST /__barbacane/mcp`, behind the same auth, rate-limit and validation chain.
- **Multi-spec compilation** — merge several OpenAPI / AsyncAPI files into one validated artifact for microservice gateways.
- **Validation** — request and response validation against JSON Schema (body, path, query, headers) with strict mode and detailed RFC 9457 problem responses.
- **Plugin system** — 33+ official middleware and dispatcher plugins (JWT/OIDC/API key/basic auth, CEL and OPA authorization, redirect, fire-and-forget, S3 dispatcher with SPA fallback, …); custom plugins in any language compiling to WebAssembly, sandboxed via Wasmtime.
- **Edge-ready** — stateless data plane, separate control plane handling compilation, artifact distribution, and hot-reload; remote plugin loading over HTTPS.
- **Local DX** — `barbacane dev` watches your spec and hot-reloads on save; `barbacane init` scaffolds a project.
- **Observable** — Prometheus metrics, structured JSON logs, distributed tracing (W3C Trace Context, OTLP).
- **Secure by default** — memory-safe Rust runtime, TLS via Rustls (FIPS-ready via aws-lc-rs), sandboxed WASM plugins.

## Usage

```bash
# Scaffold a project (barbacane.yaml + specs/api.yaml)
barbacane init my-api --fetch-plugins
cd my-api

# Local dev with hot-reload
barbacane dev

# Production: explicit compile-and-serve
barbacane compile -m barbacane.yaml -o api.bca
barbacane serve --artifact api.bca --listen 0.0.0.0:8080
```
