---
name: Sourcey
description: Sourcey generates a static documentation site from OpenAPI descriptions, with API reference pages, code samples, search, and Markdown guides.
categories:
  - docs
  - mcp
link: https://sourcey.com/
repo: https://github.com/sourcey/sourcey
languages:
  nodejs: true
  typescript: true
oasVersions:
  v2: true
  v3: true
  v3_1: true
  v3_2: true
---

## Overview

[Sourcey](https://sourcey.com/) is an open source static documentation generator. It reads an OpenAPI Description from a local YAML or JSON file, or from a URL, and produces a directory of HTML, CSS, JavaScript, search data, sitemap data, and plain text files. The output can be served by an ordinary web server or static host. No server-side rendering process is required after the build finishes.

The OpenAPI adapter renders operations, parameters, request bodies, responses, security schemes, and component schemas. It also generates request examples in several programming languages. Sourcey can place the generated API reference beside Markdown guides in the same navigation structure, which is useful when a project needs task-oriented documentation as well as a reference.

Sourcey accepts OpenAPI 3.0, 3.1, and 3.2. Swagger 2.0 input is converted to OpenAPI 3.x during the build. A project can use a TypeScript configuration file for multiple documentation sources and custom navigation, but a standalone OpenAPI Description does not require configuration.

## Installation and quick build

Sourcey 3.6.5 requires Node.js 20 or newer. Install the CLI as a development dependency so the generator version can be pinned with the rest of the project:

```bash
pnpm add -D sourcey citty
```

Then build a static site directly from an OpenAPI Description:

```bash
pnpm exec sourcey build openapi.yaml -o dist
```

The entry point is `dist/index.html`. Sourcey's standard output also includes a dedicated API page, a client-side search index, `sitemap.xml`, `llms.txt`, and `llms-full.txt`. The exact page set depends on the configured navigation and source adapters.

The explicit `citty` package in the pnpm example reflects a packaging issue observed with Sourcey 3.6.5 and pnpm 11 in a clean project. `pnpm dlx sourcey@latest` did not resolve that dependency, while a local installation of `sourcey` and `citty` built the same OpenAPI file successfully. This extra dependency may no longer be necessary after the package metadata is corrected. Sourcey's documentation also describes a global npm installation that exposes the same `sourcey build` command.

## Minimal input

For example, save this as `openapi.yaml`:

```yaml
openapi: 3.0.3
info:
  title: Tasks API
  version: 1.0.0
paths:
  /tasks:
    get:
      summary: List tasks
      responses:
        '200':
          description: A list of tasks
```

Running the build command creates a browsable page for the `GET /tasks` operation. During a local verification of version 3.6.5, the command reported one operation, completed successfully, and generated nine files. Serving `dist` with a local HTTP server returned status 200 and displayed the API title, operation summary, and path from the input file.

## Project configuration

For a larger documentation site, add a `sourcey.config.ts` file and register the OpenAPI adapter in a navigation tab. This allows a project to combine several inputs, control page order, set metadata, and apply branding. Keeping the configuration and package lock in version control makes the documentation build reproducible in continuous integration.

A typical deployment job installs locked dependencies, runs the build command, and publishes `dist`. Review the output through a local HTTP server instead of opening `index.html` with a `file:` URL, since browser security rules can affect asset and script loading. The resulting files remain portable across static hosting providers and can also be copied into an existing web server's document root.
