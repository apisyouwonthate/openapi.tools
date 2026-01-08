---
name: "@nest-openapi/serializer"
description: High-performance response serialization for NestJS based on your OpenAPI spec using fast-json-stringify.
categories:
  - misc
link: https://nest-openapi.github.io/serializer/
languages:
  typescript: true
  nodejs: true
repo: https://github.com/ts-oas/nest-openapi
oasVersions:
  v2: false
  v3: true
  v3_1: true
  v3_2: false
---

## Overview

`@nest-openapi/serializer` provides high-performance response serialization for NestJS applications. It uses `fast-json-stringify` to automatically serialize responses according to your OpenAPI specification, ensuring output matches your API contract while maintaining optimal performance.

## Features

- **Spec-driven**: Automatically serializes responses based on your OpenAPI schema definitions
- **Fast by default**: Uses [`fast-json-stringify`](https://github.com/fastify/fast-json-stringify) with caching and optional pre‑compilation.
- **NestJS‑native**: Auto serializes with per‑route opt‑out and overrides.
- **Drop-in integration**: Works seamlessly with existing NestJS controllers
- **Platform agnostic**: Supports both Express and Fastify adapters

## Usage

Install the package and configure it in your NestJS module:

```typescript
import { Module } from "@nestjs/common";
import { OpenAPISerializerModule } from "@nest-openapi/serializer";
import * as openApiSpec from "./openapi.json";

@Module({
  imports: [
    OpenAPISerializerModule.forRoot({
      specSource: { type: "object", spec: openApiSpec },
      responseSerialization: { 
        enable: true, 
        skipErrorResponses: true 
      },
    }),
  ],
})
export class AppModule {}
```

You can disable serialization for specific routes using the `@Serialize` decorator:

```typescript
import { Controller, Post } from "@nestjs/common";
import { Serialize } from "@nest-openapi/serializer";

@Controller("books")
export class BooksController {
  @Post()
  @Serialize({ disable: true })
  create(@Body() dto: CreateBookDto): Book {
    return this.booksService.create(dto);
  }
}
```
