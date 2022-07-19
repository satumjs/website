---
title: 更新日志
sidebarDepth: 2
sidebar: auto
---

# 更新日志

`SatumJS` 遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

## 发布周期

- 主版本号：含有破坏性更新和新特性，不在发布周期内。
- 次版本号：每月末**可能发布**带有新特性且向下兼容的版本。
- 修订版本号：每周五**可能发布**日常 bugfix 更新的版本 (紧急的 bugfix 则任何时候都可发布)。

### 0.1.7

`2022-06-22`

- 🔥 core 单测覆盖率达到 `95.61%`，utils 达到 `96.89%`
- 💄 优化中间件/插件的 `options` 实现更优雅
- 💄 优化获取共享三方库的触发时机
- 🐞 沙箱脚本执行需要等到 `sandbox.init` 完成之后
- 🐞 `mockLoction` 需要模拟返回更多信息
- 🐞 不重复插入 fakeBody

### 0.1.6

`2022-06-09`

- 🛠 优化基座路由的协调，可以使用 `register` 和 `setHostHistory` 来设置基座路由规则；
- 🆕 支持自定义方法 `afterSystemStart`，方便在微应用调度系统启动后扩展功能；
- 💄 优化依赖三方库的微应用的执行时机

### 0.1.5

`2022-06-02`

- 🆕 midwareSystem, pluginSystem 增加 `evtCount` 方法，可以在中间件中判断事件是否被绑定；
- 🆕 增加 `printForDebug` 事件名，方便基于该事件开发调试插件；

### 0.1.0

`2022-04-19`

🎉 v0.1.0 正式版发布。
