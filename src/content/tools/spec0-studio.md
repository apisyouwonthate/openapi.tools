---
name: Spec0 Studio
description: |
  A desktop API client that starts from the OpenAPI description instead of a collection. Requests are built from the operations in the description, and every JSON response is checked against the schema declared for its status code. It can also run a local mock of any API in one click, and a local MCP server lets coding agents call the operations through Studio, with your approval for each new host. Studio is free, MIT licensed, and works without an account or telemetry, on macOS, Windows and Linux.
categories:
  - http-clients
  - testing
  - mocking
  - mcp
link: https://spec0.io/products/studio
repo: https://github.com/spec-0/studio
# desktop:
#   macos: true
#   windows: true
#   linux: true
oaiSpecs:
  oas: true
  overlays: false
  arazzo: false
oasVersions:
  v2: true
  v3: true
  v3_1: true
  v3_2: false
---

## Overview

Most API clients treat the collection as the source of truth, and an OpenAPI description is something you import once to get started. Studio works the other way round. Requests come from the description, collections point at its operations rather than copying them, and when the description changes, a collection step that no longer matches it is marked.

It's young and does less than Postman or Bruno. There's no scripting, command-line runner or shared team workspace yet, and it only speaks HTTP. What it does well is keep your requests, mocks and checks tied to the description you already have.

## Features

- Requests built from the description, with allowed values offered as dropdowns and bodies started from the real field names
- Every JSON response checked against the declared schema, including fields the schema doesn't mention
- Collections that chain requests across several APIs, with a view of every value passed between steps and a log for each run
- A schema graph showing which schemas refer to which, and which operations use them
- One-click local mocks that answer from the description's examples, with no account or network needed
- A local MCP server, so coding agents such as Claude Code or Cursor can send requests and start mocks through Studio. An agent's first request to each host waits for your approval
- Postman collection import (scripts aren't run)
- Swagger 2.0 descriptions are converted to OpenAPI 3.0 when opened

## Privacy

Studio sends no telemetry and only talks to the servers you point it at. Secrets are kept in the operating system's credential store, and the MCP server and local mocks listen on `127.0.0.1` only.

## Usage

Download the installer for macOS, Windows or Linux from the [latest release](https://github.com/spec-0/studio/releases/latest), open an OpenAPI description from a file or URL, and send a request. The [user guide](https://studio-docs.spec0.io/) covers collections, mocks and the MCP server.
