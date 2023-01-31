<!-- toc -->
> Issue : Fetching Docker Images are Extremly Slow

### Context

- Fetching images is extremly slow
- Fail sometimes when fetching like `failed to read expected number of bytes: unexpected EOF`

### Solution via *Config*

1. Docker (GUI) -> Settings -> *Resources*
2. Then <small>(the `7890` port part depends on the app you're using)</small>

    ```bash
    # Proxies (with 'Manual proxy configuration' checked)
    #   Web Server (HTTP)          -> http://127.0.0.1:7890
    #   Secure Web Server (HTTPS)  -> http://127.0.0.1:7890
    #   Bypass proxy .. domains .. -> localhost,127.0.0.1
    ```

### Solution using *Mirror*

> Abandoned

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
