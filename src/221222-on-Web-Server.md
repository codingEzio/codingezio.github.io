> Those inline references have the highest importances among them all
<!-- toc -->

## Prologue

> These were just speculation and guesswork 🤒

### Choice

- There were **tons** of alternatives to *Nginx* and *Apache*, it's just that they were *famous* and *widely used*
- You gotta understand the WHY for needing *A SERVER*
- You could even just use code <small>(e.g. Express.js)</small> instead of a dedicated server
- The lines were blurry if you weren't sure [what you actually need](https://news.ycombinator.com/item?id=10266246#:~:text=RyanZAG) <sup>the refutations also worth a read</sup>
  > Consider this list as an inexact hierarchy of servers. Servering stuff is *easy*, yet you normally need more advanced features like *Load Balancing*. And those advanced stuff were done way better in the group of higher level softwares/servers.
  - Using [*Express.js*](https://expressjs.com/) to start one counts as a server
  - Using [*Gunicorn*](https://gunicorn.org/) counts as a server as well
  - Using [*Nginx*](https://docs.nginx.com/nginx/admin-guide/web-server/) could definitely be counted as one as well

## Demystification

### References

> Stuff I would like to read upfront before approaching and using these server softwares

- [What is Nginx? Explain to Me Like I'm 5 Because I'm Clueless!](https://old.reddit.com/r/nginx/comments/mvatwk/what_is_nginx_explain_to_me_like_im_5_because_im/)
- [What is Gunicorn and Nginx?](https://old.reddit.com/r/django/comments/b0ug27/eli5_what_is_gunicorn_and_nginx/)
- [Is Tomcat = Apache (or other web server) + JavaEE](https://stackoverflow.com/questions/55414498/is-tomcat-apache-or-other-web-server-javaee)
- [What's the Difference between A Proxy Server and A Reverse Proxy Server?](https://stackoverflow.com/questions/224664/whats-the-difference-between-a-proxy-server-and-a-reverse-proxy-server)
- [What's the Purpose of Ngnix?](https://old.reddit.com/r/node/comments/c9dp1m/whats_the_purpose_of_ngnix/)

### Notes Derived from These

> N/A

-----

## In Practice

### Sources that I Considered Good for Practical Use

- [一文巩固 Nginx 知识体系](https://web.archive.org/web/20230216054438/https://blog.nowcoder.net/n/2cec4b7c85c84c9abe537319b44eb59d?from=nowcoder_improve)

### Notes Derived from These

> N/A

-----

## Learning Materials

### Do It Yourself

- [Tomcat - 如何设计一个简单的web容器](https://pdai.tech/md/framework/tomcat/tomcat-x-design-web-container.html)
- [Writing Web Server in Python: sockets](https://iximiuz.com/en/posts/writing-web-server-in-python-sockets/)

### Source Code

- [Nginx 源码分析](https://taodaling.github.io/blog/2020/07/16/nginx%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/)
- [Tomcat 源码详解知识体系详解](https://pdai.tech/md/framework/tomcat/tomcat-overview.html)
- Source code to `clone`: [Nginx](https://github.com/nginx/nginx) and [Tomcat](https://github.com/apache/tomcat/tree/main)
