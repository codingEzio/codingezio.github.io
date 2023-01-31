<!-- toc -->

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
