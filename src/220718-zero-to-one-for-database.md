<!-- toc -->

# Part One

### Before Database

- Intuitive way to manage the information: file-based system
- Take student for example

 > The dorminitory saves their own version like `ID,`STUDENT_NO`,`STUDENT_ROOM_NO`,`STUDENT_NAME etc. Then for the department, other than the `ID`, `STUDENT_NO`, they also have `GPA`, `MAJOR`.

### Why Database

- Avoid Data Redundancy: same info were saved twice in different places
- Avoid Data Inconsistency: updates weren't reflected in all other places
- Ease Data Access: in Computer Science's way

### What is a Database

> A collection of data, yet was consider as a *one*
<img src="/202207/20220722-database-def-database.png" alt="Illustration of a Database" width="60%" height="60%" />

### What is a Database Management System

- To *define*: the types, structures and constraints for the data stored
- To *construct*: which is the process of storing the data on the storage device
- To *manipulate*: which involves querying, updating the data and so on
- To *share*: is to allow multiple users and programs to access the data stored (=database)

### What is a Database System

> Combined the program to acess the data (to CRUD) and database-armed-with-utilities (DBMS), you got
>
> <img src="/202207/20220722-database-def-database-system.png" alt="Illustration of a Database" width="60%" height="60%" />

### Database Terminology

> *The object* means the *table* (e.g. An instance of the `Student`)

- *table*: a collection of related data that is organized in a tabular format
- *row*
  - A record
  - An *instance* of the type of the object
- *column*
  - An attribute
  - The *set of facts* regarding to the type of the object

### Three-Schema Archtecture

- Layer 1
    > What the particular user sees (like a *View* or the data!), basically, just the *content*, no exact process of *retrieving* or *storing*
- Layer 2: Conceptual Schema
    > Describe the structure of the DB (without the storage structures and such)
- Layer 3: Internal Schema
    > How the database is stored on the physical storage (e.g. the actual data type being used, the access path for each DBs)

### Data Independence

- Physically: *easy*
    > Like if the mechanism for retrieving or querying changes, the user wouldn't actually need to change anything, and the same thing applies to conceptual schema, which is how you create the database and tables.
- Logically: *hard*
    > External changes (in the physical world) wouldn't result inchanges in the database design. Well, it's a bit hard to do in most databases, which the schemas have to be revamped and the application also needs to be modified to accommodate the changes in the logical structure.

### Entity in the *Entity-Relationship* Model

- Entity
    > An object with either physical existence (e.g. *Teacher*, *Taco*) or conceptual existence (e.g. *Course*, *Occupation*) which have attributes that describe itself (e.g. Name, Age).
- Entity Type
    > A collection of *entities* that have the same attributes. Consider it as the database name, like *Employee*.
- Entity Set
    > The collection of all entities of a particular entity tpye. Consider it as the data rows in the *table* (or *Entity Type* if you prefer).

### Entity - Types of Attribute

- **Simple**: *Name* (`Oliver`), *Age* (`57`)
- **Composite**: *Address* (=> *City*, *Street*, *HouseNo*)
- **Multi-valued**: *Degree* (`67, 81, 98, 41`)
- **Derived**: *BirthDate* (`19630322`) => *Age*

### What is a *Key*

- It ensures *uniqueness*
- It still is an *attribute*
- It is also called *Primary Key*
- *Multiple non-PK attributes* could form a *Primary Key*
    > Like the attributes *firstName* plus *lastName* forming a primary key to uniquely identify a person

### Relationship in the *Entity-Relationship* Model

- Relationship: *Josh* [**WORKS ON**] *Project Awaken*
- Relationship Type Name: **WORKS ON**
- Relationship Set: EMPLOYEE *Josh* [**WORKS ON**] PROJECT *Awaken*

### Relationship - Types

> Go check the images under `./images/` if you want more illustrations

- Unary <small>(recursive)</small>
  - EMPLOYEE *Chris* <small>(Boss)</small> [**SUPERVISES**] EMPLOYEE *Lucas* <small>(Staff)</small>
- Binary
  - EMPLOYEE *Chris* [**WORKS ON**] PROJECT *Bomber*
  - EMPLOYEE *Dylan* [**WORKS ON**] PROJECT *Bomber*
  - EMPLOYEE *Elliot* [**WORKS ON**] PROJECT *Crackin*
- Ternary
  - Teacher *Frank* [**TEACHES**] COURSE *Math* ON SUBJECT *Calculus*
  - Supplier *Gooz* [**SUPPLY**] PROJECT *Doom* WITH PART *Uranium*

### Relationship - Type - Binary - Constraints

- Mapping Cardinality
    > e.g. EMPLOYEE, DEPARTMENT, PROJECT
  - *One to One*: EMPLOYEE *Harris* <small>(1)</small> [**MANAGES**] DEPARTMENT *Finance* <small>(1)</small>
  - *One to Many*: EMPLOYEE *Iris* <small>(N)</small> [**WORKS ON**] DEPARTMENT *Engineering* <small>(1)</small>
  - *Many to Many*: EMPLOYEE *Javier* <small>(N)</small> [**WORKS ON**] PROJECT *Elvis* <small>(N)</small>
- Participation
    > e.g. EMPLOYEE, PROJECT
  - *Partial Participation*: EMPLOYEE ***might*** work on PROJECT *Foy*
  - *Total Participation*: PROJECT *Foy* ***must be worked*** on by EMPLOYEE

### Two Full Examples on the Entity-Relationship Diagram

> University
>
> <img src="/202207/20220722-database-entity-ERD-fullexample-university.png" alt="ER Diagram of University" width="60%" height="40%" />
>
> Airline
>
> <img src="/202207/20220722-database-entity-ERD-fullexample-airline.png" alt="ER Diagram of Airline" width="60%" height="40%" />

### [Relational Model Terminology](https://www.educative.io/module/page/JZmo10C1K3V0gqV0w/10370001/5182411679203328/5791308815269888)

- Attribute
- Record
- Relation Schema
- Degree
- Cardinality
- Relation Instance
- NULL values
- Domain

### [Database Keys](https://www.educative.io/module/page/JZmo10C1K3V0gqV0w/10370001/5182411679203328/6316663510663168)

- Primary Key
- Foreign Key
- Candidate Key
- Composite Key
- Alternate Key
- Super Key

### Normalization

> What is it
  >>
  >> 1. A part of the database design process
  >> 2. To *characterize* the *rundundancy*
  >> 3. To *reduce redundancy* by modifying the schemas

##### *1NF*: First Normal Form

> Attribute must be atomic, no multi-valued ones allowed

```bash
# Old
+----+------+----------+
| ID | NAME |   TEL    |
+----+------+----------+
| 1  | Zed  |   110    |
| 2  | Yum  |   120    |
| 3  | Xeo  | 119, 911 |
+----+------+----------+


# New (1NF)
+----+------+----------+
| ID | NAME |   TEL    |
+----+------+----------+
| 1  | Zed  |   110    |
| 2  | Yum  |   120    |
| 3  | Xeo  |   119    |
| 3  | Xeo  |   911    |
+----+------+----------+
```

##### *2NF*: Second Normal Form

> All non-key attributes must be dependent on the primary key

```bash
# Old
+--------+-----------+------------+
| STU_ID | COURSE_ID | COURSE_FEE |
+--------+-----------+------------+
|   1    |     1     |    1000    |
|   2    |     2     |    2000    |
|   1    |     2     |    2000    |
|   3    |     3     |    3000    |
+--------+-----------+------------+


# New
+--------+-----------+
| STU_ID | COURSE_ID |
+--------+-----------+
|   1    |     1     |
|   2    |     2     |
|   1    |     2     |
|   3    |     3     |
+--------+-----------+

+-----------+------------+
| COURSE_ID | COURSE_FEE |
+-----------+------------+
|     1     |    1000    |
|     2     |    2000    |
|     3     |    3000    |
+-----------+------------+
```

##### *3NF*: Third Normal Form

> Non-key attribute cannot be dependent on another non-key ones

```bash
# Old
+--------+-----------+-----+---------+-----------+
| Std_Id |  Std_Name | Age | Prog_Id | Prog_Name |
+--------+-----------+-----+---------+-----------+
|   1    |    Jake   | 22  | CS-101  |   CS50    |
|   1    |    Jake   | 22  | PHY-01  |  Physics  |
|   2    |    Carl   | 25  | CS-201  |   Java    |
+--------+-----------+-----+---------+-----------+


# New
+--------+-----------+-----+---------+
| Std_Id |  Std_Name | Age | Prog_Pk |
+--------+-----------+-----+---------+
|   1    |    Jake   | 22  |    1    |
|   1    |    Jake   | 22  |    2    |
|   2    |    Carl   | 25  |    3    |
+--------+-----------+-----+---------+

+---------+---------+-----------+
| Prog_Pk | Prog_Id | Prog_Name |
+---------+---------+-----------+
|    1    | CS-101  |   CS50    |
|    2    | PHY-01  |  Physics  |
|    3    | CS-201  |   Java    |
+---------+---------+-----------+
# New
```

##### *BCNF* or *3.5NF*: Boyce-Codd Normal Form

> \

-----

# Part Two

## Foreword

### Origin

> 此篇为以下两篇博文的*延伸* (哪些概念值得去关注，当你会了基本语法和概念)
>
> - [Zero to One: on SQL](https://codingezio.github.io/zero-to-one-for-sql/)
> - [Zero to One: on Database](https://codingezio.github.io/zero-to-one-for-database/)

### Resources

> 知其本，惑消烬

#### Level 1

- [Database Design Fundamentals for Software Engineers](https://www.educative.io/courses/database-design-fundamentals)
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

### 何为 Database Migration

> [What's data/database migration? : node](https://old.reddit.com/r/node/comments/90fo0t/whats_datadatabase_migration/)

- 一「计」后悔药
- 一「法」跟随需求的进步
