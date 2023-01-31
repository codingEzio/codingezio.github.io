<!-- toc -->
+++
title = "Microservice 00 - Idea"
description = "What is it, really?"
+++

## Simple Introduction

### Before We Begin

> Whether it's *Distributed System* or *Microservices*, it's all basically the same thing. They were just abstractions to describe certain things.
>> Microservices: were often need to run on different machines, therefore *distributed*

### Conceptually

#### What It Is

- It's basically *divide and conquer*
- Almost all applications were built by these parts
  - Frontend
  - Database
  - Backend
    1. this is the part we call *Monolithic*
    2. this is the part we wanna *divide* into smaller **managable** parts

### Practically

#### How It Was Done

1. Divide the application into different **parts**
2. Use different software to solve different **problems**

#### What It Looks Like

> Simply put, it's **independently running processes**. In the case of containerization, it's [`docker-compose.yml`](https://github.com/rithinch/event-driven-microservices-docker-example/blob/master/docker-compose.yml) file which manages different micro components also known as *containers* <small>(code and their dependencies wrapped)</small>.
>
> What about those Java projects that contain a bunch of components, which could be ran in a single command? That's the trade-off you could/sometimes make:
>
> - Easier operations like *starting*, *re-deploy*, *destroying*
> - Messier debugging

## Academic-ish Explanations

### Terminology Would Be Used

#### Component

> **Part** of your system or application, like the database technology, cache, or the messaging queue

- An unit of software that can be independently replaced and upgraded
- Like the ***database*** you are using (you shall be able to switch from *MySQL* to *Oracle* pretty easily because of the **architecture** you've built)

#### Service

> [An **unit** of **functionality**](https://simplicable.com/new/services-vs-components) that can be independently **deployed** separately, like the P*roduct Recommendation* for your E-Commerce project

- Out of process components who communicate in the form of a HTTP <small>(Web Service Request)</small> call or a RPC <small>(Remote Procedure Call)</small> call

### Why Do Microservices

#### Developing an application (your big or small projects)

> How low the coupling you want it to be?
>
> If it only concerns (either publish or subscribe) data (like JSON, XML or any other types) (isn't all projects like this?), you could even use totally different languages for each services/parts (the code works swiftly, though you need an extra step when running/deploying the application).

- as a suite of services  (conceptually separated) (like *Product Catalog*, *Product Recommendation* for the *E-Commerce* project)
- each running in its own process (requires you to de-couple the different parts in your software, which allows *hot-swapping* for software)
- communicate with lightweight mechanisms (locally the REST is fine, but since the components are in different processes(could also be considered as on different machines, aka. distributed system), not you need more sophisticated way to let them be able to find and talk to each other)
- and often an HTTP resource API (which might be RESTful HTTP or RPC styled)

#### They were often

- built around business capabilities (that means your project has divided into different parts based on your business)
- independently deployable and automatically deployed

#### Scaling

[Horizontal vs Vertical Scaling](https://old.reddit.com/r/algorithms/comments/rldfxv/horizontal_vs_vertical_scaling/hpfbmyu/)

> Microservice are suitable for *vertical scaling*

- Vertical Scaling: adding more hardware to ~ONE machine, but it has an upper limit!
- Horizontal Scaling: adding more machines, there's no limit to that!
