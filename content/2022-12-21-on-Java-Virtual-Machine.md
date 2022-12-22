+++
title = "On Java Virtual Machine"
description = "All things that related to JVM, especially Hotspot"
+++

> For fun

## Before We Begin

### References

> These were the core references, while it's also the learning materials

- [JVM 底层原理最全知识总结](https://doocs.github.io/jvm/00-quickstart.html)
- [深入理解Java虚拟机：JVM高级特性与最佳实践](https://www.goodreads.com/book/show/51301560)

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

-----
