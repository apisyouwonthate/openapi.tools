---
name: 'SchemaWatch'
description: 'Monitor third-party API schemas for breaking changes. Get quality scores, track historical versions, and get alerted before production breaks.'
categories:
  - monitoring
  - schema-validators
languages: { 'Python': true }
link: 'https://schemawatch.tuvia.nl'
repo: 'https://github.com/ovoWeb/tuvia'
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

SchemaWatch is an API schema monitoring tool that crawls third-party API specifications (OpenAPI/Swagger), detects breaking changes, and alerts teams before production breaks. It maintains historical schema versions in an append-only database, creating a data moat that grows more valuable over time.

## Features

- **Quality Scoring** — Get an A-F grade for any OpenAPI spec with detailed category breakdowns (Completeness, Consistency, Documentation, Security, Best Practices, Machine Readability)
- **Breaking Change Detection** — Automatically detect removed endpoints, changed parameters, modified response schemas, and other breaking changes
- **Historical Tracking** — Store every version of every schema, enabling diff views between any two points in time
- **Email Alerts** — Get notified when schemas change, with configurable alert thresholds
- **Free Validator** — Validate any OpenAPI/Swagger spec URL instantly, no signup required
- **API Quality Leaderboard** — See how popular APIs rank by spec quality (Stripe, GitHub, Slack, Twilio, etc.)
- **Embeddable Badges** — Show your API quality score in your README with SVG badges

## Usage

1. Visit [schemawatch.tuvia.nl/validate](https://schemawatch.tuvia.nl/validate)
2. Paste any OpenAPI/Swagger spec URL
3. Get instant quality score and analysis
4. Optionally sign up for free monitoring (3 APIs)

### API Access

```bash
curl -X POST https://schemawatch.tuvia.nl/api/v1/validate \
  -H "Content-Type: application/json" \
  -d '{"url": "https://petstore3.swagger.io/api/v3/openapi.json"}'
```
