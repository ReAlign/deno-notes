---
title: 安装
lang: zh-CN
meta:
  - name: deno 安装教程
    content: 关于安装，[Deno官网](https://deno.land/) 已经说得很详细了。踩坑之谈 使官网上的方式，可能会遇到一些问题：
  - name: keywords
    content: deno deno-notes notes install
tags:
  - deno
date: 2020-05-09
author: ReAlign
location: hangzhou
summary: 关于安装，[Deno官网](https://deno.land/) 已经说得很详细了。踩坑之谈 使官网上的方式，可能会遇到一些问题：
---

## 如何安装

关于安装，[Deno官网](https://deno.land/) 已经说得很详细了。

## 踩坑之谈

使官网上的方式，可能会遇到一些问题：

### 1. Command not found

```bash
zsh: command not found: deno
```

需要注意的是，使用官网上说的 `Using Shell`，可能会出现找不到 `deno` 命令的情况，这种一般是没有设置环境变量，所以，建议直接使用 [deno_install#environment-variables](https://github.com/denoland/deno_install#environment-variables) 来避免这个问题。

## 验证

安装完成，可在命令行输入 `deno --version` 来验证是否成功安装：

```bash
deno --version
```

```bash
deno 1.0.0-rc1
v8 8.2.308
typescript 3.8.3
```

以上就是如何安装 `deno`。

***

<Vssue :title="$title" />
