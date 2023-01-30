+++
title = "Zero to One: on SQL"
description = "Zero to One: on SQL"
+++

### Setup

> Back then I was using [*MariaDB*](https://mariadb.org/) with [*mycli*](https://github.com/dbcli/mycli) on *macOS*

#### MySQL

> Normally I would choose the `brew install` approach, but it appears that there were unexpected permission issues relating to *sockets*. Also tried the *GUI* approach, well, let's just say I'm not a fan of using the GUI. Eventually I chose the *Docker Installation*.
>
> Import data in `.sql`? I use `mycli` to connect to the database then `cd` to where that `.sql` files are and execute `source FILE.sql` to the imports.

##### The *GUI* way

- Go to the official MySQL [download page](https://dev.mysql.com/downloads/mysql/)
- Choose whatever options that suits you along the way (~= up to you)
- Restart your dock by `killall Dock`
- Go to the *MySQL* at the bottom in *System Preferences* to set stuff up

##### The *Docker* way

> Suppose you already have Docker installed. For me, it's Docker in VM. To be more exact, it's Installing Docker inside a VM, which is managed by Vagrant, then I edit the relevant config file `Vagrantfile` in order to expose the ports which is already available inside the VM to the host <small>(port mapping: Docker -> VM -> Host)</small>.

```bash
# Local directories for volume mapping (persistence)
mkdir -p ~/Config/mysql80/mysql80_{conf,data}

# Easier identification for the container created
container_name="mysql80-dev"

# Initiation for MySQL
ms_host_conf="~/Config/mysql80/mysql80_conf"
ms_host_data="~/Config/mysql80/mysql80_data"
ms_host_port=3306
ms_pswd="password"


# Run at background and expose the export for host to connect
# AND mapping the directories inside to the host for persistence
# AND setting the password to prepare for us to connect
# AND choosing the mysql version explicitly which is 8.0.25
docker run --detach \
    --name=$container_name \
    --publish ${ms_host_port}:3306 \
    --volume=${ms_host_conf}/:/etc/mysql/conf.d \
    --volume=${ms_host_data}/:/var/lib/mysql \
    --env="MYSQL_ROOT_PASSWORD=${ms_pswd}" mysql:8.0.25

# Common commands you would use
docker container            # show all the relevant commands you could use
docker container ls         # list all the containers (whether started or not)
docker container start      # start the container
docker update mysql5dot7 --restart=always   # start MySQL when Docker starts
docker exec     mysql80-dev ls              # run `ls` in container
docker exec -it mysql80-dev bash            # run `bash` into the container


# And maybe you want to fetch the information of the MySQL container
docker inspect $image_name | jq -C | less
docker inspect $image_name | jq -C '.[0].Created'                   | less
docker inspect $image_name | jq -C '.[0].State.Status'              | less
docker inspect $image_name | jq -C '.[0].Config.Env'                | less
docker inspect $image_name | jq -C '.[0].Config.Env[]'              | less
docker inspect $image_name | jq -C '.[0].Config.Env[1]'             | less
docker inspect $image_name | jq -C '.[0].NetworkSettings.IPAddress' | less
```

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
    -- Administrator-level privilege with all tools available
    CREATE USER 'joe'@'localhost' IDENTIFIED BY 'jeopassword';
    GRANT ALL PRIVILEDGES ON *.* TO 'joe'@'localhost';

    -- The `testdb` was created by the user 'root' (or whoever else)
    -- Granting privileges with limited scope (only tables under `testdb`)
    CREATE USER 'testuser'@'localhost' IDENTIFIED BY 'testpasswd';
    GRANT ALL ON testdb.* TO 'testuser'@'localhost';

    -- Kinda like reloading the config to make it work
    FLUSH PRIVILEGES;
    ```

2. Connect

    ```bash
    # Available to you by default
    mysql --user testuser --password testdb

    # CLI with syntax highlighting and ushc (installation needed)
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

### Concept

#### ELI5 of *connect FROM host TO the server lives in Docker*

> This note was written at the time I'm having trouble understanding *Docker* and the relationship between *MySQL Server* and *MySQL Client*

##### conceptual reasoning

1. the only core thing you need is a mysql-server
2. anything else is "trying to connect to the server"
   - it can be mysql-client (provided by MySQL)
   - it can be a Python driver, or a JDBC(Java) driver
   - it can be a GUI DBMS like DBeaver or DataGrip (they dl drives for you)
3. connecting to the MySQL lives in the docker
   - it's actually not much different from the real world
   - previously it's localhost (server and client lives together)
   - now it's DOCKER_IMAGE_IP:EXPOSED_PORT (just like the real world)
4. persistent storage (data isn't lost after the image was deleted)
   - what we want mostly is the (custom) config (for our purpose) and the data
   - both could be achieved by creating volumes (real-world:virtual-world)
   - think of it like the 'Shared Folder' in VMs (but for more specific goals)
   - by creating vols, you expose specific folders to the outside (persistent)

-----

### References

- [SQL语法基础](https://pdai.tech/md/db/sql-lan/sql-lan.html)
- [Create new user in MySQL and give it full access to one database](https://stackoverflow.com/a/36190905/6273859)
- [MySQL :: Character Sets and Collations in General](https://dev.mysql.com/doc/refman/8.0/en/charset-general.html#:~:text=A%20character%20set%20is%20a,%2C%20B%20%2C%20a%20%2C%20b%20.)
