---
title: 快速体验
lang: zh-CN
meta:
  - name: 快速体验 deno
    content: REPL 如果你使用过 `ruby`、`python`、`node` 等语言，一定对 `REPL` 很熟悉。什么是REPL
  - name: keywords
    content: deno deno-notes notes experience
tags:
  - deno
date: 2020-05-10
author: ReAlign
location: hangzhou
summary: REPL 如果你使用过 `ruby`、`python`、`node` 等语言，一定对 `REPL` 很熟悉。什么是REPL
---

## REPL

如果你使用过 `ruby`、`python`、`node` 等语言，一定对 `REPL` 很熟悉。

### 什么是REPL

REPL：Read-Eval-Print Loop，“读取-求值-输出” 循环，是一个简单的交互式的编程环境。

### 使用REPL

很简单，打开一个终端(terminal)，在终端中输入 `deno`，立即进入 `REPL`：

```bash
deno
> _
```

众所周知，学习一门新语言，开始编码的第一件事就是写一个“你好世界”：

```bash
> console.log('Hello world!')
Hello world!
undefined
```

好，恭喜你，你已经掌握了 `deno`！ :smirk:

咳咳，继续说 `REPL`，同样的，你可以像 `node` 一样进行运算：

```bash
> 1 + 2
3
```

## 执行文件

### 远程文件

就像官网上的例子一样，可以执行一个远程文件：

```bash
deno run https://deno.land/std/examples/welcome.ts
```

结果如下：

```bash
deno run https://deno.land/std/examples/welcome.ts
Download https://deno.land/std/examples/welcome.ts
Compile https://deno.land/std/examples/welcome.ts
Welcome to Deno 🦕
```

### 极速搭建server

> 为了方便，我已经将需要手写的代码写好放在远程，可以直接使用（你也可以自己在本地新建文件，然后执行）。

自定义文件内容如下：

```ts
import { serve } from "https://deno.land/std@v0.42.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
```

<!-- docs/.vuepress/public/files/simple-server.ts -->
自定义文件远程访问地址：[https://nos.realign.pro/deno-notes-files/simple-server.ts](https://nos.realign.pro/deno-notes-files/simple-server.ts)

然后执行：

```bash
deno run https://nos.realign.pro/deno-notes-files/simple-server.ts
```

额哦，很不幸，报错了：

```bash
error: Uncaught PermissionDenied: network access to "127.0.0.1:8000", run again with the --allow-net flag
    at unwrapResponse ($deno$/ops/dispatch_json.ts:43:11)
    at Object.sendSync ($deno$/ops/dispatch_json.ts:72:10)
    at Object.listen ($deno$/ops/net.ts:51:10)
    at listen ($deno$/net.ts:152:22)
    at serve (server.ts:261:20)
    at https://nos.realign.pro/deno-notes-files/simple-server.ts:2:11
```

提示说没有网络权限，需要加参数 `--allow-net`：

```bash
deno run --allow-net https://nos.realign.pro/deno-notes-files/simple-server.ts
```

ok，这次可以了，由于是第一次执行 net 相关的文件，所以会下载一系列相关的标准文件（std），然后，会输出：

```bash
deno run --allow-net https://nos.realign.pro/deno-notes-files/simple-server.ts
[some Download options]
http://localhost:8000/
```

就像文件名一样，在本地启动了一个简单的服务，访问本地 [8000 端口](http://localhost:8000/)，可以看到文本的输出：

![image/normal/2020-05-09/img-1588956696028-521.png](https://public-bucket-realign.nos-eastchina1.126.net/image/normal/2020-05-09/img-1588956696028-521.png)

以上就是快速体验 `deno` 的内容。

***

<Vssue :title="$title" />
