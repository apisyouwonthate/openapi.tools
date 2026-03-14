---
name: Swaggie
description: Swaggie is an OpenAPI 3.x code generator that produces fully typed TypeScript API clients from JSON or YAML specs. It supports multiple client templates (fetch, axios, xior, SWR, TanStack Query, Angular), and robust schema handling for real-world APIs.
categories:
  - code-generators
link: https://yhnavein.github.io/swaggie/
languages:
  nodejs: true
  cli: true
  typescript: true
repo: https://github.com/yhnavein/swaggie
oasVersions:
  v2: false
  v3: true
  v3_1: true
  v3_2: true
badges:
  - oas-v32-early
---

## Features

- **Works Out of the Box** - Opinionated defaults are chosen for real-world APIs, so most teams get useful, production-ready output with minimal configuration.
- **OpenAPI 3.x Coverage** - Works with OpenAPI 3.0, 3.1, and 3.2 specs (JSON or YAML), so it fits modern API stacks.
- **Fully Typed TypeScript Output** - Generates strongly typed clients and schemas to catch integration errors at compile time.
- **Real-World Schema Support** - Handles allOf, oneOf, anyOf, $ref, nullable fields, enums, and additionalProperties reliably.
- **Flexible Request/Query Handling** - Supports common payload/content types and configurable query param serialization (repeat, brackets, indices, dot notation).
- **Lean, Production-Friendly Output** - Emits a single tree-shakable TypeScript file with JSDoc and no runtime dependency overhead.
- **98% Test Coverage** - Extensively tested to ensure reliable code generation across diverse OpenAPI specs.
