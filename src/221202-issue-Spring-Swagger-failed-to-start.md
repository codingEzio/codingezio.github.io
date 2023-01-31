> Issue : Spring Swagger Failed to Start
<!-- toc -->

### Step

> The core issue is that [*spring is using mvcmatchers by default which conflicts with swagger because it uses the antmatchers*](https://stackoverflow.com/a/70951174/6273859). For migration purposes, read [this](https://stackoverflow.com/a/70799519/6273859) for more details

1. Add this to your `application.properties` (or `applicaiton.yml`)

    ```ini
    spring.mvc.pathmatch.matching-strategy=ANT_PATH_MATCHER
    ```
