---
name: "@nest-openapi/mock"
description: Spec-driven mock server for NestJS that generates realistic mock responses from OpenAPI.
categories:
  - mocking-tools
link: https://nest-openapi.github.io/mock/
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

`@nest-openapi/mock` enables spec-driven mocking for NestJS applications. It generates realistic mock responses from your OpenAPI specification, making it ideal for development, testing, and frontend development when backend APIs are not yet available.

## Features

- **Spec-driven mocking**: Generates mock responses directly from your OpenAPI specification
- **Multiple strategies**: Examples, JSON Schema Faker, response recording/reply, primitive values, or passthrough
- **Selective mocking**: Can mock all routes by default or specific routes only
- **Drop-in integration**: Works seamlessly with existing NestJS controllers
- **Flexible**: Per-route overrides and request header hints

## Usage

Install the package and configure it in your NestJS module:

```typescript
import { Module } from "@nestjs/common";
import { OpenAPIMockModule } from "@nest-openapi/mock";
import * as openApiSpec from "./openapi.json";

@Module({
  imports: [
    OpenAPIMockModule.forRoot({
      specSource: { type: "object", spec: openApiSpec },
      enable: process.env.NODE_ENV === "development",
      mockByDefault: true, // Mock all routes by default, like a mock server
    }),
  ],
})
export class AppModule {}
```
