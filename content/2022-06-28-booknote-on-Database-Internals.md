+++
title = "Booknote on Database Internals"
description = "A deep-dive into How Distributed Data Systems Work"
+++

### Resources

- [Alex Petrov](https://www.goodreads.com/author/show/19007122)
  - [Database Internals: A deep-dive into how distributed data systems work](https://www.goodreads.com/book/show/44647144)

### Notes

#### Concepts

- Horizontal Scaling
  - Scaling Out
  - Improving performance and increasing capacity by running multiple database instances

- Vertical Scaling
  - Scaling Up
  - Moving the database to a larger, more powerful machine.
  - Migrations can be long and painful, potentially incurring downtime.

- Databases are
  - modular systems and consist of multiple parts
  - a transport layer accepting requests
  - a query processor determining the most efficient way to run queries
  - an execution engine carrying out the operations
  - a storage engine

- Database management systems are
  - applications built on top of storage engines
  - offering a schema, a query language, indexing, transactions
  - and many other useful features.

#### 观

> *Looking at the code*, it is often useful to first understand the parts of the database, how to find the code for different components, and then navigate through those.
>
> *Having* even a rough *idea* about the *database codebase* helps you better understand the log records it produces, its configuration parameters, and helps you find issues in the application that uses it and even in the database code itself.
