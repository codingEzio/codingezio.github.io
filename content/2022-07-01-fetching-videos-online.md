+++
title = "Fetch Videos Online"
description = "How You Gonna Grab Those Videos to Your Machine"
+++

### For AcFun

- Go to [acfun.iiilab.com/](https://acfun.iiilab.com/)

### For Bilibili

```bash
brew install lux

# Get the cookie (if you have the VIP (大会员))
# 1. Download extension named 'EditThisCookie'
# 2. Tweak its 'options' to "Semicolon separated .."
# 3. Go to bilibili.com, click 'Export' button (extension)
# 4. Save the string as a text file (e.g. COOKIE.txt)
lux -c ~/COOKIE.txt -F ~/LINKS.txt
```

### For Youtube

```bash
brew install youtube-dl

youtube-dl \
    --format 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/bestvideo+bestaudio' \
    --merge-output-format mp4 \
    --add-metadata --embed-thumbnail \
    -a ~/LINKS.txt
```
