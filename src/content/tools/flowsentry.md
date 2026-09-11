---
name: 'FlowSentry'
description: |
  Open-source security scanner for n8n workflow exports and MCP server configs. Detects unauthenticated webhooks, hardcoded API keys, SSRF, command injection and 14 more vulnerability classes across 18 rules, with findings ranked by severity and SARIF/JSON/HTML report output. Ships as a zero-dependency Python CLI, a PyPI package, and an MCP server listed in the official MCP Registry. For AI agents the same scan is available as a paid per-request API over the x402 protocol (USDC on Base), with a free demo header for evaluation.
categories:
  - security
  - schema-validators
link: https://flowsentry-agentpay.vercel.app
languages:
  cli: true
  python: true
repo: https://github.com/vasilicasijarvis/flowsentry
oaiSpecs:
  oas: false
  arazzo: false
oasVersions:
  v2: false
  v3: true
  v3_1: false
  v3_2: false
---