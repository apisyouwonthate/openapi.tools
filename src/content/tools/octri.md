---
name: Octri
description: Generate API documentation, SDKs in ten languages and a hosted MCP server from one OpenAPI description, with an opt-in error reporter in every SDK.
categories:
  - sdk-generators
  - docs
  - mcp
  - monitoring
link: https://octri.dev
languages:
  typescript: true
  python: true
  golang: true
  rust: true
  ruby: true
  php: true
  dart: true
  swift: true
  java: true
  kotlin: true
  saas: true
oaiSpecs:
  oas: true
oasVersions:
  v2: true
  v3: true
  v3_1: true
---

## Overview

Octri is a hosted platform that builds from one OpenAPI description: a documentation site, client SDKs in ten languages and an MCP server. Each output rebuilds when the description changes. Swagger 2.0 descriptions are converted to OpenAPI 3 on import.

## Features

- SDKs for TypeScript, Python, Go, Java, Kotlin, Ruby, PHP, Rust, Swift and Dart, published to npm, PyPI, Maven Central, RubyGems, Packagist, crates.io and pub.dev, or released by git tag for Go and Swift
- A hosted documentation site with a request playground and search, on your own domain
- A hosted MCP server with one tool per operation, for Claude, Cursor, VS Code and other MCP clients
- An error reporter in every SDK that ships switched off; when the developer using the SDK turns it on, errors reach the API owner tagged with the SDK version, language and operation
- Free tier, no sales call needed

## Usage

Sign up at https://octri.dev and upload an OpenAPI description, point at its URL, or connect a GitHub repository. From the command line:

    npm install -g @octri/cli
    octri auth login
    octri specs push ./openapi.yaml
    octri sdk build --lang go,typescript --download
