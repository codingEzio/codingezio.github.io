---
title: Mastering Essential Git Commands
date: 2024-03-10
category: DevOps
tags: [git, version-control, commands, tutorial]
author: Mike Torres
excerpt: A comprehensive guide to Git commands that every developer should know, from basics to advanced workflows.
---

# Mastering Essential Git Commands

Git is an essential tool for every developer. This guide covers the commands you need to know, from beginner to advanced.

## Basic Commands

### Initialize a Repository

```bash
git init
```

### Check Status

```bash
git status
```

### Add Files

```bash
# Add specific file
git add filename.txt

# Add all changes
git add .

# Add interactively
git add -p
```

### Commit Changes

```bash
git commit -m "Your commit message"

# Add and commit in one command
git commit -am "Your commit message"
```

## Branching and Merging

### Create and Switch Branches

```bash
# Create a new branch
git branch feature-branch

# Switch to branch
git checkout feature-branch

# Create and switch (newer syntax)
git switch -c feature-branch
```

### Merge Branches

```bash
# Switch to main first
git checkout main

# Merge feature branch
git merge feature-branch
```

## Remote Operations

### Working with Remotes

```bash
# Add remote repository
git remote add origin https://github.com/user/repo.git

# View remotes
git remote -v

# Fetch changes
git fetch origin

# Pull changes
git pull origin main

# Push changes
git push origin main
```

## Advanced Techniques

### Interactive Rebase

Clean up your commit history before merging:

```bash
git rebase -i HEAD~5
```

### Stash Changes

Save changes for later:

```bash
# Stash current changes
git stash

# List stashes
git stash list

# Apply stash
git stash pop
```

### Cherry-Pick

Apply specific commits:

```bash
git cherry-pick abc1234
```

## Useful Aliases

Add these to your `~/.gitconfig`:

```ini
[alias]
    st = status
    co = checkout
    br = branch
    ci = commit
    lg = log --oneline --graph --decorate
    undo = reset --soft HEAD~1
```

## Best Practices

1. **Commit often** - Small, focused commits are easier to review
2. **Write good messages** - Use present tense, be descriptive
3. **Branch strategically** - Feature branches, release branches
4. **Pull before push** - Avoid unnecessary merge conflicts
5. **Use `.gitignore`** - Keep your repo clean

> "Git is easy to learn but hard to master. Practice makes perfect!"

Happy coding! 🚀
