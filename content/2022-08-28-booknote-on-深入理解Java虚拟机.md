+++
title = "Booknote on 深入理解Java虚拟机：JVM高级特性与最佳实践"
description = "从「工作原理」与「工程实践」两个维度深入剖析JVM"
+++

### Resources

- [周志明](https://www.goodreads.com/author/show/5768251)
  - [深入理解Java虚拟机：JVM高级特性与最佳实践（第3版）](https://www.goodreads.com/book/show/51301560)

### Notes

> Java 技术体系包括
>
> - Java language itself
> - JVM implementations like Hotspot
> - .class files
> - standard library
> - Third-party library

> HotSpot虚拟机也有了与J9类似的能力，能够在编译时指定一系列特性开关，让编译输出的HotSpot虚拟机可以裁剪成不同的功能，譬如支持哪些编译器，支持哪些收集器，是否支持JFR、AOT、CDS、NMT等都可以选择。
>
> 能够实现这些功能特性的组合拆分，反映到源代码不仅仅是条件编译，更关键的是接口与实现的分离。
