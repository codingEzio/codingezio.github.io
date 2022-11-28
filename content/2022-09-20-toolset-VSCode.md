+++
title = "Toolset - VS Code"
description = "VS Code usage"
+++

### Installed Extensions

> Reference to [https://stackoverflow.com/a/49398449](https://stackoverflow.com/a/49398449)

##### Export

```bash
code --list-extensions > EXT_VSCODE_LIST.txt
```

##### Import <small>(and install)</small>

```bash
cat ~/EXT_VSCODE_LIST.txt
    | xargs -L 1 echo code --install-extension
    | % { "code --install-extension $_” }
```
