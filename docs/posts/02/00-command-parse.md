---
title: 命令解析
lang: zh-CN
meta:
  - name: deno 命令解析
    content: 。。。
  - name: keywords
    content: deno deno-notes notes command parse parse-command
tags:
  - deno
date: 2020-05-12 12:01:30
author: ReAlign
location: hangzhou
summary: 。。。
---

## 关于命令

和 `node` 以及大多数开发语言一样，一般都会有默认指令 `-h`/`--help`，来查看语言的相关命令：

```bash
deno -h
```

会输出下面一堆文字：

```bash
deno 1.0.0-rc1
A secure JavaScript and TypeScript runtime

Docs: https://deno.land/std/manual.md
Modules: https://deno.land/std/ https://deno.land/x/
Bugs: https://github.com/denoland/deno/issues

To start the REPL:
  deno

To execute a script:
  deno run https://deno.land/std/examples/welcome.ts

To evaluate code in the shell:
  deno eval "console.log(30933 + 404)"

USAGE:
    deno [OPTIONS] [SUBCOMMAND]

OPTIONS:
    -h, --help                     Prints help information
    -L, --log-level <log-level>    Set log level [possible values: debug, info]
    -q, --quiet                    Suppress diagnostic output
    -V, --version                  Prints version information

SUBCOMMANDS:
    bundle         Bundle module and dependencies into single file
    cache          Cache the dependencies
    completions    Generate shell completions
    doc            Show documentation for a module
    eval           Eval script
    fmt            Format source files
    help           Prints this message or the help of the given subcommand(s)
    info           Show info about cache or info related to source file
    install        Install script as an executable
    repl           Read Eval Print Loop
    run            Run a program given a filename or url to the module
    test           Run tests
    types          Print runtime TypeScript declarations
    upgrade        Upgrade deno executable to newest version

ENVIRONMENT VARIABLES:
    DENO_DIR             Set deno's base directory (defaults to $HOME/.deno)
    DENO_INSTALL_ROOT    Set deno install's output directory
                         (defaults to $HOME/.deno/bin)
    NO_COLOR             Set to disable color
    HTTP_PROXY           Proxy address for HTTP requests
                         (module downloads, fetch)
    HTTPS_PROXY          Same but for HTTPS
```

* `line#17` 之前，都是对 `deno` 的介绍
* `line#17-18` 是如何在终端中使用 `deno`
  * 其中，`OPTIONS` `SUBCOMMAND` 都不是必须的
* `OPTIONS` 是全局配置或者辅助的
* `SUBCOMMAND` 是主要的命令，也是我们下面分析的重点
* `ENVIRONMENT VARIABLES` 暂时不列入我们的讨论

## 重点子命令梳理

这部分的解析，会先基于后面基础的学习，来挑选一些命令，其他命令会在进阶学习的时候再学习。

### eval

类似 `javascript` 的 `eval`，是将一段字符串的 `js/ts` 脚本代码直接执行。

查看 `eval` 的具体作用和用法：

```bash
deno eval -h
```

结果如下：

```bash
deno-eval
Evaluate JavaScript from the command line.
  deno eval "console.log('hello world')"

To evaluate as TypeScript:
  deno eval -T "const v: string = 'hello'; console.log(v)"

This command has implicit access to all permissions (--allow-all).

USAGE:
    deno eval [OPTIONS] <code>

OPTIONS:
        --cert <FILE>                Load certificate authority from PEM encoded file
    -h, --help                       Prints help information
        --inspect=<HOST:PORT>        activate inspector on host:port (default: 127.0.0.1:9229)
        --inspect-brk=<HOST:PORT>    activate inspector on host:port and break at start of user script
    -L, --log-level <log-level>      Set log level [possible values: debug, info]
    -q, --quiet                      Suppress diagnostic output
    -T, --ts                         Treat eval input as TypeScript
        --unstable                   Enable unstable APIs
        --v8-flags=<v8-flags>        Set V8 command line options. For help: --v8-flags=--help

ARGS:
    <code>
```

我们忽略 `OPTIONS`，直接使用 `deno eval <code>` 来看看效果：

```bash
deno eval "console.log('This year is: ' + new Date().getFullYear());"
This year is: 2020
```

> Tips: 截止 `deno 1.0.0-rc1` 版本，`deno` 还不支持 `es6` 模板字符串。

[未完待续。。。]

***

<Vssue :title="$title" />
