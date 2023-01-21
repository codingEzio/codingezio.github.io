+++
title = "Toolset - adb"
description = "adb usage"
+++

> adb: Android Debug Bridge

### Tooling

- `adb`: `brew install android-platform-tools`
- `adb-sync`: [SelfAdjointOperator/better-adb-sync](https://github.com/SelfAdjointOperator/better-adb-sync)

### [Connect](https://web.archive.org/web/20230121052050/https://adbshell.com/commands/adb-connect)

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

### [Install `.apk`](https://stackoverflow.com/a/7076679/6273859)

```
adb install INPUT.apk
```

### Backup

> Haven't tested it since I normally only need the media files inside <small>([How to fully backup and restore your Android device without root](https://9to5google.com/2017/11/04/how-to-backup-restore-android-device-data-android-basics/))</small>

```bash
adb backup -apk -shared -all -f HOST_PATH/BACKUP_FILENAME.ab
adb restore HOST_PATH/BACKUP_FILENAME.ab
```

-----

> For more complete solution on backup, see [*无惧「翻车」与换机，这些 Android 数据备份方案值得了解*](https://sspai.com/post/54075)
