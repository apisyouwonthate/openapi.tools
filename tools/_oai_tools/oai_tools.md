---
owner: openapi_tools
description: OAI Tools
layout: default
---

# <a href="..">{{ page.collection }}</a>

## {{ page.slug }} - {{ page.description }}

The `{{ page.slug }}` `alternativeSchema` `type` refers to [JSON Schema](http://json-schema.org/) in any version.

{% if page.issue %}
### GitHub Issue

* [#{{ page.issue }}](https://github.com/OAI/OpenAPI-Specification/issues/{{ page.issue }})
{% endif %}
