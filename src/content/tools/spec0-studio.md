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

In Studio, the OpenAPI description is the starting point. You open it from a file or a URL, and each operation becomes a request you can send, with the parameters and body already filled in from the schema. Collections refer to those operations rather than keeping their own copies, so when the description changes, Studio marks any collection step that no longer matches it.

Studio is still young and does less than Postman or Bruno. It has no scripting, command-line runner or shared team workspace yet, and it only does HTTP. It's a good fit if you already keep an OpenAPI description and want your requests, mocks and response checks to follow it.

## Features

- Requests built from the description. Enum values show up as dropdowns, and request bodies start with the real field names.
- Each JSON response is checked against the schema declared for its status code, and fields the schema doesn't mention are flagged.
- Collections can chain requests across several APIs. The Chain view shows every value passed from one step to the next, and each run has a log that says why a step failed.
- The Graph tab shows which schemas refer to which, and which operations use them.
- Local mocks start with one click and answer from the examples in the description. They don't need an account or a network connection.
- A local MCP server lets coding agents such as Claude Code or Cursor send requests and start mocks through Studio. The first request an agent makes to each host waits for your approval.
- Postman collections can be imported, although their scripts aren't run.
- Swagger 2.0 descriptions are converted to OpenAPI 3.0 when you open them.

## Privacy

Studio doesn't send telemetry, and it only talks to the servers you point it at. Secrets are stored in your operating system's credential store. The MCP server and local mocks listen on `127.0.0.1` only.

## Usage

Download the installer for your platform from the [latest release](https://github.com/spec-0/studio/releases/latest), open an OpenAPI description, and send a request. The [user guide](https://studio-docs.spec0.io/) explains collections, mocks and the MCP server in more detail.
