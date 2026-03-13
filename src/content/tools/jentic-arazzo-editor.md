---
name: Arazzo Editor
description: |
  Build and edit Arazzo workflows with form-based editing and real-time
  diagrammatic representation. Export valid Arazzo 1.0.1 YAML, JSON,
  markdown, or HTML documents.
categories:
  - text-editors-extensions
  - docs
  - ides
link: https://jentic.com/arazzo-editor
languages:
  typescript: true
oaiSpecs:
  oas: true
  overlays: false
  arazzo: true
oasVersions:
  v2: true
  v3: true
  v3_1: true
  v3_2: true
badges:
  - arazzo-support
---

## Overview

Arazzo Editor is a free browser-based workflow authoring tool with form-based editing, live visual feedback, and optional code editing for power users. Build Arazzo workflows through structured forms while watching the execution diagram update in real-time — no YAML syntax required.

Think Stoplight Studio for APIs, but for multi-step workflow orchestration.

## Features

- **Form-based editing**: Add steps, configure parameters, define success criteria, and set up retry logic through structured forms
- **Live diagram updates**: Visual representation updates in real-time as you build, showing execution paths and dependencies
- **Code editing for power users**: Direct YAML/JSON editing with bidirectional synchronisation back to forms
- **Export multiple formats**: Valid Arazzo 1.0.1 YAML/JSON documents, plus markdown or HTML for documentation and human review
- **Full spec compliance**: No proprietary extensions, works with any Arazzo-compliant orchestrator

## Usage

**Web interface**: Visit https://jentic.com/arazzo-editor to start building workflows. Load existing Arazzo documents to evolve them, or create new workflows from scratch.

**Building a workflow**:

1. Add steps by selecting API operations from referenced OpenAPI specifications
2. Configure parameters using runtime expressions like `$inputs.userId` or `$steps.auth.outputs.token`
3. Define success criteria and failure handling (retry logic, goto actions, error paths)
4. Watch the live diagram update as you build, showing execution flow
5. Export valid Arazzo YAML or JSON when complete

**Power user workflow**: Switch to code view for bulk operations, copy/paste step definitions, or direct YAML editing. Changes sync back to forms immediately.
