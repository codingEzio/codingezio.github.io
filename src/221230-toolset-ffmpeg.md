<!-- toc -->

> Either put these scripts into your shell configuration file like `.zshrc` or save it as `FILE.sh`. Note that all of these were only tested on macOS as of the moment.

### [Reverse](https://video.stackexchange.com/a/17739)

#### Just the Video

```bash
ffmpeg -loglevel 40 -i INPUT.mp4 -vf reverse OUTPUT.mp4
```

#### Both the Video and Audio

```bash
ffmpeg -loglevel 40 -i INPUT.mp4 -vf reverse -af areverse OUTPUT.mp4
```

### Format Conversion

#### Music

> e.g. `.wma` to `.mp3`

```bash
# Convert ONE
ffmpeg -i INPUT.wma -ab 192 OUTPUT.mp3

# Convert MORE THAN ONE
for file in *.wma;
    do ffmpeg -i "${file}" -ab 192 "${file/.wma/.mp3}";
done
```

#### Subtitle

> e.g. `.vtt` to `.ass`

```bash
ffmpeg -i INPUT.vtt OUTPUT.ass
```

### Embed Subtitle into Video

```bash
ffmpeg -i INPUT_VID.mp4 -vf ass=INPUT_SUB.ass OUTPUT_WITH_SUB.mp4
```

### Categorize Videos based on Resolutions

```bash
# 第三方命令进阶 :: ffmpeg - 归类视频 (横屏,竖屏,1:1)

vidoriencategorise() {
    mkdir -p landscape portrait

    for filename in "$@"; do
        width=$(ffprobe -v error -select_streams v:0 -show_entries stream=width:stream_tags=rotate -of csv=p=0 "${filename}" 2>/dev/null)
        height=$(ffprobe -v error -select_streams v:0 -show_entries stream=height:stream_tags=rotate -of csv=p=0 "${filename}" 2>/dev/null)

        if [ "$width" -gt "$height" ]; then
            mv "${filename}" landscape && echo "landscape"
        elif [ "$width" -lt "$height" ]; then
            mv "${filename}" portrait && echo "portrait"
        elif [ "$width" -eq "$height" ]; then
            mkdir -p oneoneratio
            mv "${filename}" oneoneratio && echo "1:1 ratio"
        else
            printf "WAIT WHAT\n"
        fi
    done
}
```

### Convert Various Formats to `.mp4`

```bash
# Less verbose
# https://superuser.com/a/1045060

# ffmpeg conversion reference
# https://blog.addpipe.com/converting-webm-to-mp4-with-ffmpeg/

# Batch conversion
# https://stackoverflow.com/a/8200370

# Change .flv to your own source format
for i in *.flv;
  do name=`echo "$i" | cut -d'.' -f1`
  echo "$name"
  ffmpeg -i "$i" -preset veryfast "${name}.mp4"
  # ffmpeg -hide_banner -loglevel error -i "$i" -preset veryfast "${name}.mp4"
done
```

### Check Video Length in the Unit of Seconds

```bash
for name in *; do
  echo "\n"
  echo ${name}

  ffprobe -v error \
    -show_entries format=duration \
    -of default=noprint_wrappers=1:nokey=1 \
    "${name}"
done
```
