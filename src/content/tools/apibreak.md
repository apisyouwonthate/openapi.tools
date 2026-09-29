---
name: APIBreak
description: Watches the OpenAPI descriptions of third-party APIs you depend on
  and fails a CI build when a change touches an endpoint you declared. Compares
  each vendor description against a baseline you pin, reports only the
  operations in your manifest, and records the vendor revision it read. Runs as
  a GitHub Action or a CLI. No vendor credentials, no repository access.
categories:
  - breaking-changes
link: https://apibreak.dev
languages:
  any: true
  cli: true
repo: https://github.com/Skyblueballykid/apibreak
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
