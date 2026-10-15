---
name: GranthAi
description: Express middleware that generates an OpenAPI 3.0 description from live request/response traffic and serves it as interactive documentation at /api-docs, with no annotations required.
categories:
  - code-generators
  - docs
link: https://granthai.vercel.app
languages:
  nodejs: true
repo: https://github.com/omkarajagunde/granthai
oaiSpecs:
  oas: true
  overlays: false
  arazzo: false
oasVersions:
  v2: false
  v3: true
  v3_1: false
  v3_2: false
---

## Overview

GranthAi is a drop-in Express middleware that observes the requests your API handles and the responses it sends, and builds an OpenAPI 3.0 description from them. There are no code annotations or hand-written YAML to maintain: exercise your endpoints (manually, through tests, or in a staging environment) and the description fills itself in.

## Features

- Infers paths, HTTP methods, path and query parameters from real traffic
- Generates JSON Schemas for request bodies and responses, keyed by status code and content type
- Writes the generated description to `openapi.json` next to the server entry point
- Serves interactive Swagger UI documentation at `/api-docs`

## Usage

```js
const express = require('express');
const GranthAi = require('granthai');

const app = express();
app.use(
  GranthAi({
    docTitle: 'My API', // optional
    baseUrl: 'https://api.example.com', // required
  })
);
```

Start the server, send some requests, then open `/api-docs` to view the generated documentation. If you use nodemon, add `openapi.json` to its ignore list.
