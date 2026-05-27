---
name: Counterfact
description: Stateful API simulation with live runtime control, TypeScript extensibility, and hot reload.
categories:
  - mocking
  - sdk-generators
  - testing
  - data-validators
link: https://counterfact.dev
languages:
  typescript: true
  nodejs: true
repo: https://github.com/counterfact/api-simulator
oaiSpecs:
  oas: true
  overlays: true
badges:
  - oas-v32-early
  - overlays-pioneer
oasVersions:
  v2: true
  v3: true
  v3_1: true
  v3_2: true
---

## Overview

Counterfact turns an OpenAPI document into a live, stateful API simulation.

Unlike traditional mock servers that return static examples, Counterfact allows routes to share in-memory state, execute custom TypeScript logic, and evolve dynamically at runtime. A built-in JavaScript REPL provides live inspection and control of the running simulation without restarting the server.

Counterfact was originally created to help frontend teams develop against APIs before backend services existed, and to reproduce edge cases that are difficult to test reliably in real environments. It is also well suited to agentic coding workflows, where AI tools need a fast, deterministic sandbox for experimenting with third-party APIs without rate limits, network latency, or production risk.

## Features

- Generates type-safe TypeScript route handlers from OpenAPI
- Serves schema-valid responses automatically
- Supports shared in-memory state across routes
- Hot reloads route logic without restarting the server
- Includes a live JavaScript REPL for runtime inspection and control
- Supports reusable scenarios for complex workflows and edge cases
- Can selectively proxy requests to real backend services

## Usage

Generate and start a simulated API server directly from an OpenAPI document:

```sh
npx counterfact@latest https://petstore3.swagger.io/api/v3/openapi.json api
```

Counterfact generates editable TypeScript route handlers that map directly to your API paths. Modify route behavior, share state through `_.context.ts`, and interact with the running server through the built-in REPL while changes apply instantly.
