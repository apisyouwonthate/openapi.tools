# Openapi.tools is built with Astro

[Astro](https://astro.build/) is the web content framework for content-driven websites. Our configuration of Astro uses React, TypeScript, and Tailwind CSS.

## 🚀 Project Structure

Inside of the repo, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put React components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                       |
| :--------------------- | :------------------------------------------- |
| `pnpm install`         | Installs dependencies                        |
| `pnpm dev`             | Starts local dev server at `localhost:4321`  |
| `pnpm build`           | Build your production site to `./dist/`      |
| `pnpm preview`         | Preview your build locally, before deploying |
| `pnpm astro ...`       | CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                 |

## 👀 Want to learn more about Astro?

Feel free to check out [Astro documentation](https://docs.astro.build).
