# Contributing

We encourage all efforts in the OpenAPI ecosystem. That said, there's a lot that goes into a successful contribution and we're focused on high-quality content. Submissions must align with the following guidelines:
- **Real-world use**: there should be evidence that people are using it, perhaps through package downloads, GitHub stars, or other means
- **Testable**: submissions should be released, and there should be a way of testing it so we can validate it works
- **Relevant**: all submissions must relate to the OpenAPI ecosystem and abide by its [Code of Conduct](https://github.com/OAI/OpenAPI-Specification/blob/main/CODE_OF_CONDUCT.md)
- **Terminology**: descriptions and language should follow the [OpenAPI Glossay](https://github.com/openapi-contrib/glossary?tab=readme-ov-file#api-description)

## How to Run the Site Locally

We use [jekyll](https://jekyllrb.com/) so you should use ruby and install it using bundler.

```
$ bundle install
```

If you want to check changes, launch the jekyll server and open the browser.

```
$ bundle exec jekyll serve
```

## Adding Links

1. Edit `_data/tools.yml` and copy/paste/tweak another tool.
2. Try and avoid using the word "Swagger" unless you work for SmartBear and are literally talking about the Swagger toolsuite. It's been called OpenAPI for years now.
3. We only want modern tooling, so if the tool is OpenAPI v2.0 only (and is not in the progress of adding v3 support) maybe find a different list to add it to.
4. We try talk about "Description Documents" instead of "Specs" for [reasons][overloaded-terms].
5. Send a pull request and make sure the build doesn't break!

[overloaded-terms]: https://apisyouwonthate.com/blog/resolving-overloaded-terms-for-api-specifications-descriptions-contracts
