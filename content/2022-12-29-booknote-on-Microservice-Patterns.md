+++
title = "Booknote on Microservice Patterns"
description = "Microservices Patterns: With examples in Java"
+++

### Resources

- [Chris Richardson](https://www.goodreads.com/author/show/568718)
  - [Microservices Patterns: With examples in Java](https://www.goodreads.com/book/show/58448831) [<sup>src</sup>](https://github.com/microservices-patterns/ftgo-application)

### Overview

> Also serve as a progress tracker

| fini | chap | page | ovrv |
| :--- | :---: | :---: | :--- |
| ␀ | 01 | `001 to 033` | overview |
| ␀ | 02 | `033 .. 061` | why and how |
| ␀ | 03 | `065 .. 104` | async and messaging |
| ␀ | 04 | `110 .. 143` | data consistency |
| ␀ | 05 | `146 .. 180` | biz logic in DmnDrvnDev |
| ␀ | 06 | `183 .. 216` | evnt-src ptn (logged ~CRUD) |
| ␀ | 07 | `220 .. 249` | fetch data across dmn (sep read/write) |
| ␀ | 08 | `253 .. 279` | handlin requests from different clients |
| ␀ | 09 | `292 .. 315` | test unit |
| ␀ | 10 | `318 .. 346` | test integration/component/.. |
| ␀ | 11 | `348 .. 380` | prd-rdy: sec, ext-conf, log/metrc/trcin |
| ␀ | 12 | `383 .. 425` | deploy: vm,cont,servles and srvice mesh |
| ␀ | 13 | `428 .. 467` | incrly refactor monoli to microservices |

### 0x01 Monolithic Application

> <img src="/202212/2022-1229-booknote-illustration-ftgoapp-monolith.png" alt="An illustration that shows the architecture of a monolithic application" width="80%" height="auto" />

#### Normally

- *Simple to develop*: One single codebase for human and the tooling
- *Easy to make changes*: Modify, build and deply
- *Easy to scale*: Run multiple instances behind a load balancer
- *Straightforward to test*: Backend REST API and frontend UI
- *Straightforward to deploy*: Built as a `.war` and put it on *Tomcat*

#### Once It Grows Bigger
