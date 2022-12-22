+++
title = "One to Infinity - Database"
description = "On Database in Computer Science"
+++

## Foreword

### Origin

> 此篇为以下两篇博文的*延伸* (哪些概念值得去关注，当你会了基本语法和概念)
>
> - [Zero to One: on SQL](https://codingezio.github.io/zero-to-one-for-sql/)
> - [Zero to One: on Database](https://codingezio.github.io/zero-to-one-for-database/)

### Resources

> 知其本，惑消烬

#### Level 1

- [关系型数据库 (总览)](https://dunwu.github.io/db-tutorial/pages/9bb28f/#%E6%89%A7%E8%A1%8C%E8%AE%A1%E5%88%92)
- [Mysql 应用指南 (总览)](https://dunwu.github.io/db-tutorial/pages/5fe0f3/)

#### Level 2

- [关系型数据库是如何工作的](https://pdai.tech/md/db/sql/sql-db-howitworks.html)
- [Database Internals: A deep-dive into how distributed data systems work](https://www.goodreads.com/book/show/44647144)
- 以及众多其他网站，如 [*Reddit*](http://reddit.com/), [*StackOverflow*](http://stackoverflow.com/) 等等

### How

1. 阅读他人总结好的
2. 察 技术来源及替代品、代码实现、ELI5解释
3. 作 绘制流程、于10字简述(😈)

## Content

> Current focus: The *Relational Database* **MySQL**

### 要讨论的话题

- 索引与约束: 高效找数据 + 入库前先*精筛*
- 事务：让数据符合预期的存入数据库 + 全入或不入逻辑
- 并发控制：较代码稍高一层的抽象，处理*冲突* <small>(i.e. 锁)</small>
- 分库分表：配合并发；将数据分至多节点，分摊单节点压力
- 集群：配合并分库表；分担压力顺便高可用，或备份，或恢复
- 优化：SQL 本身，运行 SQL 的软件 (比如从配置入手)

-----

### 何为数据库

- 终为抽象非实体 或文件或表格皆为之
- for more, see my [another post](https://codingezio.github.io/zero-to-one-for-database/)

### 何为索引

> References: [\#1](https://stackoverflow.com/a/12614426/6273859), [\#2](https://stackoverflow.com/a/12614254/6273859), [\#3](https://stackoverflow.com/a/708508/6273859)

- 形态 同数据库记录 其亦需读创改
- 流程 确某列唯一性 列变针指据 拷据索 或置内存
- 白话 把它当成「搜索巨量文本」变为「找数二分搜索」
- 注意 创之相当于单列属-占位耗时 写时若涉引亦波及
- 分类按限 `INDEX`, `PRIMARY`, `UNIQUE`, 多段作索
- 分类按储
- 实现
