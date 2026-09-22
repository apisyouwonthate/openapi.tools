---
name: BreakCheck
description: GitHub App that fails PR Checks on OpenAPI breaking changes; optional Slack. Install: https://github.com/apps/breakcheck/installations/new
categories:
  - testing
languages:
  any: true
link: https://breakcheck.app
oasVersions:
  v2: false
  v3: true
  v3_1: true
  v3_2: false
---

## Overview

BreakCheck is a GitHub App that checks OpenAPI changes in pull requests and fails PR Checks when it detects breaking changes. Optional Slack notifications help teams stay informed.

## Features

- Fails PR Checks when OpenAPI breaking changes are detected.
- Runs as a GitHub App in pull request workflows.
- Optional Slack notifications.

## Usage

Install BreakCheck from https://github.com/apps/breakcheck/installations/new and configure it for a repository containing an OpenAPI description. Open a pull request with an OpenAPI change to run the check.
