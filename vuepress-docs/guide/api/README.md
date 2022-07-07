---
title: api-API 说明
sidebarDepth: 2
---

将微应用关联到一些 url 规则，实现当浏览器 url 发生变化时，自动加载相应的微应用。

## 方法

### register

#### 用法

```ts
register(
  app: TMicroApp | TMicroApp[] | string, // 微应用配置或配置集，或微应用名
  entry?: Entry, // 微应用的 entry 地址，第一个参数为 string 时必选
  activeRule?: Rule | Rule[], // 激活规则或规则集，第一个参数为 string 时必选
  customProps?: SingleSpaAppProps, // 生命周期共享，可选
)
```

#### 参数说明

当传入微应用名为 `SATUMMICRO_HOST_APPLICATION` 时，则是注册基座路由规则。此时除了 `name`、`rules`、`history` 外，其余设置均失效。因为基座应用非微应用，这里注册仅用于协调路由。

```ts
type Entry = string | string[] | { styles?: string[]; scripts?: string[]; html?: string; }

type MountContainer = HTMLElement | string;
type Activity = string | RegExp | ActivityFn;
type Block = { path: string; container?: MountContainer; }
type Rule = {
  rule: Activity;
  container?: MountContainer;
  endtype?: EndType;
  layout?: string; // 配置有效的路径，则对应的『布局微应用』会优先激活和渲染
  blocks?: Block[]; // 配置有效的路径集，则对应的『区块微应用』会被激活和渲染
}

type TMicroApp {
  name: string;
  entry?: Entry;
  rules?: Rule | Rule[];
  history?: HistoryType;
  // 此处声明的变量，均可在微应用的 window 对象上访问
  shareProps?: {
    externals?: KeyObject<any>; // 通过嵌套关系形成依赖链，微应用之间共享三方库如 React
    globals?: KeyObject<any>; // 通过依赖链，微应用之间共享数据，该数据在取时查询依赖链
    statics?: KeyObject<any>; // 配置该微应用内使用的静态数据
  };
  extra?: MicroAppConfig;

  // 兼容 single-spa 配置
  activeWhen?: Activity | Activity[];
  customProps?: SingleSpaAppProps;

  // 兼容 qiankun 配置
  container?: MountContainer;
  activeRule?: SingleSpaMicroApp['activeWhen'];
  props?: SingleSpaAppProps;
  loader?(loading: boolean): void;
}
```

### start

#### 用法

```ts
start(options?: StartOptions)
```

#### 参数说明

```ts
type IgnoreFile = string | RegExp | IgnoreFileFn;
type StartOptions = {
  prefetch?: boolean; // 预加载
  hostHistoryType?: HostHistoryType;
  ignoreFileRule?: IgnoreFile | IgnoreFile[]; // 忽略加载的一些文件，如 cnzz 类的
  fetch?: typeof fetch; // 自定义获取远程内容
  getPublicPath?(url: string, option?: ProcessUrlOption): string; // 获取资源相对路径
  getTemplate?(code: string): string; // 处理 html 内容
  remoteUrl?: string; // 远程微应用配置
  [MidwareName.urlOption]?: ProcessUrlOption | ((url: string) => ProcessUrlOption);
  [MidwareName.proxyEntry]?(entry: Entry, appName: string): Entry | Promise<Entry>;
  [MidwareName.Sandbox]?: ISandbox;
  [MidwareName.Store]?: IStore;
  [MidwareName.start]?(...args: any[]): void;
};
```

### use

引入中间件。

#### 用法

```ts
use(handler: MidwareFn, options?: KeyObject<any>)
```

#### 参数说明

```ts
type MidwareFn = ( system: MidwareSystem, microApps: IMicroApp[], next: NextFn ) => void;
type MidwareSystem {
  set(cfgName: MidwareName, cfgValue: any): void; // 设置流程节点的处理逻辑
  use(handler: MidwareFn, options?: KeyObject<any>): void; // 使用其他中间件
  setHook(hookName: SystemHookName, hook: SystemHookFn): void;
  evtCount(evtName: string): number;
  cfgCount(cfgName: MidwareName): number;
  fileExtName(file: string): FileType | undefined; // 获取文件扩展名
  fileFetch(file: string | RequestInfo, options?: KeyObject<any>, appName?: string ): Promise<any>;
  event: EventFn; // 绑定插件
  fire: TriggerFn; // 触发插件
  options: KeyObject<any>; // 中间件使用时，来自用户的配置项
}
```

### set

引入插件。

#### 用法

```ts
set(hook: HookFn, options?: KeyObject<any>)
```

#### 参数说明

```ts
type HookFn = (system: PluginSystem) => void;
type EventFn = (evt: string, fn: HandlerFn<DetailParam>, once?: boolean) => void;
type PluginSystem = { event: EventFn; evtCount(evtName: string): number; options: KeyObject<any> };
```

### setHostHistory

当基座具有路由系统时，协调基座路由与微应用路由。

#### 用法

```ts
setHostHistory(rootHistory: KeyObject<any>, rules?: Rule | Rule[]>)
```

## 枚举值

### MicroAppStage

```ts
enum MicroAppStage {
  NOT_ACTIVED = "NOT_ACTIVED", // 未激活
  ACTIVING = "ACTIVING", // 激活中
  ACTIVED = "ACTIVED", // 已激活
  NOT_RENDERED = "NOT_RENDERED", // 未渲染
  RENDERING = "RENDERING", // 渲染中
  RENDERED = "RENDERED", // 已渲染
}
```

### MidwareName

```ts
{
  microApp, // 定义远程获取微前端配置
  statusChange, // actor 对象的状态变化
  domChange, // 挂载点下的 dom 发生增删改、id/class 发生变化时触发
  url, // 处理微应用静态资源 url
  code, // 处理微应用的静态资源 source
  cache, // 处理静态资源的缓存
  root, // 处理如何获取挂载 dom
  route, // 处理多个微应用间的路由协调
  Sandbox, // 设置沙箱，若不设置会有一个超简单的内置沙箱
  Store, // TODO
  urlOption, // 处理微应用静态资源 url 的跨域白名单、跨域规则等
  proxyEntry, // 处理微应用的本地代理，或获取代理平台的数据
  start, // 自定义微前端的 start，如使用 single-spa
}
```

### PluginEvent

```ts
{
  fileOriginSource, // 文件内容获取后触发
  fileMicroSource, // 文件内容改写后触发
  fileCacheDB, // 文件缓存后触发
  currentAppChains, // url 变化时，微应用依赖链重新计算后触发
}
```

### HistoryType

```ts
HistoryType {
  BROWSER = "browser",
  HASH = "hash",
  MEMORY = "memory",
  MPA = "mpa", // 多页面应用
}
```

### FileType

```ts
enum FileType {
  HTML = "html",
  CSS = "css",
  JS = "js",
  JSON = "json",
}
```

### EndType

以下端有内置的嗅探器获取终端，可以自行扩展。

```ts
enum EndType {
  PC = "pc", // PC 端
  H5 = "h5", // 移动端
  NONE = "none", // 多端通配
}
```

## 属性

- `fakeTagName` = "x-satum-micro"
- `fakeWrapTagName` = 'x-body'
- `fakeTagWithAppName` = "data-micro-app"
- `fakeTagWithActorId` = "data-actor-id"
- `corsRuleLabel` = "{URL}"
