+++
title = "051 - Microservices and Spring Cloud"
description = "Post about Microservices and Spring Cloud"
+++


## Microservice

### Conceptually

- Divide and conquer
- Three parts when developing an application
  - Frontend
  - Database
  - Backend
    1. this is the part we call *Monolithic*
    2. this is the part we wanna divided into smaller parts

### Terminology

##### Component

> **Part** of your system or application, like the database technology, cache, or the messaging queue

- An unit of software that can be independently replaced and upgraded
- Like the ***database*** you are using (you shall be able to switch from *MySQL* to *Oracle* pretty easily because of the **architecture** you've built)

##### Service

> [An **unit** of **functionality**](https://simplicable.com/new/services-vs-components) that can be independently **deployed** separately, like the P*roduct Recommendation* for your E-Commerce project

- Out of process components who communicate in the form of a HTTP <small>(Web Service Request)</small> call or a RPC <small>(Remote Procedure Call)</small> call

### Definition

> Divided into sections in order to make this as easy as possible

##### Developing an application (your big or small projects)

> How low the coupling you want it to be?
>
> If it only concerns (either publish or subscribe) data (like JSON, XML or any other types) (isn't all projects like this?), you could even use totally different languages for each services/parts (the code works swiftly, though you need an extra step when running/deploying the application).

- as a suite of services  (conceptually separated) (like *Product Catalog*, *Product Recommendation* for the *E-Commerce* project)
- each running in its own process (requires you to de-couple the different parts in your software, which allows *hot-swapping* for software)
- communicate with lightweight mechanisms (locally the REST is fine, but since the components are in different processes(could also be considered as on different machines, aka. distributed system), not you need more sophisticated way to let them be able to find and talk to each other)
- and often an HTTP resource API (which might be RESTful HTTP or RPC styled)

##### They were often

- built around business capabilities (that means your project has divided into different parts based on your business)
- independently deployable and automatically deployed

##### Scaling

[Horizontal vs Vertical Scaling](https://old.reddit.com/r/algorithms/comments/rldfxv/horizontal_vs_vertical_scaling/hpfbmyu/)

> Microservice are suitable for *vertical scaling*

- Vertical Scaling: adding more hardware to ~ONE machine, but it has an upper limit!
- Horizontal Scaling: adding more machines, there's no limit to that!
