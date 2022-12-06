+++
title = "Microservice 02 - In Practice (微服务实践)"
description = "Problems to solve, stacks to choose etc."
+++


## Why

### What

- Something happened
  - Lots of requests, but a single machine is weak
    - lots of users coming in
    - lots of users doing a lot of work
  - can the machine to handle this situation elegantly/reliably/orderly
    - like the staff from KFC who's in charge of taking orders
      - customers! don't worry
      - customers! one by one
      - customers! go back to your seat, check in later
      - customers! take this queue number and we'll call you
      - customers! once the number87 customer is finished, then it's you
      - customers!

### Why we build applications

- to achieve a certain goal
  - why we turn them into microservices instead of *monolithic*
    - easier to manage
      - why make it *easier to manage*
        - making the *certain goal* can always be delivered
    - easier to scale
      - use would grow -> amount of data would also grow
    - easier to debug
      - less coupling, the better
    - easier to accomplish the non-code business need
      - like being stable when huge number of users login at the same time
    - easier for the user
      - log in once (top domain), able to access all the subdomains

### Rant

#### Why there a tons of buzzword

- people seemed to love abstractions and drowned into them
- easier for professionals who already understood them to communicate

#### Why there are so many tools

- they want to solve a certain (set of) problem(s)
- they have their own trade-offs in mind (as for programming in general)

#### Why there are so many tools on [Spring Cloud](https://spring.io/projects/spring-cloud)

- they are here to solve problems
- they themselves might intertwine with each other

- I'm confused and scared by the sheer amount of stuff I need to know
  - Don't worry, they are here to solve *problems*
  - Don't be scared, they are inherently simple, the *complexity* is in your business

## How (and why)

### How could different (parts of) programs communicate?

- they communicate via *IPC* [<small>Inter-process communication</small>](https://en.wikipedia.org/wiki/Inter-process_communication)
  - what the fuck is *IPC*
    - a way to for different things to communicate
      > ***These were shall be used in different circumstances, and often we use multiple of them at the same time***
      - like *File*. I write, you read
      - like *Shared Memory*. I write, you read
      - like *Message Queue*. I sent, you process later (when to use? e.g. buyer do something on e-commerce)
      - like *Socket*, a remote file-like connection, I write, you read (when to use? e.g. different services making calls to each other)
- they communicate via *RPC* [<small>(Remote procedure call)</small>](https://en.wikipedia.org/wiki/Remote_procedure_call)
  - what the fuck is *RPC*
    - another form of communication through different processes
    - a model that has the client and the server
    - a model that is often implemented to have [the client and the server](https://stackoverflow.com/a/12081195/6273859)
      - like [`xmlrpc` in Python](https://docs.python.org/3/library/xmlrpc.client.html#xmlrpc.client.ServerProxy.system.methodHelp) <small>([source code](https://github.com/python/cpython/blob/3.11/Lib/xmlrpc/client.py))</small>
        - server register the function
        - client call the function
  - what the fuck is [*RPC Framework*](https://stackoverflow.com/a/20664706/6273859)
    - *RPC* recap: way to let the *client* call a function that is far beyond
      - to make the client<>server RPC model implementation *faster*
      - to make the client<>server RPC model implementation *easier*
      - to make the client<>server RPC model implementation *more secure*
      - to make the client<>server RPC model implementation *more reliable*
    - like [*gRPC*](https://en.wikipedia.org/wiki/GRPC)
      > think of the *g* as *a bunch of people adding different features to the RPC in order to make it better*. Any implementations could be think of as *RPC, but more powerful than it intends to be*
      - *faster*: it use *protoBuf* instead of JSON, smaller payload (less data) to send,  speed
      - *easier*: like you use an external library, the person who wrote that could wrap the popular usage into a single function instead of different steps to you to write manually
      - *more secure*: when it [*sends* and *receives*](https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md) stuff, it adds the *HTTP-2* related headers, in order to make use of the new protocol introduced, and maybe some servers enabled it, then the process are more secure
      - *more reliable*: as it uses *HTTP-2* which uses the **TCP**, it's already better with the features provided by the *TCP* protocol; and also the *Google* developers from *gRPC* could also add some logic to make it better (e.g. too much? slow down. Like the *flow control* in *TCP*)
  - what the fuck is the **most notable** differences between [*XML-RPC*](https://en.wikipedia.org/wiki/XML-RPC), [*JSON-RPC*](https://en.wikipedia.org/wiki/JSON-RPC) and *gRPC*
    - different ways to enable the data being sent and received

### What the fuck is *Message Broker*

- Two parts of them
  - message queue
    - a medium for [different processes to communicate with each other](https://courses.cs.duke.edu/cps110/spring00/slides/servers.pdf)
    - I might send a file, you read it
    - I might send a request, you process it
  - messge broker
    - do something about the message queue
    - make it faster
    - make it smarter
      - e.g. slow down if the *consumer* could not take too many
    - make it more reliable
      - e.g. give the *messages in the queue* a serial number, make the client received is ordered
  - the other keywords
    - pull and push
    - publisher and consumer
    - persistence or drop-after-consume
- A lot of choices
  > [Some were message brokers, some were brokers with more ambitions](https://www.conduktor.io/blog/comparing-apache-kafka-activemq-and-rabbitmq)
  - RabbitMQ
  - ActiveMQ
  - Kafka

#### Examples when [*Kafka* was used with *ZooKeeper*](https://tobebetterjavaer.com/mq/kafka.html#%E7%B3%BB%E7%BB%9F%E6%9E%B6%E6%9E%84)

- users call stuff, services process and return stuff
  - consumer / producer
- too many users or users many too many calls (=> too many messages)
  - multiple brokers to handle (like multiple attendants to take orders)
  - combined them, we call it *cluster*, i.e. *Kafka Cluster*
- multiple brokers needs to be managed
  - because the multiple requests might be sent by one consumers
    - yet it's on different brokers
      - therefore the order, the speed could *not* be guaranteed
      - but we need to make that happen
    - therefore you need put the config (and/with metadata) somewhere
    - ZooKeeper does stuff like service registration, config management and so on
      - we want the *config management*

-----

- to practice
  - [Spring Boot Microservices Project Tutorial - Part 1 - ProgrammingTechie](https://programmingtechie.com/2021/03/24/spring-boot-microservices-project-tutorial-part-1/)

- to extract
  - [Comparing Apache Kafka, ActiveMQ, and RabbitMQ](https://www.conduktor.io/blog/comparing-apache-kafka-activemq-and-rabbitmq)

- note for myself
  - I'm stretching the real-life analogies to the limit
