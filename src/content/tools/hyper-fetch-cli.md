---
name: HyperFetch CLI
description: Generates a typed TypeScript SDK from an OpenAPI description, with a request for every operation built on the HyperFetch data fetching framework.
categories:
  - sdk-generators
link: https://hyperfetch.bettertyped.com/docs/cli/overview/
languages:
  typescript: true
repo: https://github.com/BetterTyped/hyper-fetch
oasVersions:
  v2: false
  v3: true
  v3_1: true
  v3_2: false
---

## Overview

The HyperFetch CLI (`@hyper-fetch/cli`) reads an OpenAPI description from a URL or a local JSON file and writes one TypeScript file with a typed SDK built on `@hyper-fetch/core`. Path parameters, request bodies, query parameters, responses and errors are typed from the OpenAPI description, and the output is plain code you can read and edit.

## Features

- One command generates a typed request for every operation
- Paths become properties: `GET /users/{userId}` is `sdk.users.$userId.$get` with typed `setParams()`
- Reads remote or local OpenAPI descriptions
- Interactive prompts, or flags for CI
- Generated requests get HyperFetch caching, retries, deduplication, offline replay and React hooks

## Usage

```bash
npx @hyper-fetch/cli init
npx @hyper-fetch/cli generate --url https://api.example.com/openapi.json
```

```ts
import { createClient } from '@hyper-fetch/core';
import { createSdk } from './api/api-openapi.sdk';

const sdk = createSdk(createClient({ url: 'https://api.example.com' }));

const { data: user } = await sdk.users.$userId.$get
  .setParams({ userId: 1 })
  .send();
```
