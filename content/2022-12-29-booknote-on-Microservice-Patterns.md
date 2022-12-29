+++
title = "Booknote on Microservice Patterns"
description = "Microservices Patterns: With examples in Java"
+++

### Resources

- [Chris Richardson](https://www.goodreads.com/author/show/568718)
  - [Microservices Patterns: With examples in Java](https://www.goodreads.com/book/show/58448831) [<sup>src</sup>](https://github.com/microservices-patterns/ftgo-application)

### Overview

> Also serve as a progress tracker <small>(😈 means done)</small>

| fini | chap | page | ovrv |
| :---: | :---: | :---: | :--- |
| 😈 | 01 | `001 to 033` | overview |
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

- *SITUATION*: More features + More members
- *RESULT*
  - Difficult to *make sense of*
  - Difficult to *make changes*
  - Harder to *write thorough tests* to make it reliable
  - Harder to *deliver* because the comm between each teams
  - Harder to *scale* as each parts come with different requirements
  - Harder to *keep it stable* as all were in the same processes
  - Harder to *technology migration* to avoid being obsolete

### 0x02 What to Do

#### Conceptually

> Especially for Axis *Y*: they shall be loosely coupled like communicating via API calls, and each manage/have its own/relevant databases. Something like this:
>
> <img src="/202212/2022-1229-booknote-illustration-ftgoapp-microservice.png" alt="An illustration that shows the architecture of a monolithic application being transformed into microservices" width="80%" height="auto" />

- Axis *X*: Distributing multiple instances across places
- Axis *Y*: Splitting things by functionalities like it's standalone
- Axis *Z*: Splitting things like data for difference machines to handle

#### What Benefits You would Get

- *SITUATION*: Same features + Same members, yet all loosely coupled
- *RESULT*
  - Easier to *make sense of* as individual codebase is smaller
  - Easier to *make changes* as each were <small>(almost)</small> standalone
  - Easier to *test* and *deliver* via *Continuous Delivery*
  - Easier to *communicate* because each were *loosely coupled*
  - Easier to *scale* as each components were *independently deployable*
  - Easier to *keep it stable* as in differnet process or even machines
  - Easier to *technology migration* as APIs don't care the underlying tech

#### What Drawbacks would Come With

- Not easy to separate the business logic into a *right set of services*
- Not easy to decide when to adopt <small>(mono: start faster, micro: easier later)</small>
- Distributed systems' inter-process communications are complex
- Distributed systems' data fetching across machines are complex
- Distributed systems' data consistency are difficult to do it right
- Needs high-level automation like [*k8s*](https://en.wikipedia.org/wiki/Kubernetes) to make *dev to prod* easier

### 0x03 N/A

> Page 19 to 32 might just be the best material I have ever read on Microservices. It mainly talks about the origin of <small>(Design)</small> *Patterns* and the actualization on Microservices.
>
> I shall digest and organize it into notes that were easy to understand within 3 weeks <small>(deadline: `January 19, 2022`)</small>

### 0x04 \
