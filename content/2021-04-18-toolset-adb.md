+++
title = "Toolset - adb"
description = "adb usage"
+++

> adb: Android Debug Bridge

### Tooling

- `adb`: `brew install android-platform-tools`
- `adb-sync`: [SelfAdjointOperator/better-adb-sync](https://github.com/SelfAdjointOperator/better-adb-sync)

### Connect

```bash
# Connect via USB cable
adb devices


# Connect via WiFi after connecting at least once via cable
adb tcp-ip 5555
adb connect ANDROID_PHONE_IP:5555
```

### Put Files into Android Phone

> Trivial syntax for whether copy the folder or just the files

```bash
adb push host1/       /sdcard/tmp/ # -> /../tmp/host1/
adb push host1/.      /sdcard/tmp/ # -> /../tmp/{all-files-under-host1}
adb push host1/a.txt  /sdcard/tmp/ # -> /../tmp/a.txt
```
