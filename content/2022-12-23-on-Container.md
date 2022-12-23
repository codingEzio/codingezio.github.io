+++
title = "On Container"
description = "Thoughts, notes and implementations"
+++

> Draft only, further rewrote needed

Docker is just a wrapper for tools like namespaces and cgroups.

For concepts

- ✔️ <https://jvns.ca/blog/2016/10/10/what-even-is-a-container/>

For higher level <https://www.ianlewis.org/en/tag/container-runtime-series>

- ✔️ <https://www.ianlewis.org/en/container-runtimes-part-1-introduction-container-r>
- <https://www.ianlewis.org/en/container-runtimes-part-2-anatomy-low-level-contai>

Concepts and Implementations

- <https://youtu.be/Utf-A4rODH8>

Namespaces
> a Linux tool named unshare, it makes different types of namespaces, for processes (pid, process id, you can be the pid 1 in this new world), networking (use whatever ports without worries about conflicts), file (mount namespaces, in the practical sense, we can use it for persistence).
>
> of course, some other tools (could be unshare, or the other tools that related to the abstractions namespaces) allow us to enter in the virtual world (namespaces).

Cgroups
> Limit the resources can be used, like memory, CPU and so on through config files.
>
> it also provide cli for us to configure the resources

Containers? Just they two and some good features attached to them.

Container runtime are just another thing (set of tools, as usual) to manage the virtualization (namespaces) like start, end and such, and adding some restrictions to it via cgroups, also it shall have tools for you to enter in the virtualization to run commands (port mapping? persistence? it’s already provided by namespaces technology).

Runtimes are the thing to handle your program start to end (like HotSpot in Java JVM). This is another abstraction, fuck me 🤣

There are different types of container runtime. Some of them are bare bone (some of the higher runtimes ARE based on the lower-level types of runtimes), some are more full-featured (e.g. think of it as Docker-to-Kubernetes, it’s not just feature, but giving you solutions, the higher/application-centric level). That’s why you have Docker, Kubernetes, Podman and so on.

Now I suddenly realized why Podman once claimed that you can simply alias podman as docker. Why? Because the needs to start/end/anything-else are universal. The needs are the APIs, the (basic) needs rarely change.
