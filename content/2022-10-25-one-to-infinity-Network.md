+++
title = "One to Infinity - Network"
description = "On Network in Computer Science"
+++

## Foreword

### Why

> 知其本，易解惑

### What

- [计算机网络 面试题八股文](https://tobebetterjavaer.com/sidebar/sanfene/network.html)
- [计算机网络核心知识点](https://tobebetterjavaer.com/cs/wangluo.html)
- [计算机网络常见面试题总结](https://javaguide.cn/cs-basics/network/other-network-questions.html)
- 以及众多其他网站，如 [*Reddit*](http://reddit.com/), [*StackOverflow*](http://stackoverflow.com/) 等等

### How

1. 阅读他人总结好的
2. 察 技术来源及替代品、代码实现、ELI5解释
3. 作 绘制流程、于10字简述(😈)

## Content

> 祖参考资源: [计算机网络 必看](https://tobebetterjavaer.com/sidebar/sanfene/network.html)

-----

### 抽象与实现 Model and Implementation

> References [\#1](https://stackoverflow.com/a/9329173/6273859), [\#2](https://stackoverflow.com/a/49233604/6273859), [\#3](https://networkengineering.stackexchange.com/a/68467/86378), [\#4](https://networkengineering.stackexchange.com/a/67557/86378), [\#5](https://serverfault.com/a/10248/978709), [\#6](http://www.geeknxt.com/network-layers/), [\#7](https://en.wikipedia.org/wiki/Fiber_Distributed_Data_Interface) || <small>(后列皆未采)</small> [\#8](https://security.stackexchange.com/a/258825), [\#9](https://networkengineering.stackexchange.com/a/76220/86378), [\#10](https://stackoverflow.com/a/32294152/6273859), [\#11](https://www.ibm.com/docs/en/zos-basic-skills?topic=layer-address-resolution-protocol-arp), [\#12](https://learningnetwork.cisco.com/s/article/osi-model-reference-chart)

- TCP/IP 层分{络接-网际-传输-应用}
- TCP/IP 较OSI折中, 其纯理论且晚
- TCP/IP 究根亦模型抽象, 异系异码
- 层流OT 线比>据式>封包>传协>高协选
- 层流OT 比特-帧-包-段 => 数据
- 层介O 线-信号-发式找-传-网链-剧设网-设网
- 层介O 线-找-导包-丢否-网件-件易网传-连硬网
- 层协O 线-光纤-IP-TCP-Skt-FTP-HTTP

### 趣事之浏览器访谷歌 When You Visit Google

> References: [\#1](https://github.com/alex/what-happens-when) || 略去了硬件部分

- 分地址为协议和资源链URI
- 搜或访 + 转为Unicode + 是否纯HTTPS
- 解映射, 缓存-hosts-ISP之DNS-所定DNS
- 转硬址为IP, 自ARP表播寻, HbRtSw协找
- 建链于服客Skt, 定容传协-丢否受度与安全
- 服客HTTP之意图CRUD信
- 览器之解析三剑HCJ-建构画容,软硬皆参画

### 域名解析 DNS

找缓, 找本地, 找已定, 访根域-筛顶域

### Socket 与 WebSocket

> References: [\#1](https://stackoverflow.com/a/67826460/6273859), [\#2](https://stackoverflow.com/a/7600789/6273859)

Socket 建链于设备传物
WebSocket 似且基TCP/UDP, 定传式-丢-安全

### 状态码含义 HTTP Status Code

> References: [\#1](https://stackoverflow.com/a/59108772/6273859), [\#2](https://www.websitepulse.com/kb/4xx_http_status_codes), [\#3](https://developer.att.com/video-optimizer/docs/best-practices/5xx-internal-server-error-best-practices), [\#4](https://umbraco.com/knowledge-base/http-status-codes/#202-accepted)

- `1XX`: 纯信息
- `2XX`: 请求成功待处
- `3XX`: 资变重定
- `4XX`: 客求不能满
- `5XX`: 服端软硬不胜任

### GET 与 POST

> References: [\#1](https://stackoverflow.com/a/626083/6273859), [\#2](https://stackoverflow.com/a/626101/6273859)

- GET 置求于限长址, 多求同果-因此可被缓存
- POST 以body发求, 多求果不定-可缓但无义

### 端服请求 HTTP Request

- URL -> 传协+DNS找址建链 -> 定端求式-返本处理
- 传输建链, TCP
- 客端发请求
- 服端返响应
- 传输断链, TCP收尾

### 请求头部 HTTP Header

> References: [\#1](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages#headers), [\#2](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)

- 请求行 Method + Protocol
- 详请求 何处-何式-缓否-压缩等
- 求返共 如 `Connection: keep-alive`
- 实体容 即 Body 待渲染的内容

-----

> References: [\#](\), [\#](\), [\#](\)
