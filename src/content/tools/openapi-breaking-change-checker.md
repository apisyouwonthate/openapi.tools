---
name: OpenAPI Breaking Change Checker
description: Browser-based comparison of Swagger 2.0 and OpenAPI 3.0 or 3.1 descriptions that classifies likely client-breaking, review-needed, and compatible changes.
categories:
  - data-validators
  - testing
languages:
  typescript: true
link: https://martingruner.com/tools/openapi-breaking-change-checker
oasVersions:
  v2: true
  v3: true
  v3_1: true
  v3_2: false
---

## Overview

OpenAPI Breaking Change Checker compares a baseline API description with a candidate replacement locally in the browser. It accepts JSON or YAML and does not upload the descriptions to a server.

The report separates likely consumer-breaking changes from changes that need manual review and changes that are normally compatible. It is intended as a review aid rather than a proof of compatibility.

## Features

- Detects removed paths and operations, newly required parameters or request fields, removed response media types, schema type changes, response-property removals, and selected enum and security changes.
- Resolves internal JSON Pointer references and reports unresolved external references as warnings.
- Supports Swagger 2.0 and OpenAPI 3.0 or 3.1 descriptions in JSON or YAML.
- Exports the generated compatibility report as Markdown.

## Usage

Open the tool, paste or select a baseline description and a candidate description, then run the comparison. Review breaking findings first, investigate review-needed findings in the context of the implementation, and download the Markdown report when a durable review record is useful.
