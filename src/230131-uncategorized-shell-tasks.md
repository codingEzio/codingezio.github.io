<!-- toc -->

## Checking The Number of Lines of Code in A Project

### Java/Spring

```bash
wl `fd -e java` | sort
wl `fd -e java | grep -vi "example\|model\|mapper\|dto\|dao"` | sort
```

### Python/Django

```bash
wl `fd -e py` | sort -n
wl `fd -e py | grep -vi "migration\|test\|init"` | sort
```

### C++

```bash
wc -l `fd -e cpp -e h` | sort
```

### React

```bash
wc -l `fd -e js` | sort
wc -l `fd -e js --full-path src/components/` | sort
```

## Add Content to the Beginning of **Multiple** File

> References: [add multiple lines to the beginning of many files in linux](https://stackoverflow.com/a/43460416/6273859)

```bash
# Suppose I wanna add `<!-- toc -->` to a bunch of Markdown files
# And I have a file named 'beginning' which has `<!-- toc -->` in it

for file in $(find . -name "*.md"); do
  echo Processing $file

  cat beginning.txt $file > $file.modified

  mv $file.modified $file

done
```

## Perform Commands in Every Directory

> References: [`tldr for`](https://www.gnu.org/software/bash/manual/bash.html#Looping-Constructs)

```bash
for proj in */; do (code "$proj"; echo "Loop is executed") done
for proj in */; do (cd "$proj" && git checkout -b dev; echo "Switched") done
```
