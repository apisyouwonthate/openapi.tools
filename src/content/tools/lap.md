---
name: 'LAP'
description: 'Compiles API specs into lean, token-efficient formats for AI coding agents. Prevents hallucinated API calls with 1,500+ pre-compiled specs.'
categories:
  - docs
  - code-generators
languages: { 'JavaScript': true, 'Python': true, 'TypeScript': true }
link: 'https://lap.sh'
repo: 'https://github.com/Lap-Platform/LAP'
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

LAP (Lean API Platform) compiles API specifications into compressed, agent-optimized formats. It reduces token usage by up to 10× while maintaining 86% accuracy for AI coding agents — compared to 40% without any spec.

Supports OpenAPI, GraphQL, AsyncAPI, Protobuf, and Postman collections.

## Features

- Compiles specs into lean formats optimized for LLM context windows
- Registry of 1,500+ pre-compiled API specs ready to use
- CLI tools for both npm (`@lap-platform/lapsh`) and PyPI (`lapsh`)
- Cursor integration via `lap init --target cursor`
- Claude Code skill generation via `lap skill-install`
- 52% token reduction, 35% cost reduction vs raw specs

## Usage

```bash
npx @lap-platform/lapsh init --target cursor
npx @lap-platform/lapsh search stripe
npx @lap-platform/lapsh skill-install stripe
```
