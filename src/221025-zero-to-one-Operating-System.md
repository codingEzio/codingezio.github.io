<!-- toc -->
> Understanding the Underlying Mechanism

## Foreword

> Currently this post serves as materials for interview prep, eventually it would be turned into a post digs even more deep and explores more topics.

### Why

> 复习这些非常必要的底层知识。设想一个连底层知识都不了解的人，如何写出高质且稳定的程序？
>
> 多数人都陷进了抽象的深坑！当然，我也明白要其易懂要耗费极大精力

### Where

#### Overview

- [操作系统 OS面试题八股文](https://tobebetterjavaer.com/sidebar/sanfene/os.html)
- [操作系统核心知识点大梳理](https://tobebetterjavaer.com/cs/os.html)
- [操作系统常见面试题总结](https://javaguide.cn/cs-basics/operating-system/operating-system-basic-questions-01.html)
- 以及众多其他网站，如 [*Reddit*](http://reddit.com/), [*StackOverflow*](http://stackoverflow.com/), [*IBM*](https://www.ibm.com/docs/en/rhapsody/9.0.0?topic=reference-frameworks-operating-systems) 等等

### How

1. 阅读他人总结好的
2. 察 技术来源及替代品、代码实现、ELI5解释
3. 作 绘制流程、于10字简述(😈)

## Content

> 祖参考资源: [操作系统 必看](https://tobebetterjavaer.com/sidebar/sanfene/os.html)
>
> 参考资料中的 `#` 字数序 确有意义，若有兴趣可按顺序读下来

### 内核与用户

#### Difference between them

- Operating mode for each is Ring 0 and Ring 3
- Operations like File Handling, Network Request all needs to operate under kernel mode
- There were each of its space in the memory
- The kernel has access to all the memory, the user does not

#### Procedure for switching

> [What are interrupts? What do I need them for? When do I need them?](https://old.reddit.com/r/arduino/comments/416cs0/eli5_what_are_interrupts_what_do_i_need_them_for/)

- Normal execution under Ring 3
- .. needs system call
- Interrupt .. to do system call
- Interrupt.. I’ve finished system call
- Normal execution under Ring 3

### 多任务

> 并发 Concurrency 单时单务 迅速切换 <br/>
> 并行 Parallelism 不同核处理不同程序

##### 线进 切换

> 线程~=进程 in this context, though 线需换非共享物

1. 处理 进程 1
2. 保存 进程 1 上下文
3. 加载 进程 2 上下文
4. 处理 进程 2
5. …

##### 线进 异同

> References: [\#1](https://stackoverflow.com/a/5201879/6273859), [\#2](https://old.reddit.com/r/explainlikeimfive/comments/1awbdz/eli5_registers_and_instructions_in_assembly/), [\#3](https://stackoverflow.com/a/200543/6273859), [\#4](https://stackoverflow.com/a/1808710/6273859), [\#5](https://www.hanselman.com/blog/microsoft-ie8-and-google-chrome-processes-are-the-new-threads)

- 均非实物 而是代码数据处理的抽象
- 线程 于进程 享码数内件 分栈寄器等
- 线程 并发 Concurrency 基石 (多线程
- 系统 告线程何时运 分进程资源(内,文)
- 线程 启动销毁成本较进程~小 因隔离

#### 进程

##### Process State 进程状态

- 创建 (new
- 死亡 (exit
- 占用 CPU (running
- 待占用 CPU (ready
- 等待外界因素 (blocked

##### Orphan and Zombie 孤儿进程与僵尸进程

> References: [\#1](https://stackoverflow.com/a/42303528)

- 👶 Still execute on its own (cpu/mm
- 🧟‍♀️ No execution, occupy entry (!cpu/mm

##### Process Scheduling 进程调度

- 先来先服 适短 不适长 不适重I/O
- 短作优先
- 预先分配优先级 后期可调
- 时间片 按先后排 单务单片 存断切置尾
- 短剩余处时为先 当有新与现余时对比

##### Process Communication 进程间通信

> References: [\#1](https://www.ibm.com/docs/en/rhapsody/9.0.0?topic=frameworks-message-queues), [\#2](https://stackoverflow.com/a/346678/6273859), [\#3](https://stackoverflow.com/a/2332868/6273859), [\#4](https://stackoverflow.com/a/20113248/6273859), [\#5](https://old.reddit.com/r/explainlikeimfive/comments/2kwcn9/eli5_function_of_a_networking_socket/), [\#6](https://opensource.com/article/19/4/interprocess-communication-linux-networking)

- Pipe 重定向IO 匿名单亲缘 有名任两程
- Signal 发信号 系统接 找程 通其处理
- MsgQueue 程事件 系统接 另程取之列
- SharedMem 共实体内存通信 易冲突
- Semaphore 告程限资访 厕匙进减出增
- Socket 两物发连-类文件存读 多网络流

#### 线程

##### 类别

> References: [\#1](https://stackoverflow.com/a/15984127/6273859), [\#2](http://www.it.uu.se/education/course/homepage/os/vt18/module-4/implementing-threads/), [\#3](https://en.wikipedia.org/wiki/Green_thread), [\#4](https://stackoverflow.com/a/5713198/6273859), [\#5](https://stackoverflow.com/q/72313714/6273859)

- 所有线程 以内核线程为始
- 两者区别 谁管理(OS or Language)
- 内核线程 又名 Native/OS-level线程
- 内核线程 处理只涉及系统级的代码
- 用户线程 处理用户级,亦能作系调用
- Grn线程 可看作语规的User Thread
- Grn线程 语言作规 类户线 多核不利

##### 线程共享区的资源同步

> References: [\#1](https://www.ibm.com/docs/en/i/7.2?topic=techniques-synchronization-among-threads), [\#2](https://stackoverflow.com/a/346678/6273859)

- 临界区 = 对共享资源访问的代码
- 以锁 互斥 对将访享资码锁 完解
- 以信号量 限资被访次 用减完规

##### Deadlock 死锁

> References: [\#1](https://www.youtube.com/watch?v=Z7iHodl1jsM), [\#2](https://www.scaler.com/topics/operating-system/deadlock-prevention-in-operating-system/) || <small>(ref for ref)</small> [\#3](https://old.reddit.com/r/explainlikeimfive/comments/1nq4a6/eli5the_dining_philosophers_problem/)
>
> <img src="/202210/20221025-operating-system-deadlock.jpeg" alt="Illustration of Deadlock" width="370px" height="auto" />

- 条件
  - 此资只可被此线程用 Mutual Excl
  - 主体持有 且申等新资 Hold&Wait
  - 资源不可被抢 仅等 No Preemption
  - P1 P2 等待为永久循环 Circular Wait
- 避免
  - 线程 提前申请所需所有资源 (不HdWt)
  - 若申不到新 主释当前资 再申新
  - 于申请划定优先级 愈高先得

##### Starvation & Livelock 活锁与饥饿锁

> References: [\#1](https://stackoverflow.com/a/6411905/6273859), [\#2](https://stackoverflow.com/a/6155978/6273859), [\#3](https://stackoverflow.com/a/1162610/6273859)

- 活锁：两者为防死锁作同 左右 无进
- 饥饿锁：多个高优先级程占 得无资

### 内存

#### 页表缓存 / 快表 / TLB / 转址旁路缓存

> References: [\#1](https://ithelp.ithome.com.tw/articles/10269930), [\#2](https://old.reddit.com/r/explainlikeimfive/comments/1214gs/eli5_translation_lookaside_buffer_and_general/)

- 于CPU硬件中的 buffer
- 为 访问内存提速 VMA>PMA
- 为 最常访问的页表
- VA到 转TLB查PA 无遍表 表无错

#### 虚拟内存 基础

> References: [\#1](https://stackoverflow.com/a/70551110/6273859)

- 每个进程有各自虚拟地址空间 (VMA)
- 系统 划分物内存为页 不足swap转硬盘
- 系统 维护页表 含虚拟地址<>物理地址
- 系统 划分多级页表省内 重为一 其他存

#### 虚拟内存 页面置换策略 (物理内存不够时

> References: [\#1](https://tobebetterjavaer.com/sidebar/sanfene/os.html#%E9%A1%B5%E9%9D%A2%E7%BD%AE%E6%8D%A2%E7%AE%97%E6%B3%95%E6%9C%89%E5%93%AA%E4%BA%9B)

### 文件系统

#### 软链接 与 硬链接

> References: [\#1](https://askubuntu.com/a/801191/1650652), [\#2](https://unix.stackexchange.com/a/23251/549763)

- 一切文录都有自己的 inode 编号
- 指向 普文件 -> inode
- 指向 硬链接 -> inode
- 指向 软链接 -> 文件 -> inode
- 改映 两者均可 硬链复多份 允删
- 区别 软链可文录跨盘 硬文不跨

#### I/O 零拷贝 (ZeroCopy)

> References: [\#1](https://old.reddit.com/r/learnprogramming/comments/3t1znc/eli5_why_mmap_is_faster_than_read/), [\#2](https://old.reddit.com/r/programming/comments/je3av8/why_mmap_is_faster_than_system_calls/), [\#3](https://stocktonsols.com/article/sendfile-system-call) || <small>(后列皆未采)</small> [\#4](https://blog.devgenius.io/linux-zero-copy-d61d712813fe)

- 提高性能 需减异态切和内存拷贝次
- MmAp 文于内存 将其内址映至进程 少写
- `sendfile()` 或同写读 或不切然系内直写

#### I/O 同步-阻塞/非阻塞/多路复用 异步

> References: [\#1](https://www.cs.toronto.edu/~krueger/csc209h/f05/lectures/Week11-Select.pdf)

- `read` 线阻 待内核调读 待拷回 返容
- `read` 立返 继执它务 频询内核 然拷
- `read` 立返 继执它务 内核通程 然拷
- `aio_read` 立返 继执它务 内核作拷

#### I/O 多路复用 Multiplexing

> References: [\#1](https://stackoverflow.com/a/40864759/6273859), [\#2](https://wiyi.org/linux-file-descriptor.html), [\#3](https://jvns.ca/blog/2017/06/03/async-io-on-linux--select--poll--and-epoll/) <small>(ref for ref)</small> [\#4](https://stackoverflow.com/questions/5256599/what-are-file-descriptors-explained-in-simple-terms)

- 基础 复用即分单线专处理
- 基础 原 CPU询 有新处新
- 基础 现 予三系call察态 机略别
- 基础 fd文述符 单态 表详态 源inod
- 三调 select 核拷众fd 察标返 且忘
- 三调 poll 数构链突fd限 余同select
- 三调 epoll fd态 如变可读信通 (优)
