---
name: pi-openapi-tools
description: Pi extension that generates one LLM tool per OpenAPI/Swagger operation at runtime, with prefix-scoped tool management and auth helper commands.
categories:
  - code-generators
  - misc
link: https://www.npmjs.com/package/pi-openapi-tools
languages:
  typescript: true
repo: https://github.com/gtesei/pi-openapi-tools
oasVersions:
  v2: true
  v3: true
  v3_1: true
  v3_2: false
---

## Overview

pi-openapi-tools is a Pi extension that loads an OpenAPI/Swagger spec URL and dynamically registers executable tools for each operation.

## Highlights:

- Runtime generation of tools from API operations
- Supports both Swagger 2.0 and OpenAPI 3.x
- Prefix-scoped registration (`/swagger-tools:list-prefixes`, `/swagger-tools:remove-prefix`)
- Auth helper for token endpoints (`/swagger-tools:auth`)
- Install from npm:

```bash
pi install npm:pi-openapi-tools
```

```

Repository: https://github.com/gtesei/pi-openapi-tools

```

Click **Commit changes**.

---

## 4) Open Pull Request

After commit, click **Contribute → Open pull request**.

### PR title

`Add pi-openapi-tools`

### PR body (paste)

```md
Adds `pi-openapi-tools`, a TypeScript Pi extension that turns OpenAPI/Swagger operations into runtime LLM tools.

- npm: https://www.npmjs.com/package/pi-openapi-tools
- repo: https://github.com/gtesei/pi-openapi-tools
- supports Swagger 2.0 and OpenAPI 3.x
```
