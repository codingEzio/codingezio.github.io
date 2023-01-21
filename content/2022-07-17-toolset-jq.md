+++
title = "Toolset - jq"
description = "jq usage"
+++

## Resources

- [jq Primer: Munging JSON Data](https://andrew.gibiansky.com/blog/command-line/jq-primer/)
- [Discover how to use fx effectively, a JSON manipulation command line tool](https://medium.com/@antonmedv/discover-how-to-use-fx-effectively-668845d2a4ea)

## Snippets

### General Snippet

```bash
# Colorized for piping
<JSON-OUTPUT>        | jq --color-output | less

# [ {} ]
<JSON-OUTPUT NESTED> | jq -C ".[0] .IPAM"
```

### Dedicated Usage

```bash
cat package.json | jq ".scripts"
```
