<!-- toc -->
+++
title = "Issue : node-sass failed to compile"
description = "Failed to run 'npm install' because of 'node-sass'"
+++

### Reference

- [Install nvm](https://github.com/nvm-sh/nvm#install--update-script)
- [NodeJS OSX error building node-sass](https://stackoverflow.com/questions/34203626/nodejs-osx-error-building-node-sass/37299602#37299602)

### Step

> The core issue is that it would not work properly with newer `node` versions

1. Install `nvm` (to manage different `node` versions)

    ```bash
    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

    # And these to the end of your shell config
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
    ```

2. Install older version of `node`

    ```bash
    nvm install 12
    ```

3. Re-run the `npm install` (or `yarn install`)
