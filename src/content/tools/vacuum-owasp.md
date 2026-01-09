---
name: vacuum OWASP
description: OWASP API security ruleset for vacuum, implementing Open Worldwide Application Security Project (OWASP) API security rules to identify and prevent common API security vulnerabilities in OpenAPI specifications.
categories:
  - security
link: https://quobix.com/vacuum/rulesets/owasp/
languages:
  golang: true
repo: https://github.com/daveshanley/vacuum
oaiSpecs:
  oas: true
oasVersions:
  v2: true
  v3: true
  v3_1: true
  v3_2: true
---

The vacuum OWASP ruleset brings enterprise-grade API security validation to OpenAPI descriptions by implementing [OWASP API Security](https://owasp.org/www-project-api-security/) rules. These comprehensive security rules were originally crafted by [Phil Sturgeon](https://philsturgeon.com/) and written by [Ricardo Graça](https://github.com/Ricagraca), and are now built directly into vacuum for out-of-the-box API security validation.

## Key Security Rules

The OWASP ruleset includes critical security validations across multiple areas:

### Authentication & Authorization Security

- **Secure authentication schemes**: Only allow secure authorization methods
- **No HTTP Basic auth**: Enforce modern authentication methods
- **JWT best practices**: Ensure RFC8725 compliance for JWT implementations
- **Global security enforcement**: Verify security is applied globally or at operation level
- **No credentials in URLs**: Prevent API keys and credentials in URL parameters

### Data Protection & Validation

- **Constrained properties**: Objects should not allow unconstrained `additionalProperties`
- **Integer format enforcement**: Integer types must specify `int32` or `int64` format
- **Integer limits**: All integers must define minimum and maximum values
- **String restrictions**: String types must specify format, pattern, enum, or const
- **String limits**: String fields must define `maxLength`
- **Array limits**: Array types must specify `maxItems`

### Transport Security

- **HTTPS enforcement**: All servers must use HTTPS protocol only
- **Secure hosts**: No insecure protocols permitted in server definitions

### Rate Limiting & Error Handling

- **Rate limit headers**: Ensure rate limiting headers are properly configured
- **Retry-After headers**: 429 responses must include `Retry-After` header
- **Comprehensive error responses**: Verify 401, 429, 4XX, and 500 error responses are defined
- **Error validation**: Ensure proper 4XX validation error responses

### Resource Security

- **No numeric IDs**: Use random IDs that cannot be guessed to prevent enumeration attacks

## Using the OWASP Ruleset

To apply OWASP rules to your OpenAPI specification, create a ruleset file (e.g., `owasp-rules.yaml`) that extends the vacuum OWASP ruleset:

```yaml
extends: [[vacuum:oas, recommended], [vacuum:owasp, all]]
```

Then run vacuum with your ruleset:

```bash
vacuum command -r owasp-rules.yaml my-openapi-spec.yaml
```
