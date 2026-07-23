---
name: Routebase
description: Routebase is an OpenAPI-native platform that keeps your API as a single source of truth. Teams design their OpenAPI description in a visual editor, then generate documentation portals, mock servers, contract tests, and drift monitoring from that one description. Change the description, publish, and Routebase flags whatever drifted. Every workspace also ships a built-in Model Context Protocol (MCP) server, so AI agents work from the same OpenAPI description.
categories:
  - docs
  - mocking
  - testing
  - monitoring
  - mcp
link: https://routebase.dev/
languages:
  saas: true
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

Routebase unifies the API lifecycle around one OpenAPI description. Documentation portals, mock servers, contract tests, and monitoring all derive from the same source, so they never drift apart. A built-in MCP server exposes the same workspace to AI agents under a team's permissions.

## Features

- Visual editor for OpenAPI descriptions — endpoints, schemas, and versions without hand-edited YAML
- Documentation portals generated from the description, on your own custom domain
- Mock servers generated straight from the description, with custom rules and proxy mode
- Contract testing that validates live responses against the description and flags drift
- Scheduled monitoring with field-level breaking-change detection
- Spec branches with review and merge, plus breaking-change checks
- Built-in Model Context Protocol (MCP) server for AI-agent access
