<!-- toc -->
+++
title = "Issue : Spring with MapStruct Failed to Build"
description = "Issues when using MapStruct with Spring in IDEA"
+++

### Rationale

> Upgrading the versions of the dependencies should always be the last resort. Is it because *if it's working, don't modify it*? No.. but actually yes.

#### Text

1. Open *Preferences*
2. Find *Build, Execution, Deployment*
3. Find *Compilers*
4. Add [this](https://stackoverflow.com/a/65113549/6273859) to *User-local build process VM options (overrides Shared options)*

  ```bash
  -Djps.track.ap.dependencies=false
  ```

#### Photo

> <img src="/202212/20221202-spring-mapstruct-idea-failed-to-build.png" alt="An illustration that shows where to tweak the IDE settings for MapStruct to work properly with IDEA for the projects to build properly" width="80%" height="auto" />
