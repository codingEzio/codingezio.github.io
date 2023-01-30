+++
title = "Issue : Unable to Downgrade Flutter Properly"
description = "As of November 2022, it's really hard to downgrade from 3 to 2"
+++


> Of course, this essay assumes you already have a Flutter 3 installed on your machine

### Steps

> Reference to [Downgrade Flutter 3.0 to 2.10](https://www.youtube.com/watch?v=icY9x4qsFeY)

```bash
# The printed result were all based on my own machine (not universal!)


ls -Al $(which flutter)
# /usr/local/bin/flutter -> /usr/local/Caskroom/flutter/3.0.1/flutter/bin/flutter

cd /usr/local/Caskroom/flutter/3.0.1/flutter/

# Latest Flutter 2
# https://github.com/flutter/flutter/releases/tag/2.10.5

git checkout 2.10.5

# Rebuild

flutter doctor
flutter --version
```
