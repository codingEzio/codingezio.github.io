+++
title = "Toolset - brew"
description = "brew usage"
+++

### The Commands I used the Most

```bash
# Name, Description
brew leaves | xargs -n1 brew desc
brew leaves --installed-on-request | xargs -n1 brew desc

# Name (with its dependencies)
brew deps --tree --installed
```
