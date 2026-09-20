---
name: Kavo
description: |
  A production-grade CRUD framework for TypeScript. Define an entity once, add one decorator, and Kavo generates a complete REST and GraphQL API with filtering, sorting, pagination, nested includes, field selection, and OpenAPI documentation — no hand-written controller methods.
categories:
  - code-generators
  - openapi-aware-frameworks
link: https://kavo.js.org
languages:
  nodejs: true
repo: https://github.com/kavo-labs/kavo
oasVersions:
  v2: false
  v3: true
  v3_1: true
  v3_2: false
---

## Overview

Kavo is a TypeScript CRUD framework that turns entity definitions into fully functional APIs. Decorate a NestJS controller with `@Kavo(Entity)` and get create, read, update, delete, filtering, sorting, pagination, and more — all with auto-generated OpenAPI documentation.

## Features

- **Code-first CRUD generation** — one decorator produces all standard operations
- **Multiple ORM adapters** — TypeORM, Prisma, Mongoose, and MikroORM
- **Framework bindings** — NestJS and Next.js App Router
- **Protocol bindings** — GraphQL schema and MCP (Model Context Protocol) tool exposure
- **Realtime transport** — Server-Sent Events via `@kavo/sse`
- **Full query grammar** — filtering, sorting, pagination, nested includes, and field selection
- **Generated OpenAPI docs** — via `@nestjs/swagger` integration
- **Configurable at every scope** — global, entity, operation, and per-call settings

## Usage

```bash
npm install @kavo/core @kavo/nest @kavo/typeorm
```

```ts
import { Kavo } from "@kavo/nest";
import { Controller } from "@nestjs/common";
import { Book } from "./book.entity";

@Kavo(Book)
@Controller("books")
export class BooksController {}
```

That's a full CRUD API with OpenAPI documentation. See the [documentation](https://kavo.js.org/getting-started) for the full walkthrough.
