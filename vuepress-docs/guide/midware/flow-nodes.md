---
title: midware-流程节点
sidebarDepth: 2
---

# 流程节点

## 按流程阶段划分

- 初始设置

```bash
MidwareName.microApp # 定义远程获取微前端配置
MidwareName.start # 自定义微前端的 start，如使用 single-spa
```

- 全流程生效

```bash
MidwareName.statusChange # actor 对象的状态变化
```

- 激活阶段

```bash
MidwareName.urlOption # 处理微应用静态资源 url 的跨域白名单、跨域规则等
MidwareName.url # 处理微应用静态资源 url
MidwareName.proxyEntry # 处理微应用的本地代理，或获取代理平台的数据
MidwareName.code # 处理微应用的静态资源 source
MidwareName.cache # 处理静态资源的缓存
MidwareName.Sandbox # 设置沙箱，若不设置会有一个超简单的内置沙箱
```

- 渲染阶段

```bash
MidwareName.route # 处理多个微应用间的路由协调
MidwareName.root # 处理如何获取挂载 dom
MidwareName.domChange # 挂载点下的 dom 发生增删改、id/class 发生变化时触发
```

## 按支持『单个/多个』划分

<!--
> Typescript types 定义

```ts
type IgnoreFileFn = (url: string, appName?: string) => boolean;
type IgnoreFile = string | RegExp | IgnoreFileFn;
type ProcessUrlOption = {
  whiteList?: IgnoreFile[];
  corsRule?: string;
  callback?(code: string, url?: string): string;
};

type CacheItem = {
  file: string;
  ext?: FileType;
  source?: string;
  microSource?: string;
};

type RootNodeType = HTMLElement | null;
type MountContainer = HTMLElement | string;
``` -->

- 支持设置多个中间件

```ts
microApp(microAppConfigs: TMicroApp[], remoteUrl?: string): TMicroApp[] | Promise<TMicroApp[]>

statusChange(next: MicroAppStage, current: MicroAppStage): MicroAppStage
domChange(appName: string, mountNode: HTMLElement, records: MutationRecord[]): string | Promise<string>

url(url: string, option: ProcessUrlOption): string | Promise<string>
code(code: string, url: string): string | Promise<string>
cache(data: string | CacheItem): CacheItem | Promise<CacheItem>

root(root: RootNodeType, container: MountContainer, delay?: number): RootNodeType | Promise<RootNodeType>
route(routeHistory: RouteHistory, appName: string): RouteHistory | Promise<RouteHistory>

type RouteHistory = { [key: string]: any };
```

- 支持仅设置一个中间件，后者覆盖前者

```ts
urlOption: ProcessUrlOption | ((url: string) => ProcessUrlOption)
Sandbox: ISandbox
proxyEntry(entry: Entry, appName: string): Entry | Promise<Entry>
start(...args: any[]): void
```
