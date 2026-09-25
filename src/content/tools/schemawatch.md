---
name: 'SchemaWatch'
description: 'Monitor third-party API schemas for breaking changes. Get quality scores, track historical versions, and get alerted before production breaks.'
categories:
  - breaking-changes
  - monitoring
  - schema-validators
languages:
  python: true
link: 'https://pypi.org/project/schemawatch/'
repo: 'https://github.com/CemCelik79/schemawatch'
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

SchemaWatch is an API schema monitoring tool that crawls third-party API descriptions, detects breaking changes, and alerts teams before production breaks. It maintains historical schema versions in an append-only database, creating a data moat that grows more valuable over time.

## Features

- **Quality Scoring** — Get an A-F grade for any OpenAPI description with detailed category breakdowns (Completeness, Consistency, Documentation, Security, Best Practices, Machine Readability)
- **Breaking Change Detection** — Automatically detect removed endpoints, changed parameters, modified response schemas, and other breaking changes
- **Historical Tracking** — Store every version of every schema, enabling diff views between any two points in time
- **Email Alerts** — Get notified when schemas change, with configurable alert thresholds
- **Free Validator** — Validate any OpenAPI URL instantly, no signup required
- **API Quality Leaderboard** — See how popular APIs rank by description quality (Stripe, GitHub, Slack, Twilio, etc.)
- **Embeddable Badges** — Show your API quality score in your README with SVG badges
