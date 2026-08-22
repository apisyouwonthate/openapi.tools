---
name: apispec
description: Generates an OpenAPI description from Go source by static analysis — type-checking the packages and walking the call graph from each route registration to the handler that serves it, with no annotations required.
categories:
  - converters
link: https://apispec.ehabterra.com
languages:
  golang: true
repo: https://github.com/ehabterra/apispec
oasVersions:
  v2: false
  v3: false
  v3_1: true
  v3_2: false
---

## Overview

apispec analyses a Go module and produces an OpenAPI 3.1 description of the API it
implements. Rather than reading annotations, it type-checks the packages with `go/types`
and walks the call graph from each route registration to the handler that actually serves
the request, inferring paths, parameters, request bodies and responses from the code
itself. Because the description is derived from the source, it cannot fall out of step
with it.

It detects Gin, Echo, chi, Fiber, Gorilla Mux and the standard library `net/http`
(including Go 1.22 method-aware `ServeMux` patterns), maps `go-playground/validator` tags
to OpenAPI constraints, and resolves generics, type aliases and embedded types. Framework
behaviour is described as configurable patterns rather than hard-coded, so a router can be
added or adjusted without changing the engine.

Output is deterministic with stable key ordering, so a committed description regenerates
byte-for-byte and can be diffed in CI to catch contract drift.

Two companion tools share the same analysis engine: `apispecui`, a local browser UI that
configures the generator and previews the result through Swagger UI, Redoc or Scalar, and
`apidiag`, a standalone call-graph server for exploring large codebases.
