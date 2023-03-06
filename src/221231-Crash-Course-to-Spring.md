<!-- toc -->

## Core Concepts

### What is Spring

#### Narrowly speaking

> The [*Spring Framework*](https://spring.io/projects/spring-framework) is set of [essentials modules](https://spring.io/projects/spring-framework#:~:text=Core%20technologies,dynamic%20languages) to build any kinds of web apps
>
> <img src="/src/202303/20230306-spring-framework-overview-by-pdai.png" alt="Illustration of the essential modules of the Spring Framework" width="70%" height="60%" />

- One that produces loosely coupled code via D.I.
  - 👉 *D*ependency *I*njection (by *Spring*)
  - 👉 *I*nversion *o*f *C*ontrol (in the perspective of one who imports stuff)

#### Broadly speaking

> The [*Spring Projects*](https://spring.io/projects) is a list of projects to accomplish or to help you accomplish certain tasks

### What is Spring Boot

> Source: *Spring in Action* <small>(edition 6th, page 33)</small>

- an extension of the Spring Framework
- an extension that offers productivity enhancements
- the most well known enhancements: *autoconfiguration*
- you could treat Spring and Spring Boot as the same

## Relevant Concepts

### Terminology Demystified

#### *Beans*

- They are objects, managed by the *IoC* container, for ease of use

#### Servlet

> Credit to [*Overview of HTTP Servlets*](https://docs.oracle.com/cd/E13222_01/wls/docs81/servlet/overview.html) and [*What is Java Servlet*](https://stackoverflow.com/questions/7213541/what-is-java-servlet/7213582#7213582)

- It's a Java class
- It's used to handle network requests
- It runs on a Java-enabled server
