+++
title = "Toolset - jq"
description = "jq usage"
+++

### Snippets

##### General Snippet

```bash
# Colorized for piping
<JSON-OUTPUT>        | jq --color-output | less

# [ {} ]
<JSON-OUTPUT NESTED> | jq -C ".[0] .IPAM"
```

##### Dedicated Usage

```bash
cat package.json | jq ".scripts"
```
