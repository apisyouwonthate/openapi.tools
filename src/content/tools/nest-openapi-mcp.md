---
name: '@nest-openapi/mcp'
description: Spec-driven Model Context Protocol (MCP) server utility for NestJS that exposes OpenAPI operations as MCP tools.
categories:
  - mcp
link: https://nest-openapi.github.io/mcp/
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

`@nest-openapi/mcp` enables spec-driven Model Context Protocol (MCP) server integration for NestJS applications. It automatically exposes your API operations defined in your OpenAPI specification as MCP tools, allowing AI assistants and agents to interact with your services effortlessly.

## Features

- **Spec-driven**: Generates MCP tools directly from your OpenAPI specification
- **API contract ↔ MCP contract**: Request/input and success response/output OpenAPI schemas are mapped into MCP tool schemas
- **Secure by default**: Tool exposure is opt-in by default (`x-mcp: true` per operation)
- **NestJS-native**: HTTP transport integration plus programmatic server APIs

## Usage

Install the package and configure it in your NestJS module:

```typescript
import { OpenAPIMcpModule } from '@nest-openapi/mcp';
import { Module } from '@nestjs/common';

import * as openApiSpec from './openapi.json';

@Module({
  imports: [
    OpenAPIMcpModule.forRoot({
      specSource: { type: 'object', spec: openApiSpec },
      http: { path: '/mcp' },
      executor: { baseUrl: 'http://127.0.0.1:3000' },
    }),
  ],
})
export class AppModule {}
```
