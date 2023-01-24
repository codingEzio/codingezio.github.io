+++
title = "On Remote Procedure Call"
description = "Know, learn, build and teach"
+++

> Currently it's just a post with a bunch of links for leanring materials. The main thing I wanna achieve through this post is that not just knowing how to use RPCs in the code like *Feign*, *Dubbo* or *gRPC*, but also understanding how it works internally through writing an implementation of it.

## Foundation

### What Is It, Really

- [Writing an RPC From Scratch](https://alexanderell.is/posts/rpc-from-scratch/) <small>(*C*)</small>
- [What is RPC framework and Apache Thrift?](https://stackoverflow.com/questions/20653240/what-is-rpc-framework-and-apache-thrift/20664706#20664706)
- and my own notes
  > [How could different (parts of) programs communicate?](https://codingezio.github.io/microservice-01-concepts/#how-could-different-parts-of-programs-communicate)

### When to Use It

- [Understanding RPC Vs REST For HTTP APIs](https://www.smashingmagazine.com/2016/09/understanding-rest-and-rpc-for-http-apis/)
- [REST vs. RPC: What Problems Are You Trying to Solve with Your APIs?](https://cloud.google.com/blog/products/application-development/rest-vs-rpc-what-problems-are-you-trying-to-solve-with-your-apis)

## Which One?

> [Feign+Ribbon, Dubbo, gRPC 的选型对比](https://blog.csdn.net/id5555/article/details/108960705) <small>(*CSDN*, non-archivable)</small>

- *Feign*: [documentation](https://docs.spring.io/spring-cloud-openfeign/docs/current/reference/html/), [source code](https://github.com/OpenFeign/feign) <small>(inexact categorization)</small>
- *Dubbo*: [documentation](https://dubbo.apache.org/en/docs/v2.7/user/preface/background/), [source code](https://github.com/apache/dubbo)
- *gRPC*: [documentation](https://grpc.io/docs/languages/java/quickstart/), [source code](https://github.com/grpc/grpc-java)

## Implement Your Own

### Less Code to Digest

- [earthstar-project/mini-rpc](https://github.com/earthstar-project/mini-rpc) <small>(*TypeScript*)</small>
- [GeeRPC: 7天用 Go 从零实现 RPC 框架](https://geektutu.com/post/geerpc.html) <sup>[src](https://github.com/geektutu/7days-golang/tree/master/gee-rpc/doc)</sup> <small>(*Go*)</small>

### A Bit Heavier to Digest

> Why was *ZooKeeper* and *Nacos* being used? Because to communicate via *RPC*, you need to have difference services to start with, and they must be able to find each other when you invoke methods that does *RPC* underneath between services.

- [veal98/RPC-FromScratch](https://github.com/veal98/RPC-FromScratch) <small>(*Java*, *Netty* and *ZooKeeper*)</small>
- [CN-GuoZiyang/My-RPC-Framework](https://github.com/CN-GuoZiyang/My-RPC-Framework) <small>(*Java*, *Netty* and *Nacos*)</small>

-----

## Overview

### Resource

- [RPC 基础常见总结](https://javaguide.cn/distributed-system/rpc/rpc-intro.html)
- [Dubbo 常见总结](https://javaguide.cn/distributed-system/rpc/dubbo.html)
