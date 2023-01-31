<!-- toc -->
+++
title = "Toolset - grep"
description = "grep usage"
+++

### Find All Occurrences

#### By Default

```bash
grep -i PATTERN FILENAME
```

#### Advanced Usage

> The `INPUT` could either be a *path* or a *filename*

| COMMAND | WHAT IT DOES |
| :--- | :--- |
| `grep -iRl PATTERN INPUT` | [Find all files containing specific text](https://stackoverflow.com/questions/16956810/how-to-find-all-files-containing-specific-text-string-on-linux/16956844#16956844) |
| `grep -inr PATTERN INPUT` | Highlight where it matches (with FILE:LINENO:) |
