---
title: tool-周边工具包
sidebarDepth: 2
---

# 工具包

## @satumjs/types

[https://www.npmjs.com/package/@satumjs/types](https://www.npmjs.com/package/@satumjs/types)

TypeScript 相关的 interface/type/enum/constant 等定义。

## @satumjs/utils

[https://www.npmjs.com/package/@satumjs/utils](https://www.npmjs.com/package/@satumjs/utils)

core 或中间件、插件需要的工具函数。

- 日志打印及错误抛出 `printLog`, `printWarn`, `pringError`, `throwError`
- 空函数 `noop`, `nooPromise`
- 判断函数 `isRegExp`, `isFullUrl`
- 类型转化函数 `toArray`, `toPromise`
- 获取数据的函数 `getGlobalWindow`, `getRealHash`, `getUrlData`, `getUuid`, `getFakeGlobals`, `getInlineFileName`, `getFileName`, `getFileExt`, `getAppNameAndActorId`
- 获取或打印性能数据 `now`, `getTimingDuration`, `printTimingLog`, `printCycleTimingLog`
- 串行执行多个 promise 函数 `multipleRun`
- 串行执行多个普通函数 `multipleExec`

## @satumjs/component-share

[https://www.npmjs.com/package/@satumjs/component-share](https://www.npmjs.com/package/@satumjs/component-share)

组件共享机制依赖的工具包。

- 设置共享及获取 `setShare`, `getShare`
- react 组件方式获取 `ReactComponentShare`
- vue 返回组件方式获取 `vueComponentShare`
