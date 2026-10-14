---
name: Bowire
description: The API workbench that embeds in your own service. It reads the OpenAPI description a running API serves and turns every operation into a callable method, in a browser UI or from the CLI.
categories:
  - http-clients
  - testing
  - mocking
  - mcp
link: https://bowire.io/
repo: https://github.com/Kuestenlogik/Bowire

oaiSpecs:
  oas: true

oasVersions:
  v2: true
  v3: true
  v3_1: true
  v3_2: false
---

Bowire is an open-source (Apache-2.0) API workbench for .NET. One line, `app.MapBowire()`, mounts it into an ASP.NET Core service, where it finds the service's APIs by itself. It also runs standalone as a dotnet tool against any URL: `dotnet tool install -g Kuestenlogik.Bowire.Tool`.

## OpenAPI Integration

Point Bowire at a service and it fetches the OpenAPI description the service serves, or the URL of a description you give it. It accepts OpenAPI 3.0 and 3.1 as well as Swagger 2.0, in JSON or YAML. Each operation becomes a method with a request form generated from its schema, including examples where the description provides them. From there you can:

- call operations and inspect responses, with environments and variables;
- record a session and replay it, or serve it as a mock;
- assert on responses in a recorded flow and run it in CI with `bowire test`;
- expose the operations as MCP tools (`--enable-mcp-adapter`), so an AI agent can call the API directly.

The same workbench speaks gRPC, GraphQL, SignalR, MQTT, WebSocket and more, so REST services described with OpenAPI sit next to the rest of a system rather than in a separate tool.
