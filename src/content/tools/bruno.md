---
name: Bruno
description: Bruno is a local, git-native, open source API client. Collections are authored as text files on your system allowing Git operations to be performed on them and ultimately have collections stored and versioned alongside your spec and codebase.
categories:
  - http-clients
  - testing
  - converters
  - auto-generators
  - text-editors-extensions
link: https://usebruno.com
# desktop:
#   macos: true
#   windows: true
#   linux: true
oasVersions:
  v2: true
  v3: true
  v3_1: true
  v3_2: false
featuredArticles:
  - title: 'Powerful HTTP/API Clients: Alternatives to Postman'
    url: 'https://apisyouwonthate.com/blog/http-clients-alternatives-to-postman/'
    date: 2024-10-11
---

## Overview

Bruno is a free, open-source API client designed for developers who want complete control over their API testing workflow. Unlike cloud-based alternatives, Bruno is a completely local, offline-first desktop application that stores your API collections directly on your filesystem using a plain text markup language called [Bru](https://docs.usebruno.com/bru-lang/overview).

This local-first approach means your API collections, requests, responses, and test data never leave your computer. There are no accounts, no logins, and no cloud dependencies—you maintain complete ownership and control of all your data.

## Key Differences from Postman

Bruno takes a fundamentally different approach to API testing compared to Postman:

### Git-Native Version Control

While Postman stores collections as a single JSON file in their proprietary cloud system, Bruno stores collections directly in folders on your filesystem using plain text files. This means you can use Git or any version control system to collaborate on API collections just as you would with code—branching, merging, and versioning alongside your codebase.

### Offline-First & No Cloud Dependencies

Postman requires you to be online and logged in to use it. Bruno is a local desktop application with no concept of accounts or cloud storage. API requests are made directly from your computer, not through a proprietary proxy server, giving you complete control over your data.

### Privacy & Security

Bruno's local-first approach means there's no AI training on your data, no third-party data sharing, and no cloud processing of sensitive information. Unlike Postman, which [grants itself rights to use customer data](https://www.postman.com/legal/postman-ai-terms/) for AI training, Bruno has no ability to access, analyze, or use your data for any purpose.

### Unlimited Collection Runs

While Postman charges for more than 25 local collection runs per month, Bruno has no limits—you can run collections infinitely without restrictions.

### Focused Tool vs. Platform Bloat

Bruno stays focused on being the best API client possible, rather than evolving into a bloated "API management platform" with features most developers never use. It does one thing exceptionally well: helping developers quickly validate and test API calls without forcing you to pay for functionality you already have elsewhere.

### Zero Administrative Overhead

Since Bruno uses your existing Git infrastructure, there's no need for dedicated administrators to manage workspaces, teams, or permissions. User management and collaboration happen through systems you already have, reducing complexity and cost.

### Free & Open Source Collaboration

While Postman requires paid plans for team collaboration, Bruno is free and open source. You can collaborate using Git or any version control system at no cost. Commercial plans are available but are reasonably priced based on actual value delivered.
