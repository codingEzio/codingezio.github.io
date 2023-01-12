+++
title = "Booknote on Database Internals"
description = "A deep-dive into How Distributed Data Systems Work"
+++

### Resources

- [Alex Petrov](https://www.goodreads.com/author/show/19007122)
  - [Database Internals: A deep-dive into how distributed data systems work](https://www.goodreads.com/book/show/44647144)

-----

## Concepts

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

## Choose the Right Database for You

### Caveats when Choosing Databases

> Your choice of database system may have long-term consequences. If there’s a chance that a database is not a good fit because of performance problems, consistency issues, or operational challenges, it is **better to find out about it earlier in the development cycle**, since it can be **nontrivial to migrate** to a different system. In some cases, it may require substantial changes in the application code.
>
> .. invest some time before you decide on a specific database to build confidence in its ability to meet your application’s needs.

### How It Actually Should be Done

> Trying to compare databases based on their components (e.g., which storage engine they use, how the data is shared, replicated, and distributed, etc.), their rank or .. can lead to invalid and premature conclusions
>
> Every comparison should start by **clearly defining the goal**, because even the slightest bias may completely invalidate the entire investigation. If you’re searching for a database that would be a good fit for the workloads you have (or are planning to facilitate), the best thing you can do is to **simulate these workloads** against different database systems, **measure the performance metrics** that are *important for you*, and compare results.
>
> **Some issues**, especially when it comes to performance and scalability, start **showing only after some time or as the capacity grows**. To detect potential problems, it is **best to have long-running tests in an environment that simulates the real-world production setup** as closely as possible.

### Methology in Practice

#### understand the use case in great detail

- Schema and record sizes
- Number of clients
- Types of queries and access patterns
- Rates of the read and write queries
- Expected changes in any of these variables

#### define the current and anticipated variables

- Does the database support the required queries?
- Is this database able to handle the amount of data we’re planning to store?
- How many read and write operations can a single node handle?
- How many nodes should the system have?
- How do we expand the cluster given the expected growth rate?
- What is the maintenance process?

#### read the source code

> *Looking at the code*, it is often useful to first understand the parts of the database, how to find the code for different components, and then navigate through those.
>
> *Having* even a rough *idea* about the *database codebase* helps you better understand the log records it produces, its configuration parameters, and helps you find issues in the application that uses it and even in the database code itself.

## On *Storage Engine*

### Trade-off

> Designing a storage engine is definitely more complicated than just implementing a textbook data structurethere are many details and edge cases that are hard to get right from the start.
>
> We need to
>
> - design the physical data layout and organize pointers,
> - decide on the serialization format,
> - understand how data is going to be garbage-collected,
> - how the storage engine fits into the semantics of the database system as a whole,
> - figure out how to make it work in a concurrent environment, and,
> - finally, make sure we never lose any data, under any circumstances.

### Example on *Order of Insertion*

> if we **save records in the order they were inserted** into the database,
>
> - we can **store** them **quicker**, but
> - if we **retrieve** them in their lexicographical order, we have to **re-sort** them before returning results to the client.
>
> As you will see throughout this book, there are many different approaches to storage engine design, and every implementation has its own upsides and downsides.

#### Example on *City Planning*

> To draw a parallel with city planning, it is possible to build a city for a specific population and choose to build up or build out. In both cases, the same number of people will fit into the city,
>
> but these **approaches** lead to **radically different lifestyles**
>
> - When building the city up, people live in apartments and population density is likely to lead to more traffic in a smaller area;
> - in a more spread-out city, people are more likely to live in houses, but commuting will require covering larger distances.

## Database Categorization

- N/A

-----

## References

### N/A

- N/A
