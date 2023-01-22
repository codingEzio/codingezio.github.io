+++
title = "On Message Queue"
description = "Know, learn, build and teach"
+++

> Currently it's just a post with a bunch of links for leanring materials. The main thing I wanna achieve through this post is that not just knowing how to use Message Queues like *Kafka*, *RabbitMQ*, but also understanding how it works internally through writing an implementation of it.

## Foundation

### Why Message Queue

- [How Can Message Queues Improve Scalability?](https://softwareengineering.stackexchange.com/questions/425190/how-can-message-queues-improve-scalability)
- [A Dummy’s Guide to Distributed Queues](https://www.freecodecamp.org/news/a-dummys-guide-to-distributed-queues-2cd358d83780/)
- [In Which Domains are Message-oriented Middleware like AMQP Useful?](https://stackoverflow.com/questions/2388539/in-which-domains-are-message-oriented-middleware-like-amqp-useful/)
- [Microservices Communications - Why Switch to Message Queue](https://dev.to/matteojoliveau/microservices-communications-why-you-should-switch-to-message-queues--48ia)
- and my own notes [What the Fuck is Message Broker](https://codingezio.github.io/microservice-01-concepts/#what-the-fuck-is-message-broker)

### Architecture

- [Concepts and considerations for Message Queues in System Design](https://web.archive.org/web/20221230083203/https://medium.com/must-know-computer-science/system-design-message-queues-245612428a22)
- [Comparing Apache Kafka, ActiveMQ, and RabbitMQ](https://www.conduktor.io/blog/comparing-apache-kafka-activemq-and-rabbitmq) <small>(weigh on)</small>

## Practice

### Implementation

- [vitorluis/SimpleMQ](https://github.com/vitorluis/SimpleMQ) <small>(*Python*, in-memory)</small>
- [dhslrl321/zsmq](https://github.com/dhslrl321/zsmq) <small>(*Java*)</small>

## Onto the Real World

### Which One?

> [Comparing Apache Kafka, ActiveMQ, and RabbitMQ](https://www.conduktor.io/blog/comparing-apache-kafka-activemq-and-rabbitmq) <small>(this link is not a guide to the options listed below)</small>

- *RabbitMQ*: [documentation](https://www.rabbitmq.com/documentation.html), [source code](https://github.com/orgs/rabbitmq/repositories?q=&type=source&language=&sort=stargazers)
- *Kafka*: [documentation](https://kafka.apache.org/20/documentation.html), [source code](https://github.com/apache/kafka)
- *RocketMQ*: [documentation](https://rocketmq.apache.org/docs/), [source code](https://github.com/apache/rocketmq)
