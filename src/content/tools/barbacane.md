---
name: Barbacane
description: Spec-driven API gateway that compiles OpenAPI specs into portable artifacts with WASM middleware plugins for validation, authentication, rate limiting, and more.
categories:
  - gateways
  - data-validators
link: https://github.com/barbacane-dev/Barbacane
repo: https://github.com/barbacane-dev/Barbacane
languages:
  rust: true
oaiSpecs:
  oas: true
  overlays: false
  arazzo: false
oasVersions:
  v2: false
  v3: true
  v3_1: true
  v3_2: true
---

## Overview

Barbacane is a spec-driven API gateway that compiles OpenAPI 3.x specifications into portable `.bca` artifacts. The compiled artifact contains routes, validation schemas, and WASM middleware plugins, making the OpenAPI spec the single source of truth for gateway behavior.

## Features

- Compiles OpenAPI 3.x specs into self-contained gateway artifacts
- Request validation against JSON Schema (body, path, query, headers)
- WASM plugin system with 21 built-in plugins (auth, rate limiting, caching, CORS, CEL/OPA authorization, and more)
- AsyncAPI 3.x support with Kafka and NATS dispatchers
- Compile-time safety checks (route conflicts, schema complexity, circular refs)
- Distributed tracing (OpenTelemetry) and Prometheus metrics
- Control plane with PostgreSQL for fleet management

## Usage

```bash
# Compile an OpenAPI spec into a gateway artifact
barbacane compile --spec api.yaml -m barbacane.yaml -o api.bca

# Serve the compiled artifact
barbacane serve --artifact api.bca
```
