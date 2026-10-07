---
name: DotNetOpenApiExtract
description: |
  Generates OpenAPI descriptions from compiled ASP.NET Core controller assemblies by static analysis, without starting the application or running its startup code. Reads routing, Swashbuckle and validation attributes, XML documentation comments, and optionally analyses Program.cs with Roslyn. Includes a CI-oriented completeness check for the generated OpenAPI description.
categories:
  - annotations
languages:
  dot-net: true
link: https://www.nuget.org/packages/DotNetOpenApiExtract
repo: https://github.com/rebaseandpanic/dotnet-openapi-extract
oaiSpecs:
  oas: true
  overlays: false
  arazzo: false
oasVersions:
  v2: false
  v3: true
  v3_1: true
  v3_2: true
---

## Overview

Code-first generators for ASP.NET Core get the OpenAPI description by loading
the application and running its startup code. When that code needs a database,
a message broker or required environment variables, generation fails in CI
unless the startup path is guarded.

DotNetOpenApiExtract reads the compiled assembly through
`MetadataLoadContext` and never executes code from it, so it only needs the
build output directory.

## Features

- Controllers, attribute routes, parameters, responses and DTO schemas, including generics, inheritance, enums and nullable reference types
- Swashbuckle annotations (`[SwaggerOperation]`, `[SwaggerParameter]`, `[SwaggerSchema]`, `[SwaggerTag]`), DataAnnotations validation attributes and XML documentation comments
- Optional Roslyn analysis of `Program.cs` for security schemes and requirements, `UsePathBase`, `AddProblemDetails` and JSON serializer options
- Output as OpenAPI 3.0, 3.1 or 3.2, in JSON or YAML
- `--validate`: 52 completeness rules (missing descriptions, undeclared security schemes, missing error responses and so on), with an exit code for CI and a JSON report; also runs standalone on an existing OpenAPI description

Minimal API endpoints (`app.MapGet(...)`) and runtime Swashbuckle filters are out of scope because they are defined in code that only runs at runtime.

## Usage

```bash
dotnet tool install -g DotNetOpenApiExtract
dotnet openapi-extract --assembly bin/Release/net10.0/MyApi.dll --output openapi.json --validate
```
