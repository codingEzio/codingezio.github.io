```mermaid
sequenceDiagram
    participant ddl as "CREATE TABLE Query"
    participant server as "MySQL Server"
    participant parser as "SQL Parser"
    participant ast as "Abstract Syntax Tree"
    participant cmd as "SQL Command"
    participant ci as "HA_CREATE_INFO"
    participant plugin as "MySQL plugin"

    ddl ->> server: DDL QUERY TEXT
    server ->> parser: THD::sql_parser()
    Note over parser: Bison parser
    Note over parser: Build SQL command
    parser ->> ast: make_cmd()
    ast ->> ast: contextualize()
    ast ->> ci: build()
    activate ci
    ci ->> plugin: ha_resolve_engine()
    plugin -->> ci: storage engine handlerton
    ci -->> ast: Parse Tree (contextualized)
    ast ->> cmd: build()
    activate cmd
    cmd -->> server: SQL Command
```