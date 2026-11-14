---
name: 'ParityDiff'
description: 'Tracks captured OpenAPI revisions, classifies breaking changes, and maps supported GitHub call sites.'
categories:
  - breaking-changes
link: 'https://paritydiff.com'
oasVersions:
  v2: false
  v3: true
  v3_1: true
  v3_2: false
---

## Overview

ParityDiff records public OpenAPI revisions and exposes the captured contract
findings with their operation, rule, and source. Its GitHub integration can
map supported call sites in repositories the user authorizes.

## Usage

Start with the public API catalog at https://paritydiff.com/monitoring or
replay a captured change at https://paritydiff.com/tools/openapi-breaking-change-checker.
The optional public MCP server is documented at https://paritydiff.com/mcp.
