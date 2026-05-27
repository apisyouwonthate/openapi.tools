---
name: Counterfact
description: Counterfact turns an OpenAPI document into a live API simulation. Unlike most mock servers, it is stateful, and its state can be queried and manipulated through a built-in JavaScript REPL. It supports reusable scenarios, custom behavior written in TypeScript, and selectively proxying endpoints to a real backend. Every change applies immediately — no server restart required. Counterfact was originally built to help frontend teams develop against APIs before the backend is finished, and to test scenarios that are difficult to reproduce reliably in real environments. It also turns out to be useful for agentic coding workflows when building against third-party APIs, allowing agents to experiment and iterate quickly in a sandbox that is deterministic, inexpensive, and free from rate limits.
categories:
  - mocking
  - sdk-generators
  - testing
  - data-validators
link: https://counterfact.dev
languages:
  typescript: true
  nodejs: true
repo: https://github.com/counterfact/api-simulator
oaiSpecs:
  oas: true
  overlays: true
badges:
  - oas-v32-early
  - overlays-pioneer
oasVersions:
  v2: true
  v3: true
  v3_1: true
  v3_2: true
---
