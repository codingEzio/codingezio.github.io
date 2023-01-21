+++
title = "On Startup Apps"
description = "Let apps automatically open when boot up"
+++

> Automatically open apps when boot up :) I'm not talking about the terminology [*Startup* company](https://en.wikipedia.org/wiki/Startup_company)

## macOS

> By GUI (macOS Monterey 12.6.2)

1. Open *System Preferences*
2. Open *Users & Groups*
3. Click *Login Items*
4. Add relevant apps to the list

## Windows

> By moving shortcuts [<small>(How to Access the Windows 10 Startup Folder)</small>](https://web.archive.org/web/20200820140228/https://helpdeskgeek.com/windows-10/how-to-access-the-windows-10-startup-folder/)

1. Find the folder

  ```bash
  # ALl Users versus Current User

  # CMD + R
  Shell:common startup
  Shell:startup

  # Path for reference
  C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp
  C:\Users\USER_NAME\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup
  ```

2. Copy the shortcut of your application into the folder just opened
