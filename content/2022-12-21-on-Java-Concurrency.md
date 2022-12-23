+++
title = "On Java Concurrency"
description = "All things that related to concurrency, especially Java"
+++

> The materials I used for learning are mostly in Java, whether for the concepts or the examples being used. I would stick to the *<u>Java</u> Concurrency* at the moment considering it's not universal enough. Though I might rewrote this post into something that is language-agnostic in the future.

## Before We Begin

### References

> These were the core references, while it's also the learning materials

- [Java 并发知识体系详解](https://pdai.tech/md/java/thread/java-thread-x-overview.html)
- Java 并发常见面题总结: [*上*](https://javaguide.cn/java/concurrent/java-concurrent-questions-01.html), [*中*](https://javaguide.cn/java/concurrent/java-concurrent-questions-02.html), [*下*](https://javaguide.cn/java/concurrent/java-concurrent-questions-03.html)

### Note

> While it's tempting to just use the notes summarized by the others, it's always, always a bad idea to so. I myself am picky about almost all the blog posts out there. They are either too brief, or simply have too much info to the point of you wonder that is this person really summarizing what he/she/they learnt or simply grabbing a ton of texts then do a simple compilation and call it a day.
>
> Even blogs like [Java Guide](https://javaguide.cn) or [To Be a Better Programmer](https://tobebetterjavaer.com/) are just compiling a lot of loosely-related concepts, interview problems, while providing little to none or simple awful <small>(meh)</small> examples/analogies for the readers to understand them better.
>
> I am still a bit far from converting what I learnt to a better structured knowledge vault. Working on it though!

## Concepts

### What is *Thread-safe*

> ref
>
> - [multithreading - What is the meaning of the term "thread-safe"](https://stackoverflow.com/questions/261683/what-is-the-meaning-of-the-term-thread-safe)
> - [multithreading - What does threadsafe mean](https://stackoverflow.com/questions/2033879/what-does-threadsafe-mean)

### `ThreadLocal`

> ref
>
> - [java - When and how should I use a ThreadLocal variable](https://stackoverflow.com/questions/817856/when-and-how-should-i-use-a-threadlocal-variable)
> - [java - Purpose of ThreadLocal](https://stackoverflow.com/questions/1490919/purpose-of-threadlocal)

### Thread Pool

> ref
>
> - [multithreading - What is a thread pool](https://softwareengineering.stackexchange.com/questions/173575/what-is-a-thread-pool)
> - [Thread Pools](https://jenkov.com/tutorials/java-concurrency/thread-pools.html)
> - [Thread Pools (The Java™ Tutorials)](https://docs.oracle.com/javase/tutorial/essential/concurrency/pools.html)

### Thread States

> ref
>
> - [Thread States in Java](https://www.digitalocean.com/community/tutorials/thread-life-cycle-in-java-thread-states-in-java)
> - [Thread.State](https://docs.oracle.com/javase/7/docs/api/java/lang/Thread.State.html)
> - [六种线程状态与与转换](https://www.zhihu.com/question/56494969)

> It's a bit different from the [five states in operating system](https://codingezio.github.io/one-to-infinity-operating-system/#process-state-jin-cheng-zhuang-tai)

### `wait` and `sleep`

> ref
>
> - [multithreading - Difference between "wait()" vs "sleep()" in Java](https://stackoverflow.com/questions/1036754/difference-between-wait-vs-sleep-in-java)

### Keyword `volatile`

> ref
>
> - [java - What is the volatile keyword useful for](https://stackoverflow.com/questions/106591/what-is-the-volatile-keyword-useful-for)

## Practical

### Thread IMPL

> ref
>
> - [线程使用方式](https://pdai.tech/md/java/thread/java-thread-x-thread-basic.html#%E7%BA%BF%E7%A8%8B%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F)

- Implement interface `Runnable`
- Implement interface `Callable`
- Extends `Thread` class

#### `Runnable` versus `Callable`

> ref
>
> - [What is the difference between runnable and callable in Java?](https://www.educative.io/answers/what-is-the-difference-between-runnable-and-callable-in-java)
> - [Callable Threads versus Runnable Threads versus Extend Thread](https://stackoverflow.com/questions/25383153/callable-threads-versus-runnable-threads-versus-extend-thread)

### Thread RUN

#### Running a `Thread`

> ref
>
> - [Why use ExecutorService for long-running thread](https://softwareengineering.stackexchange.com/questions/348716/why-use-executorservice-for-long-running-thread)
> - [Explain thread executor services and their types](https://old.reddit.com/r/learnjava/comments/jg5ut7/can_anyone_please_explain_thread_executor/)
> - [为什么要用线程池](https://javaguide.cn/java/concurrent/java-concurrent-questions-03.html#%E7%BA%BF%E7%A8%8B%E6%B1%A0)

### Thread ADVANCED

> ref
>
> - [java - Real Life Examples For CountDownLatch and CyclicBarrier](https://stackoverflow.com/questions/10156191/real-life-examples-for-countdownlatch-and-cyclicbarrier)
> - [Java concurrency: Countdown latch vs Cyclic barrier](https://stackoverflow.com/questions/4168772/java-concurrency-countdown-latch-vs-cyclic-barrier)

-----

### Non-Java

#### Resources

> Use non-Java resources to learn some transferrable knowledge

- [Explaining `async` / `await` in 200 lines of code](https://iximiuz.com/en/posts/from-callback-hell-to-async-await-heaven/)
- [Explaining *event loop* in 100 lines of code](https://iximiuz.com/en/posts/explain-event-loop-in-100-lines-of-code/)
