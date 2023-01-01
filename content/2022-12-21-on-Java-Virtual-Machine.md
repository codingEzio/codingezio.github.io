+++
title = "On Java Virtual Machine"
description = "All things that related to JVM, especially Hotspot"
+++

> For fun

## Before We Begin

### References

> These were the core references, while it's also the learning materials. Any other references would be at the bottom of this post.

- [JVM 底层原理最全知识总结](https://doocs.github.io/jvm/00-quickstart.html)
- [深入理解Java虚拟机：JVM高级特性与最佳实践](https://www.goodreads.com/book/show/51301560) <small>(JDK `12` for practice)</small>

### Note

> While it's tempting to just use the notes summarized by the others, it's always, always a bad idea to so. I myself am picky about almost all the blog posts out there. They are either too brief, or simply have too much info to the point of you wonder that is this person really summarizing what he/she/they learnt or simply grabbing a ton of texts then do a simple compilation and call it a day.
>
> Even blogs like [Java Guide](https://javaguide.cn) or [To Be a Better Programmer](https://tobebetterjavaer.com/) are just compiling a lot of loosely-related concepts, interview problems, while providing little to none or simple awful <small>(meh)</small> examples/analogies for the readers to understand them better.
>
> I am still a bit far from converting what I learnt to a better structured knowledge vault. Working on it though!

## Concepts

### Structure

- Java language itself
- JVM implementations like Hotspot
- .class files
- Standard library
- Third-party library

### *JDK*, *JRE* and *JVM*

> References: [\#1](https://stackoverflow.com/a/21915034/6273859), [\#2](https://stackoverflow.com/a/21914789/6273859) || <small>(ref for ref)</small> [\#3](https://stackoverflow.com/a/16568659/6273859), [\#4](https://stackoverflow.com/a/56654154/6273859)

> Java API: the sweet source code you love to read like `java.util.concurrency`

| TERM | EXPLANATION |
| :--: | :-- |
| JVM | A complex *app* to do stuff with your code<br/>&nbsp;&nbsp;👉 reads `.class` file and interprets the bytecode<br/>&nbsp;&nbsp;👉 compiles `.class` to actual machine code and executes it |
| JRE | Targeted at people who want to run Java applications<br/>A bundle of JVM impl, Java API and utilities<br/>&nbsp;&nbsp;👉 OS-specific bundle<br/>&nbsp;&nbsp;👉 OS-independent outer interface <small>(same code runs *everywhere*)</small> |
| JDK | Targeted at people who wants more than just running the applications<br/>A bundle of JRE, a compiler <small>(`.java` to `.class`)</small>and tools for development |

### More Details on *JVM*

> The code you wrote would be firstly transformed into the `.class` file, then the *JVM* would execute that code which has all the `0`s and `1`s in it, like it was an actual machine running the machine code.
>
> Since it behaves like an actual machine, in this very context, it would need to manage all the relevant stuff like *memory management*, *garbage collection* and of course, running the code and doing it **efficiently**.

## Practice

### Compile Your Own JDK

> Context: I'm on macOS Monterey <small>(12.6.2)</small>

#### [Source Code](https://github.com/openjdk/jdk)

##### Get

> Your local absolute path shall **not** include any *spaces* or *non-Latin characters*

```bash
git clone https://github.com/openjdk/jdk
```

##### Choose

> We'll use JDK `12` with its [latest minor version](https://jdk.java.net/archive/) <small>(`12 GA (build 12+33)`)</small>.

```bash
# List all the existing JDK branches with minor versions
git tag

# Switch to the JDK version you want
git checkout jdk-12+33
```

#### Preparation before Compiling

> If you use `sdkman` to manage your JDK version, see [here](https://codingezio.github.io/manage-jdk-version/)

1. You need to have relevant dependencies like `build-essential` on Ubuntu
2. You need to have a JDK already installed which is greater than `12`

##### macOS

> Installing XCode shall be [enough](https://apple.stackexchange.com/questions/150978/what-is-the-relationship-between-xcode-and-xcode-command-line-tools) as it would also help you installing all the essential commandline tools that are needed for compiling the JDK. Also run `brew install autoconf`.

##### Linux

> I have not tried the commands below. This is a snippet from the book called [*深入理解Java虚拟机：JVM高级特性与最佳实践*](https://www.goodreads.com/book/show/51301560). And of course, it assumes you are on Ubuntu-like distros since apt is being used. I do think it might be outdated depend on the systems versions and linux kernels you are using.

| Tool | Library | Command |
| :--- | :--- | :--- |
| FreeType | The Free Type Project | `sudo apt install libfreetype6-dev` |
| CUPS     | Common UNIX Printing System                 | `sudo apt install libcups2-dev`                                                              |
| X1       | X Windows System                            | `sudo apt install libx11-dev libxext-dev libxrender-dev libxrandr-dev libxtst-dev libxt-dev` |
| ALSA     | Advanced Linux Sound Architecture           | `sudo apt install libasound2-dev` |
| libffi   | Portable Foreign Function Interface Library | `sudo apt install libffi-dev` |
| Autoconf | Extensible Package of M4 Macros             | `sudo apt install autoconf` |

#### Start Compiling

> Do switch to a JDK version that is higher than JDK `12` right now.
>
> Follow the [official guide](https://github.com/openjdk/jdk/blob/jdk-12-ga/doc/building.md). Currently I'm having trouble in compiling the JDK on macOS. Soon I'll spin up a Ubuntu system to try out again.

-----

## References

- N/A
