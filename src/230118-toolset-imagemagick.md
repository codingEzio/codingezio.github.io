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

### Blur Image

> [How to blur an image from command line](https://askubuntu.com/questions/1002254/how-to-blur-an-image-from-command-line)

```bash
convert INPUT.jpg -blur 0x8 OUTPUT.jpg
```

### Format Conversion

#### Icon

```bash
convert INPUT.jpg -scale 128 OUTPUT.ico
convert INPUT.jpg -scale 256 OUTPUT.ico
convert INPUT.jpg -scale 512 OUTPUT.ico
```

#### Misc

> e.g. `.webp` to `.jpg`

```bash
convert INPUT.webp OUTPUT.jpg
```

### Get Image Resolution

```bash
identify -verbose INPUT.jpg  # Extremely detailed meta info
identify          INPUT.jpg  # Simplified overview

identify INPUT.jpg | awk '{print $3}' # Extension
identify INPUT.jpg | awk '{print $2}' # Resolution (AxB)
```
