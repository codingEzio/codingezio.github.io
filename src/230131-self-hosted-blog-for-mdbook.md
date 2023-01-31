> Steps of using Mdbook for my blog hosted on Github Pages
<!-- toc -->

## Rough Steps

### Rust Dev Environment

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### Install `mdbook` binary

```bash
cargo install mdbook
```


### Configuration for Local

#### Init 

```bash
mdbook init
```

#### Configure

1. `/book.toml`: meta information, plugin configuration and so on
2. `/src/SUMMARY.md`: navigation for your posts <small>(or a *book*)</small>

### Configuration for Remote

> Only the [*Github Actions*](https://github.com/codingEzio/codingezio.github.io/actions) <sup>[New workflow](https://github.com/codingEzio/codingezio.github.io/new/gh-pages?filename=.github%2Fworkflows%2Fmain.yml&workflow_template=blank)</sup> part and the rest were omittedd

```yaml
name: CI

on:
  push:
    branches: [ master ]    # or 'main' to match your own
  pull_request:
    branches: [ master ]    # or 'main' to match your own

jobs:
  build:
    name: Build, Test and Deploy
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions-rs/toolchain@v1
        with:
          toolchain: stable
      - run: (test -x $HOME/.cargo/bin/mdbook || cargo install --vers "^0.4" mdbook)
      - run: mdbook build && mdbook test # In case of custom book path: mdbook build path/to/mybook && mdbook test path/to/mybook
      - uses: JamesIves/github-pages-deploy-action@4.1.7
        with:
          branch: gh-pages # The branch the action should deploy to.
          folder: book # The folder the action should deploy.
```

### Deploy

#### Preview

```bash
mdbook serve                        # localhost:3000
mdbook serve -p 9000 -n 127.0.0.1   # localhost:9000
````

#### Push

```bash
mdbook build

git add ./ && git commit -m "mdbook: COMMIT MESSAGE"
```


-----

## References

### Basic

- [Getting Start - Rust](https://www.rust-lang.org/learn/get-started)
- mdBook Documentation
    - [Installation](https://rust-lang.github.io/mdBook/guide/installation.html)
    - [Creating a Book](https://rust-lang.github.io/mdBook/guide/creating.html)
    - [Continuous Integration](https://rust-lang.github.io/mdBook/continuous-integration.html)
- [Automated Deployment: GitHub Actions · rust-lang/mdBook Wiki](https://github.com/rust-lang/mdBook/wiki/Automated-Deployment%3A-GitHub-Actions#jamesivesgithub-pages-deploy-action)

### Beyond

- [Third party plugins · rust-lang/mdBook Wiki](https://github.com/rust-lang/mdBook/wiki/Third-party-plugins)
- [mdbook-toc/README.md at main · badboy/mdbook-toc](https://github.com/badboy/mdbook-toc/blob/main/README.md)