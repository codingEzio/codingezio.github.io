<!-- toc -->
+++
title = "Toolset - find"
description = "find usage"
+++

### Find Files and Pick X of Them From the Result List

> Suppose you are on macOS

```bash
brew install coreutils
fd KEYWORD | shuf -n1
```

### Copy <small>(one)</small> File to Multiple Folders

> Reference to [https://askubuntu.com/a/432808](https://askubuntu.com/a/432808)

```bash
find DIR1 DIR2             -type d -exec cp FILE.txt {} \;
find DIR1 DIR2 -maxdepth 0 -type d -exec cp FILE.txt {} \;
```
