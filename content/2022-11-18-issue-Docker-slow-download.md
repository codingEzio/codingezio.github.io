+++
title = "Issue : Fetching Docker Images are Extremly Slow"
description = "Resolve the Docker network issue"
+++

### Context

- Docker (GUI) -> Settings -> *Resources*

    ```bash
    #  -> Proxies
    #   -> Manual proxy configuration
    #   -> Web Server (HTTP) -> http://127.0.0.1:7890
    ```

### Solution

1. Uncheck the *Manual proxy configuration*
2. Add this to *Docker Engine*

    > Thanks to [Docker — 从入门到实践](https://yeasy.gitbook.io/docker_practice/install/mirror#macos)

    ```json
    {
        ..

        "registry-mirrors": [
            "https://hub-mirror.c.163.com",
            "https://mirror.baidubce.com"
        ]
    }
    ```

3. Check the configuration

    ```bash
    docker info | grep -i "mirror"
    ```
