+++
title = "One to Infinity - Network"
description = "On Network in Computer Science"
+++

## Foreword

### Why

> 知其本，惑消烬

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

> References [\#1](https://stackoverflow.com/a/9329173/6273859), [\#2](https://stackoverflow.com/a/49233604/6273859), [\#3](https://networkengineering.stackexchange.com/a/68467/86378), [\#4](https://networkengineering.stackexchange.com/a/67557/86378), [\#5](https://serverfault.com/a/10248/978709), [\#6](http://www.geeknxt.com/network-layers/), [\#7](https://en.wikipedia.org/wiki/Fiber_Distributed_Data_Interface) || <small>(ref for ref)</small> [\#8](https://security.stackexchange.com/a/258825), [\#9](https://networkengineering.stackexchange.com/a/76220/86378), [\#10](https://stackoverflow.com/a/32294152/6273859), [\#11](https://www.ibm.com/docs/en/zos-basic-skills?topic=layer-address-resolution-protocol-arp), [\#12](https://learningnetwork.cisco.com/s/article/osi-model-reference-chart)

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

### 超文传输之史 History of HTTP

> References: [\#1](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP), [\#2](https://stackoverflow.com/a/247026/6273859), [\#3](https://en.wikipedia.org/wiki/HTTP_pipelining), [\#4](https://blog.cloudflare.com/the-road-to-quic/), [\#5](https://www.fastly.com/blog/quic-handshake-tls-compression-certificates-extension-study), [\#6](https://old.reddit.com/r/explainlikeimfive/comments/q8n40j/eli5_why_is_http3_using_udp_is_more_reliable_than/hgqcrp4/)

- HTTP 0.9: `GET /page.html` 无HTTP头, 自ML报误
- HTTP 1.0: 可加头部, 返态码, 修头传ML之外文件
- HTTP 1.1: 可重用链, 定传物式, 客直发多求不待返, 缓制, 须加 `Host`
- HTTP 2.0: 可服主推, 二制头且压缩, 端服多求返同步进
- HTTP 3.0
  - MAC+IP, UDP-QUIC+HTTP (Q-以往TLS或无)
  - 多信单握密身验, 有制保塞输可依; TCP袱重于始设

### 长短连接 TCP Polling vs Long Polling

> References: [\#1](https://stackoverflow.com/a/28197906/6273859), [\#2](https://stackoverflow.com/a/18099987/6273859), [\#3](https://codeburst.io/polling-vs-sse-vs-websocket-how-to-choose-the-right-one-1859e4e13bd9)

- 论机制 短:频询无容返空, 长:亦询但服可待事主动通客户
- 论头置 HTTP1.1后默皆长, 可配询隔持时等
- 论相关 服主推有 WebSockets 与 Server-Sent Events

### 传协可靠大PK TCP vs UDP

> References: [\#1](https://stackoverflow.com/a/5978352/6273859), [\#2](https://stackoverflow.com/a/11944994/6273859), [\#3](https://www.scaler.com/topics/computer-network/tcp-flow-control/), [\#4](https://testbook.com/question-answer/generally-tcp-is-reliable-and-udp-is-not-reliable--5aa3d539249fec39f1b75fa0), [\#5](https://networkengineering.stackexchange.com/a/60099/86378), [\#6](https://networkengineering.stackexchange.com/a/39904/86378) || <small>(ref for ref)</small> [\#](https://stackoverflow.com/a/26902428/6273859)

- 论建链 TCP通三握确连再传 UDP封包无连直开传
- 论机制 TCP除握-配机制避塞保吞吐匹配等, UDP无
- 扩论之 TCP本身含机保可靠, UDP可应用层实现补保之
- 论实活 妥协之如确保信达与速, 求不同保选它如QUIC

### 互联网控制消息协议 Internet Control Message Protocol <small>(I*CM*P)</small>

> References: [\#1](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol), [\#2](https://old.reddit.com/r/explainlikeimfive/comments/29mp4y/eli5_what_is_ping/), [\#3](https://en.wikipedia.org/wiki/Address_Resolution_Protocol#Inverse_ARP_and_Reverse_ARP) || <small>(ref for ref)</small> [\#4](https://old.reddit.com/r/explainlikeimfive/comments/jgnhn/eli5_the_fuck_is_ping_thanks/)

- 其介 信息格式-硬件设备由其发送失成信息
- 其用 邮块据至另IP设-时否回 via Packet Internet Groper <small>(P*IN*G)</small>
- 用程
  1. 发送者 `ping` 告系建ICMP包(参为标IP) -> ICMP协打包之-并转于网络层IP协
  2. 发送者 网络层 *IP* 协 构自己IP包-本址-标址
  3. 发送者 网络层 *ARP* 相关协 获取到目标的网卡物理地址 *MAC*
  4. 发送者 `ping` 由-构建的ICMP包-和-由ARP得出物理地址的IP包-作功 即发包
  5. 接收者 网络层 *ARP* 相关协 收IP包-先看是否是给自己的-是返回-不是丢弃
  6. 接收者 回发了 无特殊意义的*ICMP*包 (理解为:发POST的JSON, 回普通JSON)
  7. 发送者 得到了 接收者返回的包 由其中附带信息-计算得出-多久到-多久回-即往返

### 跨站脚本攻击 Cross-Site Scripting <small>(*X*SS)</small>

> References: [\#1](https://old.reddit.com/r/explainlikeimfive/comments/1mpyeb/eli5_xss_cross_site_scripting_attacks_what_makes/), [\#2](https://stackoverflow.com/a/15940275/6273859), [\#3](https://brightsec.com/blog/xss-attack#ebay), [\#4](https://www.netgate.com/blog/xss-get-and-post) || <small>(ref for ref)</small> [\#5](https://security.stackexchange.com/a/175687),

- 逻辑: 污染输入框提交内容, 原仅提交, 污后附任意恶码盗或更严果
- 隐辑: 污码 were executed while you're authenticated!
- 实辑: 攻者码由 `GET` 作参附带, 若避免须验输容并或切 `POST`
- 实例: 小至作之 `alert()` 弹窗, 大可大至 *恶码传你密-吾可登*

### 跨站请求伪造 Cross-Site Request Forgery

> References: [\#1](https://stackoverflow.com/a/48535903/6273859), [\#2](https://stackoverflow.com/a/33829607/6273859)

- 论流程 登站如银行-保态技不限, 另站伪任恶意请求-你访即运行之
- 论御防 服你cookie生成相应唯一码-你发求时附之, 他运无份可验
- 论御语 应该为 *Anti*-CSRF Token (~= 反伪造跨站请求令牌)
- 论脑洞 你拿刀防卫预刺向, 攻击者在己肚开启传门, 传门另端通向你肚

### 分布式拒绝服务 Distributed Denial of Service <small>(*D*DoS)</small>

> References: [\#1](https://web.archive.org/web/20221123111908/https://www.huaweicloud.com/zhishi/dyl90.html), [\#2](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/), [\#3](https://github.com/Leeon123/CC-attack) || <small>(ref for ref)</small> [\#4](https://old.reddit.com/r/explainlikeimfive/comments/63eetq/eli5_what_is_a_ddos_attack_and_why_would_anyon/), [\#5](https://github.com/thesc1entist/j0lt), [\#6](https://web.archive.org/web/20211204144051/https://help.aliyun.com/document_detail/28401.html)

- 知: 不同视角分类不同, 可从协议、攻击方式，亦可结合之探讨
- 合类应用层 如 *Challenge Collapsar* 协众合法入店不离, 耗尽服硬资
- 合类协漏洞 如 *SYN Flood* 叫人执务不完握手整程, Left Me Hanging
- 合类数量级 如 *DNS Amplification* 冒客身份求query-返巨容至受害者

### 对称与非对称加密 Symmetric and Asymmetric Encryption

> References: [\#1](https://old.reddit.com/r/explainlikeimfive/comments/1lyau9/eli5_differences_between_symmetric_and_public_key/cc40eq8/), [\#2](https://old.reddit.com/r/explainlikeimfive/comments/5ctx4o/eli5_symmetric_vs_asymmetric_encryption/), [\#3](https://stackoverflow.com/a/5479398/6273859), [\#4](https://old.reddit.com/r/explainlikeimfive/comments/3jg9q5/eli5aes_256_encryption/), [\#5](https://www.trentonsystems.com/blog/aes-encryption-your-faqs-answered), [\#6](https://old.reddit.com/r/explainlikeimfive/comments/4q9lb1/eli5_how_does_rsa_encryption_work/) || <small>(ref for ref)</small> [\#7](https://security.stackexchange.com/a/242499)

- 论机制 对称: 预定同钥护传之为加解; 非对称: 任钥加,收者由配私解
- 论用实 非对称较作更多计算, 两者协作平衡速度
- 论常协
  - AES: 定钥由随机函或它法-切件定块-由定钥对每块周循算, 解由逆运得
  - RSA: 定二素由之算定公私钥-由任钥定块计算加密, 解由另钥运得

### HTTPS 如何运作

> References: [\#1](https://stackoverflow.com/a/39183636/6273859), [\#2](https://stackoverflow.com/a/34735420/6273859), [\#3](https://stackoverflow.com/questions/6241991/how-exactly-https-ssl-works#:~:text=never%20transmitted), [\#4](https://www.rfc-editor.org/rfc/rfc2246#section-7.4) || <small>(ref for ref)</small> [\#5](https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/)

- 流程
  > 沟通的公私钥、加密数据的共有钥-客由证书产之
  1. 客访站-站返证书其含公钥-浏览器处返物
  2. 浏览器验证书-由本地已有证列-证为真否
  3. 含公钥的证书通过 由中公钥再生成密钥(为加密数据) 发至服务器
  4. 服务器 由头次沟通所产的己私钥 解之得加密据钥
  5. 服务器 返回数据-由客产钥
  6. 客户端 得到数据-由已产钥解密
  7. 现建安全通道 客产钥-客户发数据-加解密, 客产钥-服务器加密返据

- 感想
  > 我仍然可能是错的, 比如[这份研究](https://www.researchgate.net/figure/TLS-handshake-protocol_fig1_298065605)
  - 读 *RFC*, 读 *源码*，否则的技术理解不过关的以讹传讹很恐怖的
  - 如 *session_key* 在 HTTPS 中不会被传输, 但它在技术论坛中 *遍地开花*
  - 读 [7.4. Handshake protocol](https://www.rfc-editor.org/rfc/rfc2246#section-7.4) 不管是文字描述还是相关 `struct` 都没有 *session_key*

### Session 与 Cookie

> References: [\#](\), [\#](\), [\#](\), [\#](\) || <small>(ref for ref)</small> [\#](\), [\#](\),

- A
- A

### 域名解析 Domain Name System <small>(*D*NS)</small>

> References: [\#](\), [\#](\), [\#](\), [\#](\) || <small>(ref for ref)</small> [\#](\), [\#](\),

- A
- A

### TCP 握手 🤝🤝🤝

> References: [\#](\), [\#](\), [\#](\), [\#](\) || <small>(ref for ref)</small> [\#](\), [\#](\),

- A
- A

### TCP 挥手 🙋🙋🙋🙋

> References: [\#](\), [\#](\), [\#](\), [\#](\) || <small>(ref for ref)</small> [\#](\), [\#](\),

- A
- A

### TCP 可靠

> References: [\#](\), [\#](\), [\#](\), [\#](\) || <small>(ref for ref)</small> [\#](\), [\#](\),

- A
- A

-----

> References: [\#](\), [\#](\), [\#](\), [\#](\) || <small>(ref for ref)</small> [\#](\), [\#](\),
