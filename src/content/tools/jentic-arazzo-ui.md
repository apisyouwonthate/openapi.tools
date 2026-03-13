---
name: Arazzo UI
description: |
  Visualize Arazzo workflows as interactive documentation. It provides diagram views, documentation views, and a split view combining both
categories:
  - docs
link: https://arazzo-ui.jentic.com/
languages:
  cli: true
  typescript: true
repo: https://github.com/jentic/jentic-arazzo-tools/tree/main/packages/jentic-arazzo-ui
oaiSpecs:
  oas: true
  overlays: false
  arazzo: true
oasVersions:
  v2: true
  v3: true
  v3_1: true
  v3_2: false
badges:
  - arazzo-support
---

## Overview

Arazzo UI is an open-source tool for visualizing Arazzo workflow documents. It renders YAML or JSON workflow definitions as sequence diagrams, flow charts, and structured documentation—making multi-step API orchestration logic accessible without parsing raw specifications.

Load local files or share remote workflows via URL with no configuration required. Think SwaggerUI or Scalar for OpenAPI, but for API workflows.

## Features

- **Multiple visualization modes**: Sequence diagrams, flow diagrams, and documentation views
- **Remote workflow loading**: Share workflows via URL using the `document` query parameter
- **Command-line support**: Open workflows directly from terminal with `npx @jentic/arazzo-ui [url]`
- **No setup required**: Browser-based, zero configuration
- **Full Arazzo 1.0.1 support**: Renders all workflow elements including steps, dependencies, success/failure paths, and retry logic

## Usage

**Web Interface:**
Visit https://arazzo-ui.jentic.com and upload a local Arazzo document or paste a URL to a remote workflow.

**Share workflows via URL:**
https://arazzo-ui.jentic.com?document=https://your-domain.com/workflow.arazzo.yaml

**Command line:**

```bash
npx @jentic/arazzo-ui https://example.com/workflow.arazzo.yaml

Opens the workflow in your default browser for visualization.
```
