+++
title = "Booknote on Java高并发编程详解：多线程与架构设计"
description = "Y"
+++

### Resources

- [汪文君](https://www.roncoo.com/teacher/detail/201710290214568627)
  - [Java高并发编程详解：多线程与架构设计](https://book.douban.com/subject/30255689/)

### Notes

#### Concepts

> 对计算机来说每一个任务就是一个进程（Process），在每一个进程内部至少要有一个线程（Thread）是在运行中，有时线程也称为轻量级的进程。
>
> - 任务：抽象化的完全体
> - 进程：包含至少一个线程
> - 线程：一组用于运行的程序指令集

> 线程是程序执行的一个路径，每一个线程都有自己的局部变量表、程序计数器（指向正在执行的指令指针）以及各自的生命周期。
