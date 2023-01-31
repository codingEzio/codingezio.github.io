<!-- toc -->
+++
title = "On Netty"
description = "What it is, why use it and other details"
+++

> I was going for an explanation of what Netty is, why choose it specifically and when to use it that people could easily understand even without prior knowledge to the Java concurrency ecosystem <small>(or as little as possible)</small>. Down below are my own understand of the whole thing, errors are expected.
>
> And I think some of my confusions might be derived from *inadequate understanding of web servers* and *only heard of Nginx and Apache, thought there were no alternatives*.

## Before We Begin

> I do know a little bit of Django and Tornado before diving into the Java/Spring ecosystem. Both of them are web frameworks which have different capabilities, while they allow you writing code for things like the view template engine for user interaction, controller and models for the actual work, they also could serve the code by themselves which could be put directly onto the cloud <small>(not recommended for production, but it could)</small>.
>
> The name for the capability of *serving the code* are normally called as *Application Server*, which is just a normal web server <small>(receive request -> handle -> return response)</small> with much more capabilities <small>(not just serving static resources, but could also executing code)</small>. They themselves "eliminate" the need for the core functionalities of actual web servers like *Nginx*, which now could serve as a mere *proxy*.
>
> So, for *Tornado*, it's a *web server* <small>(of course, you do need to write a few lines of code like the Express framework in *Node.js*)</small> and a *web framework*.
>
> Right now, it seems like that *Netty* serves like an Application Server while aims more than just web framework related stuff as it implemented protocols.

- It is a NIO client server framework <small>(quote)</small>
- It could do more than implementing an async application server
- It handles things asynchronously which achieve faster speed (I/O)
- It does the actual work and [implementation for Transport Protocols](https://en.wikipedia.org/wiki/Netty_(software))
- It was built on *NIO* <small>(N: Non-Blocking)</small> which is just I/O done asynchronously

## Concepts

- [ ] TODO

## Usage

- [ ] TODO

-----

## References

### Learning Materials

- [sanshengshui/netty-learning-example: Netty实践学习案例](https://github.com/sanshengshui/netty-learning-example)
- [Introduction to Netty](https://www.baeldung.com/netty)

### Directly Inspired

- [kgusarov/spring-boot-netty: Spring Boot integration with Netty](https://github.com/kgusarov/spring-boot-netty)
- [Is Tornado a replacement to Django or are they complementary to each other](https://stackoverflow.com/questions/6247735/is-tornado-a-replacement-to-django-or-are-they-complementary-to-each-other)
- [淺談 Web Server and Application Server | by vic](https://vicxu.medium.com/web-server-and-application-server-5a6d9c940eff)
- [Tornado Web Server — Tornado 6.2 documentation](https://www.tornadoweb.org/en/stable/)

### References for References

- [Spring webFlux differrences when Netty vs Tomcat is used under the hood](https://stackoverflow.com/a/56806022/6273859)
- [java - What's the difference between Jetty and Netty](https://stackoverflow.com/questions/5385407/whats-the-difference-between-jetty-and-netty)
- [Beej's Guide to Network Programming](https://beej.us/guide/bgnet/) <sup>[src](https://github.com/beejjorgensen/bgnet)</sup>
