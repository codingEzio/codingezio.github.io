+++
title = "Zero to One: on SQL"
description = "Zero to One: on SQL"
+++

> [*MariaDB*](https://mariadb.org/) with [*mycli*](https://github.com/dbcli/mycli)

-----

### Authentication

##### Modify Password for Connection

```sql
-- modify your password for connection
ALTER USER root@localhost IDENTIFIED VIA mysql_native_password;
SET PASSWORD = PASSWORD('YOUR-NEW-CONN-PASSWORD');
```

##### New User for New Database

1. Create

    ```sql
    -- The database below was created under the user 'root'

    CREATE USER 'testuser'@'localhost' IDENTIFIED BY 'testpasswd';
    GRANT ALL ON testdb.* TO 'testuser'@'localhost';

    FLUSH PRIVILEGES;
    ```

2. Connect

    ```bash
    # Depending which one do you use
    mysql --user testuser --password testdb
    mycli --user testuser --host localhost testdb
    ```

### Meta Info

##### Into the *Database* and its *Tables*

```sql
SHOW DATABASES;

+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| cardb              |
+--------------------+


USE                  cardb;
SHOW CREATE DATABASE cardb;
```

```sql
SHOW TABLES;

+-----------------+
| Tables_in_cardb |
+-----------------+
| car             |
| owner           |
| user            |
+-----------------+


-- table schema
DESCRIBE          user;
SHOW COLUMNS FROM user;

+----------+--------------+------+-----+---------+----------------+
| Field    | Type         | Null | Key | Default | Extra          |
+----------+--------------+------+-----+---------+----------------+
| id       | bigint(20)   | NO   | PRI | <null>  | auto_increment |
| password | varchar(255) | NO   |     | <null>  |                |
| role     | varchar(255) | NO   |     | <null>  |                |
| username | varchar(255) | NO   | UNI | <null>  |                |
+----------+--------------+------+-----+---------+----------------+


-- table creation
SHOW CREATE TABLE user   ;    -- long string filled with '\n's
SHOW CREATE TABLE user/G ;    -- display vertically (\n -> real line feeds)
```

##### Non-table Metadata

```sql
-- A set of symbols ('A') and its encodings (65)
SHOW CHARACTER SET;
SHOW VARIABLES LIKE 'char%';


-- A set of rules for comparing characters (e.g. for sorting)
SHOW COLLATION;
SHOW VARIABLES LIKE 'coll%';
```

### Data Creation

##### Create Databases and Tables

```sql
CREATE DATABASE               Car
CREATE DATABASE IF NOT EXISTS Car


CREATE TABLE Owner (
    OwnerId INT AUTO_INCREMENT,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    Gender ENUM('Male', 'Female', 'Non-Binary', 'PreferNotToTell'),
    Employed ENUM('Yes', 'Not-Yet') DEFAULT "Not-Yet",
    PRIMARY KEY (OwnerId)
);


-- deleted after the session ends
CREATE TEMPORARY TABLE Owner ( ... )
```

##### Add New Data

```sql
-- Different ways to the insertion of the Primary Key
INSERT INTO Person (id, name, age)
                    {1 , 'Jo', 29};

INSERT INTO Person (name, age)
                    {'Jo', 29};

INSERT INTO Person (DEFAULT , 'Jo', 29};
INSERT INTO Person (NULL    , 'Jo', 29};

INSERT INTO Person SET name='Jo', age=29;


-- Fail if there's any 'NOT NULL' restraints
INSERT INTO Person ( .. ) { .. }
```

### Syntax In Depth

##### `LEFT JOIN` or `LEFT OUTER JOIN`

1. There are three types of `JOIN`s: `INNER`, `OUTER`, `CROSS`
2. If you said `JOIN`, it's **`INNER`**`JOIN`
3. If you said either `LEFT`, `RIGHT` or `FULL`, it's **`OUTER`** `_` `JOIN`

-----

### References

- [Create new user in MySQL and give it full access to one database](https://stackoverflow.com/a/36190905/6273859)
- [MySQL :: Character Sets and Collations in General](https://dev.mysql.com/doc/refman/8.0/en/charset-general.html#:~:text=A%20character%20set%20is%20a,%2C%20B%20%2C%20a%20%2C%20b%20.)
