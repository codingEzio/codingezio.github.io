<!-- toc -->

## Context

| KEY | VALUE |
| :--- | :--- |
| Why | For fun |
| OS | *macOS Monterey* <small>(12.6.2)</small> |

## Preparation

```bash
# https://discussions.apple.com/thread/8522195
ln -s \
    /System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport \
    /usr/local/bin/airport

brew install bettercap
```

## In Practice

### Attack

- [Wi-Fi Deauthentification on macOS](https://web.archive.org/web/20230218105555/https://gainanov.pro/eng-blog/sysad/wifi-deauth-attack/) by [GAINANOV.PRO](https://gainanov.pro/eng-blog/about/)
- [WPA Wi-Fi Cracking on a MacBook Pro](https://web.archive.org/web/20221126090053/https://louisabraham.github.io/articles/WPA-wifi-cracking-MBP.html) by [Louis Abraham](https://louisabraham.github.io/)

### Defend

- [Weathering a Deauth Storm with Wireshark](https://web.archive.org/web/20230218105601/https://connectedconcepts.wordpress.com/2017/11/02/weathering-a-deauth-storm-with-wireshark/) by [Packet Wrangling](https://connectedconcepts.wordpress.com/about-me/)

-----

## Tooling

- `bettercap` [wiki](https://www.bettercap.org/intro/)
- [0x0XDev/JamWiFi](https://github.com/0x0XDev/JamWiFi/releases): *A GUI Wi-Fi Network Jammer for macOS* <sup>[source](https://github.com/0x0XDev/JamWiFi)</sup>

-----

## Good to Have

> I don't yet know how they work but still wanna keep an eye on

- [cyrus-and/zizzania](https://github.com/cyrus-and/zizzania): *Automated DeAuth attack*
- [veerendra2/wifi-deauth-attack](https://github.com/veerendra2/wifi-deauth-attack): *An Automated Script for De-authentication Attack*
