---
name: 'Rentgen'
description: 'Local-first API testing tool that imports OpenAPI descriptions and generates executable validation, boundary, security, and performance tests without scripts.'
categories:
  - testing
  - http-clients
  - security
languages: { TypeScript: true }
link: 'https://rentgen.io'
repo: 'https://github.com/Rentgen-io/Rentgen'
oaiSpecs:
  oas: true
  overlays: false
  arazzo: false
oasVersions:
  v2: true
  v3: true
  v3_1: true
---

## Overview

Rentgen is a local-first desktop API testing tool for developers and QA engineers, available for Windows, macOS, and Linux.

Import an OpenAPI description from a JSON file or URL to create a collection of endpoint requests. Configure the target environment and credentials, send a baseline request, and map its fields to generate and execute tests without writing scripts or assertions.

Rentgen also supports importing individual requests from cURL.

Core deterministic testing is free and requires no account or AI model. The source code is available for review under the project's source-available license.

## OpenAPI Integration

Rentgen imports OpenAPI 2.0, 3.0, and 3.1 descriptions in JSON format and creates a collection folder containing requests for the described operations.

The importer uses operation definitions, server URLs, parameters, request bodies, and security definitions to construct requests. Imported requests can be edited and configured before execution.

OpenAPI support focuses on importing descriptions into executable request collections. Rentgen's generated tests use the configured requests and field mappings.

## Features

- Automatic generation and execution of negative, type-validation, boundary, enum, whitespace, and malformed-input tests.
- Configurable field types, required fields, allowed values, numeric ranges, and expected HTTP status classes.
- Security checks covering authentication handling, unsupported methods, response headers, CORS, and oversized payloads.
- Performance checks with response-time measurements and concurrent requests.
- Collections and environments for organising and running requests.
- Persistent project configuration, including field mappings, expected results, and ignored checks.
- Expandable test results with request and response details.
- CLI support for CI/CD workflows.
- Optional AI analysis through OpenAI, Anthropic, or Ollama, providing result summaries, prioritised findings, and additional executable test suggestions.

## Privacy and Deployment

Requests are sent directly from the user's machine to the target API. Rentgen does not operate a backend that receives or stores API testing data. No account, telemetry, or cloud synchronisation is required for core testing.

Optional AI analysis connects directly to the configured provider. Local Ollama models can be used to keep AI processing on the user's infrastructure.

## Usage

1. Download and install Rentgen from the [releases page](https://github.com/Rentgen-io/Rentgen/releases).
2. Import an OpenAPI JSON file or provide the URL of an OpenAPI description.
3. Open an imported request and configure its URL, credentials, and input values.
4. Send the request to establish a working baseline.
5. Review field mappings and configure validation expectations.
6. Select **Generate & Run Tests**.
7. Inspect findings and expand individual results to examine the requests and responses.

Alternatively, import a working cURL request and follow the same mapping and testing workflow.

For command-line execution, see the [CLI documentation](https://rentgen.io/cli/).

## Pricing

Core deterministic API testing is free, including commercial internal use of the official binaries.

The optional Deeper AI Testing integration requires Rentgen Pro. Users provide their own model connection; cloud provider usage charges are separate.
