---
name: OASForge
description: |
  A browser-based OpenAPI workbench: a YAML editor with live Swagger UI preview, version-aware validation with one-click fixes, a stateful in-browser mock server, Postman collection import and a Swagger 2.0 converter. No account and no backend — OpenAPI descriptions never leave the browser, and the whole tool works offline as a PWA or a single HTML file.
categories:
  - ides
  - mocking
  - converters
link: https://oasforge.dev
repo: https://github.com/dikeckaan/swagger-dark-ui
languages:
  javascript: true
  web: true
oasVersions:
  v2: true
  v3: true
  v3_1: true
  v3_2: true
---

## Overview

OASForge runs entirely client-side: documents live in the browser's local
storage and the built-in mock server answers "Try it out" requests inside the
page, which makes it usable for internal or unreleased API descriptions.

## Features

- Version-aware validation for Swagger 2.0 and OpenAPI 3.0 / 3.1 / 3.2, most findings with a one-click fix
- Stateful in-browser mock server (POST creates records, GET lists them back)
- Postman Collection v2/v2.1 import and Swagger 2.0 → OpenAPI 3 conversion
- Context-aware autocomplete, structure insert menu, version history with diff
- Exports: Postman collection, standalone HTML docs, shareable links
