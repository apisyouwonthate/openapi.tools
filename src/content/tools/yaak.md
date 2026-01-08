---
name: Yaak
description: A fast, secure, and offline API client that works with Git. This is the same developer who originally created Insomnia (before it was sold to Kong who ruined it with AI nonsense.)
categories:
  - http-clients
link: https://yaak.app/
repo: https://github.com/mountain-loop/yaak

# TODO Add support for desktop apps, once we have a way to filter by that, a collection for it, and show it on tool pages.
# desktop:
#   macos: true
#   windows: true
#   linux: true

oasSpecs:
  oas: true

oasVersions:
  v3: true
  v3_1: true
  v3_2: false

featuredArticles:
  - title: 'Powerful HTTP/API Clients: Alternatives to Postman'
    url: 'https://apisyouwonthate.com/blog/http-clients-alternatives-to-postman/'
    date: 2024-11-11
---

## Overview

Yaak is a local-first, open-source API client built by Greg Schier, the same developer who originally created Insomnia before it was sold to Kong. After watching the tools in this space change for the worse—particularly with the introduction of unnecessary AI features and cloud requirements—Greg started over to build something he's proud to put his name behind.

Yaak is purpose-built to be **the best API client, and nothing more**. It's a clean, focused desktop application that runs on Mac, Windows, and Linux, featuring a snappy, intuitive interface that stays out of your way. There's no signup required, no telemetry, and no cloud lock-in—just a fast, private tool that works offline and respects your workflow.

## OpenAPI Integration

Yaak makes it effortless to work with OpenAPI descriptions. You can import existing OpenAPI collections directly into Yaak to instantly start testing your APIs. The tool also supports importing from Postman, Insomnia, and even raw curl commands, making it easy to migrate from other tools or integrate with your existing workflow.

The ability to paste curl examples and have them automatically formatted into the client makes working with APIs incredibly efficient, whether you're importing from documentation or sharing requests with teammates.

## Why Yaak is a Great Simple HTTP Client

### Clean, Uncluttered Interface

While Postman has evolved into a bloated "API management platform" with features most developers never use, Yaak focuses on the essentials: sending requests, working with APIs, and getting out of your way. The clean UI is easy to learn and features only what you need when you need it, avoiding the complexity and feature creep that plague other tools.

### No AI Bloat

Unlike modern Insomnia (which was ruined after acquisition) and other clients that have added unnecessary AI features, Yaak stays focused on core functionality. There's no AI training on your data, no telemetry tracking your usage, and no bloated features that slow down the application or compromise your privacy.

### Git-Friendly Collaboration

Yaak optionally stores data as plain-text files on your filesystem, allowing you to use Git, DropBox, or any version control system for collaboration. This Git-native approach means your API collections can be versioned, branched, and merged alongside your code—without requiring expensive cloud subscriptions or complex workspace management.

### Fast, Offline, and Private

- **Local-first**: All data stays on your computer with encrypted secrets support
- **No login required**: Start using Yaak immediately without creating an account
- **Zero telemetry**: Your API requests and data are completely private
- **Works offline**: No internet connection required to test APIs

### Developer-Friendly Features

Yaak includes everything developers actually need without the bloat:

- **Multiple protocols**: REST, HTTP, GraphQL, gRPC, WebSocket, and Server Sent Events
- **Advanced authentication**: OAuth 2.0, AWS v4, JWT, Basic, Bearer, API Key, and custom auth
- **Request chaining**: Use responses from one request in subsequent requests
- **Dynamic templating**: Variables, template functions, and request chaining
- **Plugin system**: Extend functionality with NodeJS plugins for auth, template functions, and more
- **Multi-window support**: Work on multiple projects simultaneously

### Independent and Open Source

Yaak is proudly indie and fully open source, developed by a solo developer without venture capital pressure. This means decisions are guided by users through public feedback rather than growth metrics and monetization targets. The codebase is transparent and auditable, and the tool is funded by the community with aligned incentives.

### Better Than Postman

Postman requires cloud accounts, forces you to store collections online, and has become increasingly complex with enterprise features that most developers don't need. Yaak is the opposite: a focused, fast, and private tool that works the way developers actually work—with Git, local files, and complete control over your data.
