+++
title = "On Version Control"
description = "Notes on Version Control"
+++

### Get

> Choose either one based on the OS you are using

- `brew install git` <small>(macOS)</small>
- `winget install --id Git.Git -e --source winget` <small>(Windows 10)</small>

### Config

> Add this to `~/.gitconfig`

```ini
[user]
    name = THE_USERNAME_YOU_PREFER
    email = THE_EMAIL_ADDR_YOU_USE
[init]
    defaultBranch = master
[core]
    quotepath = false
```

### Usage

#### Branch

> The commands I usually use

```bash
git branch                      # show all and highlight the current one
git branch --all                # same as the one without arguments

git branch NAME                 # create
git branch -d NAME              # delete
git branch -m OLD_NAME NEW_NAME # rename any branches
git branch -m NEW_NAME          # rename current branch's name to

git checkout BRANCH             # switch to
git checkout -b BRANCH          # create and switch to
```

#### `git reset`

> `--soft`: uncommit changes, changes are left staged (index). <br/>
> `--mixed` (default): uncommit + unstage changes, changes are left in working tree. <br/>
> `--hard`: uncommit + unstage + delete changes, nothing left.

##### I mis-added my files to *Staged*

```bash
git reset FILENAME  # put one specific file back
git reset           # pull all files back
```

##### I messed up my commit notes, put it back to *Staged* ?

```bash
git reset --soft HEAD~1    # Undo last commit
git reset --soft HEAD~N    # Undo N then add all as one
```

##### From *Committed* to Erased without Any Trace

```bash
git reset --hard HEAD~1    # Remove last commit
git reset --hard HEAD~N    # Remove all N commits
```

-----

### Commit Message

#### Guideline

> <img src="/202209/20220920-version-control-commit-message-convention.png" alt="An illustration that shows the convensions of the commit messsage which is written in Chinese" width="40%" height="40%" />

- [Semantic Commit Messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
