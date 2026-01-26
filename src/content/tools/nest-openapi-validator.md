---
name: '@nest-openapi/validator'
description: Automatic request/response validation for NestJS based on your OpenAPI spec using AJV.
categories:
  - data-validators
link: https://nest-openapi.github.io/validator/
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

`@nest-openapi/validator` provides automatic, highly configurable request and response validation for NestJS applications using your OpenAPI specification as the single source of truth. It validates incoming requests and outgoing responses against your OpenAPI spec, ensuring API contracts are enforced at runtime.

## Features

- **Spec‑driven**: The OpenAPI spec is the contract; validation is generated from it
- **Fast by Design**: [AJV under the hood](https://github.com/ajv-validator/ajv), with caching and optional pre-compilation
- **NestJS‑native**: Auto validates with per‑route opt‑out and overrides
- **Drop-in integration**: Works seamlessly with existing NestJS controllers
- **Platform agnostic**: Supports both Express and Fastify adapters

## Usage

Install the package and configure it in your NestJS module:

```typescript
import { OpenAPIValidatorModule } from '@nest-openapi/validator';
import { Module } from '@nestjs/common';

import * as openApiSpec from './openapi.json';

@Module({
  imports: [
    OpenAPIValidatorModule.forRoot({
      specSource: { type: 'object', spec: openApiSpec },
    }),
  ],
})
export class AppModule {}
```

You can also use per-route decorators to customize validation behavior:

```typescript
import { Validate } from '@nest-openapi/validator';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Post()
  @Validate({ request: { query: false }, response: true })
  create(@Body() dto: CreateBookDto): Book {
    return this.booksService.create(dto);
  }
}
```
