---
name: speccaster
description: Generate contract tests from your OpenAPI spec — a committed node:test suite that your CI regenerates, fails on spec drift, then runs against your live API.
categories:
  - testing
  - data-validators
languages:
  javascript: true
link: https://gonreyna85code.github.io/speccaster/
repo: https://github.com/gonreyna85code/speccaster
oaiSpecs:
  oas: true
  overlays: false
  arazzo: false
oasVersions:
  v2: false
  v3: true
  v3_1: true
  v3_2: false
---

## Overview

SpecCaster is a zero-config CLI that turns your OpenAPI 3.0/3.1 description into
an owned, committed `node:test` contract suite inside your repository. It is not
a SaaS and makes no network calls at runtime — tests are plain files you can read,
extend, and review.

## Features

- `npx speccaster init` writes `speccaster/contract.test.js` plus a GitHub Actions
  workflow from your local OpenAPI YAML/JSON spec.
- `npx speccaster drift` fails your CI whenever the committed suite is out of sync
  with the spec — the freshness gate.
- `npx speccaster demo` proves the loop in seconds: ephemeral API, generated suite,
  and a drift demonstration, with nothing written to your repo.
- Tests call each operation with sample payloads derived from your request schemas
  and assert the response status and content-type match the spec.

## Usage

```bash
npx speccaster demo                       # see it work in seconds (no setup)
npx speccaster init --spec openapi.yaml   # generate suite + CI workflow
SPECCASTER_BASE_URL=https://api.example.com/v1 node --test speccaster/contract.test.js
```

OpenAPI 3.0/3.1 (JSON or YAML). Node 18+. Free, MIT, open source.