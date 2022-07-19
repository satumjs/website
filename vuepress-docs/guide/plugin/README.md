---
title: plugin-文档说明
sidebarDepth: 2
---

# 文档说明

## `PluginEvent` 内置的钩子

- `fileLoadStart`: 文件开始请求获取时触发
- `fileOriginSource`: 文件内容获取后触发
- `fileMicroSource`: 文件内容改写后触发
- `fileCacheInfo`: 文件被缓存后触发

<div></div>

- `beforeLoad`: 静态资源请求开始前
- `beforeMount`: 微应用挂载前
- `afterMount`: 微应用挂载后
- `beforeUnmount`: 微应用卸载前
- `afterUnmount`: 微应用卸载后

<div></div>

- `currentAppChains`: url 变化时，重新计算**微应用依赖链**后触发
- `currentAppRequests`: 微应用执行加载时触发，所有请求都会在 `requests` 里罗列
- `printForDebug`: 开发时调试信息埋点，目前包含**全局事件、actorSystem 数据、路由信息**等

<div></div>

## `TimingHookName` 性能相关的钩子

数据格式: `{ url, appName?, actorId?, time }`

- `scheduleSystemStart`: 调度系统启动，即 `start` 方法执行时
- `scheduleCycleStart`: URL 变化时，调度周期开始
- `appAssetLoadStart`: 资源开始拉取触发
- `appAssetLoadEnd`: 资源拉取完成触发
- `appScriptRunStart`: 资源拉取完成且依赖三方库可用时触发
- `appScriptRunEnd`: 资源执行完毕触发
- `appRenderStart`: 周期内沙箱执行插入 template 模板时触发
- `appRenderEnd`: 周期内检测到挂载点下第一次 DOM 变化，则触发

可用于调试**相关数据，记录日志**等。

## 插件小示例

```ts
import { PluginSystem, PluginEvent } from "@satumjs/core";

export function testPlugin(sys: PluginSystem) {
  sys.event(PluginEvent.fileOriginSource, (detail) => {
    console.log("--------", detail.file);
  });
}
```

## 更多使用场景

期待你的参与和探索...
