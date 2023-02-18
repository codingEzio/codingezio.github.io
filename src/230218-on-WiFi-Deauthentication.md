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

### Defend

- [Weathering a Deauth Storm with Wireshark](https://web.archive.org/web/20230218105601/https://connectedconcepts.wordpress.com/2017/11/02/weathering-a-deauth-storm-with-wireshark/) by [Packet Wrangling](https://connectedconcepts.wordpress.com/about-me/)

-----

## Good to Have

> I don't yet know how they work but still wanna keep an eye on

- [cyrus-and/zizzania](https://github.com/cyrus-and/zizzania): *Automated DeAuth attack*
