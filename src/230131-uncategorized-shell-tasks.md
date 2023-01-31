<!-- toc -->

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