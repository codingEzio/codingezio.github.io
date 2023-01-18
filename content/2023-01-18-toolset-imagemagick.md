+++
title = "Toolset - imagemagick"
description = "imagemagick usage"
+++

> Suppose you're on macOS

### Convert `.svg` files to `.png`

> [How to convert a SVG to a PNG with ImageMagick](https://stackoverflow.com/questions/9853325/how-to-convert-a-svg-to-a-png-with-imagemagick)

```bash
# Either 'brew install imagemagick'
# Or     'brew install librsvg'
rsvg-convert -w 1024 -h 1024 IN.svg -o OUT.png
```
