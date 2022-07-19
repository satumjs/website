---
title: api-注意事项
sidebarDepth: 2
---

# 注意事项

## 激活规则

字符串路径规则，与 `single-spa` 的[匹配逻辑](https://single-spa.js.org/docs/api#configuration-object)一致。

`/`：即通配规则。因为所有路径都能匹配，视为“特殊规则”。路径规则**匹配顺序**是：

按微应用注册的顺序**从前到后**进行匹配；微应用有多个规则，则从**左到右**进行匹配；遇到`通配规则`会暂时忽略，直到所有规则无法匹配，才会使用通配规则的微应用。

规则匹配时会判断终端是否一致，`EndType.NONE(多端通配)`会适配任何终端。规则中未指定终端类型时，默认是`EndType.PC`。

所以，你的微应用的路径可以非常灵活，可以配置**不同开头的路径规则**，甚至适配**不同终端的路径**。无需担心像 `qiankun` 那样受限于 `routerBase` 只能为每个微应用配置一种规则。

## 中间件

`MidwareSystem` 具有多个有用的方法/配置，常用的罗列如下：

- `set()`：设置流程节点的处理逻辑
- `use()`：使用其他中间件
- `fileExtName()`：获取文件扩展名
- `fileFetch()`：扩展后的 fetch 函数
- `event()`/`fire()`：可在中间件中提供自定义插件，或响应其他插件
- `options`：中间件使用时，来自用户的配置项

> 强烈建议把 [sandbox](/guide/midware/offical-midwares.html#satumjs-simple-midwares)、[mountNode](/guide/midware/offical-midwares.html#satumjs-simple-midwares) 和 [midware-single-spa](/guide/midware/offical-midwares.html#satumjs-midware-single-spa) 置为项目标配。<br>
> 另外，若微应用包含独立路由，建议使用 [interceptor](/guide/midware/offical-midwares.html#satumjs-simple-midwares) 或者 [midware-interceptor](/guide/midware/offical-midwares.html#satumjs-midware-interceptor) 协调路由。

## 其他
