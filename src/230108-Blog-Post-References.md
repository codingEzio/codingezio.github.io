> Blog Post References
<!-- toc -->

## What This is

- All the relevant info collected for writing and updating blog posts.
- I don't always have the time and energy to finish one off with extremely high quality.
- I will leave the references here for the moment for future processing.
- All would eventually be turned into new posts or being incorporated into the old posts.

-----

> These images *might* be out of sync

<img src="/202301/20230108-references-for-posts-part1.png" alt="An illustration of the overview of the references - part one" width="80%" height="auto" />
<img src="/202301/20230108-references-for-posts-part2.png" alt="An illustration of the overview of the references - part two" width="90%" height="auto" />
<img src="/202301/20230108-references-for-posts-part3.png" alt="An illustration of the overview of the references - part three" width="90%" height="auto" />
<img src="/202301/20230108-references-for-posts-part4.png" alt="An illustration of the overview of the references - part four" width="90%" height="auto" />

-----

# RDBMS

## Storage Engine

- [ELI5: B-Tree](https://old.reddit.com/r/explainlikeimfive/comments/wfz52/eli5_btree/)
- [ELI5: B+ Trees](https://old.reddit.com/r/learnprogramming/comments/a5rh54/eli5_b_trees/)

## Norm

- [数据库第一、二、三范式](https://zhuanlan.zhihu.com/p/20028672)

## SQL Execution

- [Order of execution of a Query - SQLBolt](https://sqlbolt.com/lesson/select_queries_order_of_execution)
- [SQL queries don't start with `SELECT`](https://jvns.ca/blog/2019/10/03/sql-queries-don-t-start-with-select/)

## Encoding

### Difference

- [`utf8_general_ci` and `utf8_unicode_ci`?](https://stackoverflow.com/questions/1036454/what-are-the-differences-between-utf8-general-ci-and-utf8-unicode-ci/1036459#1036459)
- [`utf8mb4` and `utf8` charsets in MySQL?](https://stackoverflow.com/questions/30074492/what-is-the-difference-between-utf8mb4-and-utf8-charsets-in-mysql/30074553#30074553)

### Operation

- [Convert utf8 tables to utf8mb4 in MySQL 5.5](https://dba.stackexchange.com/questions/8239/how-to-easily-convert-utf8-tables-to-utf8mb4-in-mysql-5-5)
- [Create a MySQL database with charset UTF-8](https://dba.stackexchange.com/questions/76788/create-a-mysql-database-with-charset-utf-8/76789#76789)

## Optimization

### Design

- [数据库设计-冗余字段 on 知乎](https://www.zhihu.com/question/50662784/answer/147731726)

### Configure

- [Common MySQL Performance Tuning Settings](https://www.percona.com/blog/2014/01/28/10-mysql-performance-tuning-settings-after-installation/)

## Lock

### Confusion

- [Difference between Non-Repeatable Read and Phantom Read?](https://stackoverflow.com/questions/11043712/what-is-the-difference-between-non-repeatable-read-and-phantom-read)
- [Why do we need intent lock?](https://stackoverflow.com/questions/33166066/why-do-we-need-intent-lock)

### Definition

- [Optimistic v/s Pessimistic Locks](https://medium.com/@saraswat.prateek1000/optimistic-v-s-pessimistic-locks-6be05ae97391)
- [Optimistic vs. Pessimistic locking](https://stackoverflow.com/questions/129329/optimistic-vs-pessimistic-locking)
- [Difference between an exclusive lock and a shared lock?](https://stackoverflow.com/questions/11837428/whats-the-difference-between-an-exclusive-lock-and-a-shared-lock)

## Index

- [Clustered and Non-Clustered index actually mean?](https://stackoverflow.com/questions/1251636/what-do-clustered-and-non-clustered-index-actually-mean)
- [What is a Covered Index?](https://stackoverflow.com/questions/62137/what-is-a-covered-index)
- [Mysql: Prefix index vs index](https://stackoverflow.com/questions/31526618/mysql-prefix-index-vs-index)

## Profiling

- [MySQL 性能优化工具 `EXPLAIN` 使用](https://segmentfault.com/a/1190000008131735)

-----

# Redis

## Overview

- [Zero to Master - Part 1](https://www.openmymind.net/2011/11/8/Redis-Zero-To-Master-In-30-Minutes-Part-1/)
- [Zero to Master - Part 2](https://www.openmymind.net/2011/11/8/Redis-Zero-To-Master-In-30-Minutes-Part-2/)

## Data Type

- [Redis Streams and the Unified Log](https://brandur.org/redis-streams)
- [Approaches of Kafka and Redis to Handle Streams](https://devm.io/databases/kafka-redis-streams)

## Persistence

- [AOF and RDB stand for in Redis](https://stackoverflow.com/questions/45040666/what-do-the-acronyms-aof-and-rdb-stand-for-in-redis)

## Caching Strategy

- [缓存更新的套路 - CoolShell](https://coolshell.cn/articles/17416.html)
- [In-Memory Caching Solutions](https://redis.com/solutions/use-cases/caching/)
- [Caching Strategies Using Redis](https://docs.aws.amazon.com/whitepapers/latest/database-caching-strategies-using-redis/caching-patterns.html)

## Biz Concern

- [*BigKey* and *HotKey* Issues in Redis](https://dev.to/mrboogiej/deep-dive-of-bigkey-and-hotkey-issues-in-redis-what-they-are-how-to-discover-how-to-handle-4ldl)

## Confusion

- [Why Redis 'Zset' Means 'Sorted Set'](https://stackoverflow.com/a/64024605/6273859)
- [Colons within Redis Keys](https://stackoverflow.com/a/3555759/6273859)
- [Redis Key Naming Conventions](https://stackoverflow.com/a/6971415/6273859)

-----

# Around Spring

### Term

- [What is a Data Transfer Object (DTO)?](https://stackoverflow.com/questions/1051182/what-is-a-data-transfer-object-dto)
- [Difference between DTO, VO, POJO, JavaBeans?](https://stackoverflow.com/questions/1612334/difference-between-dto-vo-pojo-javabeans)
- [What is Persistence Context?](https://stackoverflow.com/questions/19930152/what-is-persistence-context)

### Config

- [hibernate SQL dialect of a data source?](https://stackoverflow.com/questions/21012799/why-do-i-need-to-configure-the-sql-dialect-of-a-data-source)

-----

# OS

## For Consistency

- [What are interrupts? What for and when?](https://old.reddit.com/r/arduino/comments/416cs0/eli5_what_are_interrupts_what_do_i_need_them_for/)
- [Interrupts, The Good… | Hackaday](https://hackaday.com/2015/09/18/embed-with-elliot-interrupts-the-good/)
- [What is a mutex? | Hacker News](https://news.ycombinator.com/item?id=26969642)
- [Synchronized blocks](https://old.reddit.com/r/javahelp/comments/31p2vk/eli5_synchronized_blocks/)
- [Difference between lock, mutex and semaphore?](https://stackoverflow.com/questions/2332765/what-is-the-difference-between-lock-mutex-and-semaphore)

## Concept

- [Introduction to Concurrency](https://cs.lmu.edu/~ray/notes/introconcurrency/)
- [What is a "thread" (really)?](https://stackoverflow.com/questions/5201852/what-is-a-thread-really)
- [Difference between a "coroutine" and a "thread"?](https://stackoverflow.com/questions/1934715/difference-between-a-coroutine-and-a-thread)
- [進程 (Process)、線程 (Thread)、協程 (Coroutine) 的概念講解](https://blog.kennycoder.io/2020/05/16/%E9%80%B2%E7%A8%8B-Process-%E3%80%81%E7%B7%9A%E7%A8%8B-Thread-%E3%80%81%E5%8D%94%E7%A8%8B-Coroutine-%E7%9A%84%E6%A6%82%E5%BF%B5%E8%AC%9B%E8%A7%A3/)
- [Difference between a program, service, thread, process etc.?](https://old.reddit.com/r/explainlikeimfive/comments/1mf26j/eli5_in_computer_software_what_is_the_difference/)
- [Difference between concurrency and parallelism?](https://stackoverflow.com/questions/1050222/what-is-the-difference-between-concurrency-and-parallelism)
- [What is the meaning of the term "thread-safe"](https://stackoverflow.com/questions/261683/what-is-the-meaning-of-the-term-thread-safe)
- [What does threadsafe mean](https://stackoverflow.com/questions/2033879/what-does-threadsafe-mean)

-----

# Concurrency

## What

- [multithreading - What is a thread pool?](https://softwareengineering.stackexchange.com/questions/173575/what-is-a-thread-pool)
- [Difference between Thread and Threadpool](https://stackoverflow.com/questions/6592976/difference-between-thread-and-threadpool)
- [Core pool size vs maximum pool size](https://stackoverflow.com/questions/17659510/core-pool-size-vs-maximum-pool-size-in-threadpoolexecutor)
- [What is the use of ThreadLocal?](https://stackoverflow.com/questions/30197863/what-is-the-use-of-threadlocal)
- [Python ThreadPool: The Complete Guide](https://superfastpython.com/threadpool-python/#ThreadPool_Example)
- [Explain thread executor services and their types](https://old.reddit.com/r/learnjava/comments/jg5ut7/can_anyone_please_explain_thread_executor/)

## In Use

- [Why ExecutorService for long-running thread](https://softwareengineering.stackexchange.com/questions/348716/why-use-executorservice-for-long-running-thread)
- [Thread Pools](https://jenkov.com/tutorials/java-concurrency/thread-pools.html)
- [Thread Pools (The Java™ Tutorials)](https://docs.oracle.com/javase/tutorial/essential/concurrency/pools.html)
- [线程池实现原理 及在美团中的实践](https://tech.meituan.com/2020/04/02/java-pooling-pratice-in-meituan.html)

## States

- [Thread States in Java](https://www.digitalocean.com/community/tutorials/thread-life-cycle-in-java-thread-states-in-java)
- [Thread.State](https://docs.oracle.com/javase/7/docs/api/java/lang/Thread.State.html)
- [六种线程状态与与转换](https://www.zhihu.com/question/56494969)

## API

- [Keyword `volatile` useful for](https://stackoverflow.com/questions/106591/what-is-the-volatile-keyword-useful-for)
- [Difference between `wait()` vs `sleep()` in Java](https://stackoverflow.com/questions/1036754/difference-between-wait-vs-sleep-in-java)
- [Callable Threads versus Runnable Threads versus Extend Thread](https://stackoverflow.com/questions/25383153/callable-threads-versus-runnable-threads-versus-extend-thread)
- [Difference between runnable and callable in Java?](https://www.educative.io/answers/what-is-the-difference-between-runnable-and-callable-in-java)
- [Real Life Examples For CountDownLatch and CyclicBarrier](https://stackoverflow.com/questions/10156191/real-life-examples-for-countdownlatch-and-cyclicbarrier)
- [Countdown latch vs Cyclic barrier](https://stackoverflow.com/questions/4168772/java-concurrency-countdown-latch-vs-cyclic-barrier)

## Data Type

- [Atomic Integer and Normal immutable Integer?](https://stackoverflow.com/questions/38846976/what-is-the-difference-between-atomic-integer-and-normal-immutable-integer-class)
- [`AbstractQueuedSynchronizer` in Java](https://stackoverflow.com/questions/9644856/abstractqueuedsynchronizer-in-java-concurrent)
- [When and how `ThreadLocal` variable](https://stackoverflow.com/questions/817856/when-and-how-should-i-use-a-threadlocal-variable)
- [Purpose of `ThreadLocal`](https://stackoverflow.com/questions/1490919/purpose-of-threadlocal)

-----

# JVM

## Compliation

- [AOT vs. JIT Compilation in Java](https://www.cesarsotovalero.net/blog/aot-vs-jit-compilation-in-java.html)

## *GC*

- [Default garbage collector for Java 8](https://stackoverflow.com/questions/33206313/default-garbage-collector-for-java-8)
- [Understanding HotSpot VM Garbage Collectors (GC) in Depth](https://dzone.com/articles/understanding-garbage-collectorsgc-in-depth)

-----

# What

## Java

- [Encapsulation in Java](https://old.reddit.com/r/explainlikeimfive/comments/nfcgq/eli5_encapsulation_in_java/)
- [Difference between abstraction and encapsulation?](https://stackoverflow.com/questions/742341/difference-between-abstraction-and-encapsulation)
- [What is the difference between an interface and abstract class?](https://stackoverflow.com/questions/1913098/what-is-the-difference-between-an-interface-and-abstract-class)
- [java - What is the difference between method overloading and overriding?](https://stackoverflow.com/questions/12374399/what-is-the-difference-between-method-overloading-and-overriding)
- [jakarta ee - What is Java Servlet?](https://stackoverflow.com/questions/7213541/what-is-java-servlet)
- [What are the differences between a HashMap and a Hashtable in Java?](https://stackoverflow.com/questions/40471/what-are-the-differences-between-a-hashmap-and-a-hashtable-in-java/22629569#22629569)
- [naming - Java Queues - why "poll" and "offer"?](https://stackoverflow.com/questions/9343081/java-queues-why-poll-and-offer)

## Spring

- [What is Spring Framework? An Unorthodox Guide](https://www.marcobehler.com/guides/spring-framework)
- [Dependency Injection Demystified](http://www.jamesshore.com/v2/blog/2006/dependency-injection-demystified)
- [Difference between `@Component`, `@Repository` & `@Service`](https://stackoverflow.com/questions/6827752/whats-the-difference-between-component-repository-service-annotations-in)
- [Difference between `@Bean` and `@Autowired`](https://stackoverflow.com/questions/34172888/difference-between-bean-and-autowired)
- [What is `@ModelAttribute` in Spring MVC?](https://stackoverflow.com/questions/3423262/what-is-modelattribute-in-spring-mvc)

-----

# Confusion

## Spring Security

- [`configure` and `configureGlobal` methods?](https://stackoverflow.com/questions/35023900/whats-the-difference-between-configure-and-configureglobal-methods)
- [Inject `AuthenticationManager` in a Filter](https://stackoverflow.com/questions/21633555/how-to-inject-authenticationmanager-using-java-configuration-in-a-custom-filter)
- [`registerGlobal()`, `configure()`, `configureGlobal()` and ..](https://stackoverflow.com/questions/35218354/difference-between-registerglobal-configure-configureglobal-configureglo)
- [`AuthenticationManager` and `configure(..)`](https://github.com/spring-projects/spring-security/issues/4571)

## JWT

- [JWT Private / Public Key Confusion](https://stackoverflow.com/questions/60538047/jwt-private-public-key-confusion)

-----

# How

## Authentication

### Spring

- [Spring Security: Authentication and Authorization](https://www.marcobehler.com/guides/spring-security)

### JWT

- [JSON Web Token Introduction - jwt.io](https://jwt.io/introduction)
- [How does a server verify a JWT? Where Public Key?](https://stackoverflow.com/questions/63106661/how-does-a-server-verify-a-jwt-where-does-the-public-key-come-from)

## Distributed System

- [Explanation of Raft distributed consensus algorithm](https://old.reddit.com/r/programming/comments/2qrfdj/a_really_beautiful_explanation_of_raft/)
- [Raft - Understandable Distributed Consensus](http://thesecretlivesofdata.com/raft/)

-----

# Issue

## Spring

- [java - Failed to start bean 'documentationPluginsBootstrapper' in spring data rest](https://stackoverflow.com/questions/40241843/failed-to-start-bean-documentationpluginsbootstrapper-in-spring-data-rest)

-----

# Functional Programming

## JavaScript

- [Why Ramda instead of native Array methods](https://github.com/ramda/ramda/issues/2404)

## Java

- [Java's Supplier and Consumer interfaces](https://stackoverflow.com/questions/28417262/when-and-why-would-you-use-javas-supplier-and-consumer-interfaces)

-----

# Frontend

## Misc

- [ELI5 Concepts · reactwg/react-18](https://github.com/reactwg/react-18/discussions/46)

## State Management

- [ELI5: redux actions and reducers : reactjs](https://old.reddit.com/r/reactjs/comments/7d10vo/eli5_redux_actions_and_reducers/)

### React Context

- [article](https://blog.isquaredsoftware.com/2021/01/context-redux-differences/)
- [comments](https://old.reddit.com/r/reactjs/comments/kzw46y/why_react_context_is_not_a_state_management_tool/)

## Hooks

- [Vue3 实现 React Hooks (`useState`, `useEffect`)](https://www.51cto.com/article/716793.html)
- [Vue lifecycle hooks](https://blog.logrocket.com/introduction-to-vue-lifecycle-hooks/)
- [ELI 5 `useEffect` dependency arrays](https://old.reddit.com/r/reactjs/comments/ualpri/can_someone_explain_useeffect_dependency_arrays/)

## `npm`

- [What does `npm install --legacy-peer-deps` do exactly?](https://stackoverflow.com/questions/66239691/what-does-npm-install-legacy-peer-deps-do-exactly-when-is-it-recommended-wh)
- [dependencies, devDependencies and peerDependencies?](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies/22004559#22004559)

## More

### Text Fragments

- [Text Fragments - web.dev](https://web.dev/text-fragments/)
- [What exactly is the `#:~:text=` in an URL](https://stackoverflow.com/questions/62161819/what-exactly-is-the-text-location-hash-in-an-url)

### Accessibility

- [Accessibility (web.dev)](https://web.dev/learn/accessibility/)
- [Accessibility (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Accessibility)

-----

# Network

## HTTP

- [http的长连接和短连接 以及应用场景](https://blog.csdn.net/luzhensmart/article/details/87186401)

## Message Queue

- [MQ：怎么确保消息100%不丢失?](https://tobebetterjavaer.com/mq/100-budiushi.html)

-----

# Misc

## Docker

- [dockerfile - what is docker run -it flag?](https://stackoverflow.com/questions/48368411/what-is-docker-run-it-flag)
- [docker - What is the '--rm' flag doing?](https://stackoverflow.com/questions/49726272/what-is-the-rm-flag-doing)

## File

- [c - What is file-descriptor?](https://stackoverflow.com/questions/40864527/what-is-file-descriptor)
- [c - Difference between a file descriptor and file pointer?](https://stackoverflow.com/questions/2423628/whats-the-difference-between-a-file-descriptor-and-file-pointer)

## Cloud

- [Cloud-Based, Cloud-Native, and Cloud-Enabled Applications](https://www.papertrail.com/solution/tips/cloud-based-cloud-native-and-cloud-enabled-applications-whats-the-difference/)

## Storage

- [Bootiful Azure: Object Storage Service (5/6)](https://spring.io/blog/2019/01/17/bootiful-azure-object-storage-service-5-6)
- [Can someone explain NAS to me? : hardware](https://old.reddit.com/r/hardware/comments/1p1nnk/can_someone_explain_nas_to_me/)

## Terminology

- [ELI5: What are handlers, function handlers, and handles?](https://old.reddit.com/r/learnprogramming/comments/k9fudc/eli5_what_are_handlers_function_handlers_and/)

-----
