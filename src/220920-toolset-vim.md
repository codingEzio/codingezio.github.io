<!-- toc -->
+++
title = "Toolset - Vim"
description = "Vim usage"
+++

### Enable

> Commands to run when you are not in editing mode

##### Run commands

> Reference to [https://superuser.com/a/285506](https://superuser.com/a/285506)

- Single command: `:!COMMAND`
- Full featured `:terminal`

### Config

> `~/.vimrc`

```bash
# Add Spaces when Tab was Pressed
#   https://stackoverflow.com/a/1878984
set tabstop=4
set shiftwidth=4
set softtabstop=4
set expandtab


# Set Character Limits Per Line
#   https://stackoverflow.com/a/35794968
highlight ColorColumn ctermbg=gray set
colorcolumn=80


# Enable Synatax Highlighting
syntax on
```
