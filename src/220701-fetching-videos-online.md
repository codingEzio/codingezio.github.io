+++
title = "Fetch Videos Online"
description = "Archiving videos from various platforms"
+++

### For AcFun

```bash
brew install you-get

you-get -i LINK     # get available formats
you-get LINK        # download
```

### For Bilibili

```bash
brew install lux

# Get the cookie (if you have the VIP (大会员))
# 1. Download extension named 'EditThisCookie'
# 2. Tweak its 'options' to "Semicolon separated .."
# 3. Go to bilibili.com, click 'Export' button (extension)
# 4. Save the string as a text file (e.g. COOKIE.txt)
lux \
    --cookie ~/COOKIE.txt \
    --multi-thread --thread 20 \
    --retry 2 \
    # From here you can replace it with a sole video link
    -F ~/LINKS.txt
```

### For Youtube

```bash
brew install youtube-dl

youtube-dl \
    --format 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/bestvideo+bestaudio' \
    --merge-output-format mp4 \
    --add-metadata --embed-thumbnail \
    # From here you can replace it with a sole video link
    -a ~/LINKS.txt
```
