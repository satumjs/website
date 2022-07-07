---
title: guide-参与贡献
sidebarDepth: 2
---

期待大家参与共建 SatumJS，使之越来越好，能够帮助更多的同学~

## 环境准备

### Node.js 和 npm/yarn

开发 SatumJS 中间件/插件，需要 Node.js 14+ 和 npm 6+。

推荐使用 [nvm](https://github.com/nvm-sh/nvm) 管理 Node.js，避免权限问题的同时，还能够随时切换当前使用的 Node.js 的版本。在 Windows 系统下的开发者可以使用 [nvm-windows](https://github.com/coreybutler/nvm-windows)。

npm 一般会内置，yarn 可根据[官网](https://yarnpkg.com/getting-started/install)推荐的方式安装。

## 开发中间件/插件

首先根据官网指引，了解中间件和插件的实现。可先尝试实现简单的功能，或参考开源的中间件/插件，熟悉相关机制后贡献。

### 中间件模板
```ts
import { MidwareSystem, IMicroApp, NextFn } from "@satumjs/types";

export function xxxMidware(sys: MidwareSystem, apps: IMicroApp[], next: NextFn) {
  // 参考中间件节点，处理流程中的数据
  sys.set(MidwareName.code, (source: string, fileUrl: string) => {/* 你的逻辑 */});
  next();
}
```

### 插件模板
```ts
import { PluginSystem, PluginEvent } from "@satumjs/core";

export function xxxPlugin(sys: PluginSystem) {
  // 参考插件钩子，处理钩子回调数据
  sys.event(PluginEvent.fileOriginSource, (detail) => {/* 你的逻辑 */});
}
```

## 贡献 Satum 文档

Satum 文档由 [vuepress](https://vuepress.vuejs.org/) 驱动，可以先 fork 官网项目并 clone 到本地，在根目录下执行如下命令：
```bash
# 安装依赖
yarn install

# 启动 Satum 文档开发
yarn dev
```
启动后，访问 [http://localhost:8080/website/](http://localhost:8080/website/) 即可实时查看文档更新的内容。完成开发后，请提交 MR。当被合并到 master 分支后，会触发自动构建部署到正式环境。

欢迎大家在熟悉 Satum 的过程中，总结经验并帮助完善官网。