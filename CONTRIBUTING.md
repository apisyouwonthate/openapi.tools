# Contributing

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

[overloaded-terms]: https://www.apisyouwonthate.com/blog/resolving-overloaded-terms-for-api-specifications-descriptions-contract/
