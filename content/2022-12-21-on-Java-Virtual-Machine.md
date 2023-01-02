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

### Preface to *JVM*

#### The Process

> The code you wrote would be firstly transformed into the `.class` file, then the *JVM* would execute that code which has all the `0`s and `1`s in it, like it was an actual machine running the machine code.
>
> Since it behaves like an actual machine, in this very context, it would need to manage all the relevant stuff like *memory management*, *garbage collection* and of course, running the code and doing it **efficiently**.

#### Why Do I Need to Learn about This

> To be able to effective debug the program in order to pinpoint where does the problem actually arise, or optimizing to make the program more performant, we all eventually need to learn about how the JVM does those things for us underneath.
>
> Basically, we are still learning about things like *memory management*, *garbage collection*, yet unlike languages like *C++*, this topic by itself become a separate one. It's like learning about how an application works, but this time it's an app that is almost as sophisticated as the language itself.
>> And that's also why there are different JVM implementations, since people have different opinions and needs for the memory management, the mechanism of garbage collection and so on.

- e.g. *C*, *C++*, you need do all the management manually through code
- e.g. *Python*, the language does it for you, mostly
- e.g. *Java*, the virtual machine does it for you

### Memory Management

- N/A

### Garbage Collection

- N/A

## Practice

### Compile Your Own JDK <small>(status: ***HALTED***)</small>

> Context: I'm on *macOS Monterey* <small>(12.6.2)</small> and the Linux I'm using is *Ubuntu 20.04 focal* <small>(kernel: `x86_64 Linux 5.4.0-135-generic`)</small>. **Simply sticking to Linux for compiling such things would save you a lot of time.**

#### [Source Code](https://github.com/openjdk/jdk)

##### Get

> Your local absolute path shall **not** include any *spaces* or *non-Latin characters*

1. Go to the JDK 12 [page](https://hg.openjdk.java.net/jdk/jdk12/)
2. Click the `zip` at the left side of the page

#### Preparation before Compiling

> If you use `sdkman` to manage your JDK version, see [here](https://codingezio.github.io/manage-jdk-version/)

1. You need to have relevant dependencies like `build-essential` on Ubuntu
2. You need to have a JDK already installed which is greater than `12`

##### macOS

> Installing XCode shall be [enough](https://apple.stackexchange.com/questions/150978/what-is-the-relationship-between-xcode-and-xcode-command-line-tools) as it would also help you installing all the essential commandline tools that are needed for compiling the JDK. And the `brew install autoconf` for the `make` command to work properly.

##### Linux

> This is a snippet from the book called [*深入理解Java虚拟机：JVM高级特性与最佳实践*](https://www.goodreads.com/book/show/51301560). And of course, it assumes you are on Ubuntu-like distros since apt is being used.

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
