<!-- toc -->

### Why

- No `brew`, because it only downloads and installs. It does *NOT* managing different vers

### SDKMan

> Still exploring!

1. Get

    ```bash
    curl -s "https://get.sdkman.io" | bash
    ```

2. Run

    ```bash
    # Check what JDK version are available
    sdk list java

    # install APP VER_IDENTIFIER
    sdk install java 19-amzn &&
    sdk install java 17.0.4-amzn &&
    sdk install java 11.0.16-amzn &&
    sdk install java 8.0.342-amzn


    # Permanent default
    sdk default java 11.0.16-amzn

    # Available in this shell
    sdk use java 11.0.16-amzn
    ```
