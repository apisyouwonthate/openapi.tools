---
name: Keploy
description: Open-source testing platform that generates API tests from OpenAPI descriptions, recorded real traffic, curl commands or Postman collections, and replays them with auto-generated mocks for databases and external services.
categories:
  - testing
link: https://keploy.io
repo: https://github.com/keploy/keploy
languages:
  cli: true
  saas: true
oasVersions:
  v2: false
  v3: true
  v3_1: false
  v3_2: false
---

## Overview

Keploy is an open-source (Apache-2.0) API testing platform. It can generate API tests from an OpenAPI description, or record real API traffic and replay it as tests with auto-generated mocks for databases, queues and external services, so tests run without live dependencies.

## Features

- Generate API test suites from OpenAPI descriptions, curl commands, Postman collections or live endpoints
- Record real API traffic and replay it as regression tests
- Auto-generated mocks for dependencies such as Postgres, MySQL, MongoDB, Kafka and external HTTP APIs
- No code changes: traffic is captured with eBPF
- Runs on Linux, macOS and Windows, locally and in CI

## Usage

Install the CLI:

    curl --silent -O -L https://keploy.io/install.sh && source install.sh

Record tests and mocks by running your app through Keploy, then replay them:

    keploy record -c "CMD_TO_RUN_APP"
    keploy test -c "CMD_TO_RUN_APP" --delay 10

To generate tests from an OpenAPI description, upload the schema in the Keploy Console. See https://keploy.io/docs/running-keploy/generate-api-tests-using-ai/
