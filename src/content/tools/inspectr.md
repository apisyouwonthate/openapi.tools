---
name: Inspectr
description: Inspectr - Observe, mock and test APIs using OpenAPI. Realtime visibility and mocking for your APIs.
link: https://inspectr.dev
repo: https://github.com/inspectr-dev/inspectr
categories:
  - testing
  - mock-servers
  - learning
oasVersions:
  - '3.2'
  - '3.1'
  - '3.0'
oaiSpecs:
  oas: true
  overlays: false
---

## Overview

Inspectr is a real-time HTTP inspection and debugging tool for APIs and webhooks, built around OpenAPI documents. It helps developers observe live traffic, analyze integrations, and mock APIs during development and testing.

By combining traffic inspection with OpenAPI-based mocking, Inspectr makes API behavior visible at runtime and simplifies debugging of API- and webhook-driven workflows.

## Features

- **Inspect API requests**: View headers, query parameters, request bodies, and response details in real time.
- **Analyze webhook events**: Capture and review webhook payloads from third-party services.
- **Full data privacy and control**: Requests and responses are processed and stored locally.
- **Public tunnel**: Expose local services using secure, custom subdomains for testing and demos.
- **Mock APIs from OpenAPI**: Generate a complete mock backend from an OpenAPI specification in seconds.
- **Record and export to OpenAPI**: Record live traffic and export it as an OpenAPI specification for documentation or contract generation.
- **Real-time logging**: Monitor incoming requests as they happen via the terminal and web UI.

## Usage

Inspectr can be run locally during development or used with a public tunnel to inspect external integrations.

A typical workflow includes:

1. Start Inspectr locally, using an OpenAPI document for mocking or a REST API service.
2. Send API or webhook traffic to Inspectr or through its public tunnel.
3. Inspect requests and responses in real time.
4. Export the API requests as an OpenAPI document or share it for testing, demos or collaboration.

Inspectr fits naturally into local development, integration testing, and API debugging workflows, complementing OpenAPI design-time tools with runtime visibility.
