---
title: guide-架构体系
sidebarDepth: 2
---

# 架构体系

## 内核架构视角

![](https://gw.alipayobjects.com/mdn/rms_d65887/afts/img/A*uErEQJtl-wMAAAAAAAAAAAAAARQnAQ =450x495)

几点说明：

> 因为激活规则中有路径规则和 `container` 属性，微应用可以是普通的，也可以是布局、区块。

- `布局微应用`：若激活规则中包含 `layout`，则以路径匹配到的 **"父级"微应用** 即是布局微应用；
- `区块微应用`：若激活规则中包含 `blocks`，则以路径匹配到的 **"子级"微应用** 即是区块微应用；
- `数据共享`：目前数据共享由 `shareProps` 配置，且需要通过 window 对象。其他共享方式规划中；
- `路由协调`：依赖中间件 [simple-midwares/interceptor](/guide/midware/offical-midwares.html#satumjs-simple-midwares) 或者 [midware-interceptor](/guide/midware/offical-midwares.html#satumjs-midware-interceptor)；

## 工程生态视角

![](https://gw.alipayobjects.com/mdn/rms_d65887/afts/img/A*l6xIQ7bZEgYAAAAAAAAAAAAAARQnAQ =560x399)

几点说明：

- `微应用配置平台`，可基于 `MidwareName.microApp` 实现个性化的获取与配置处理，也可以基于 `StartOptions.remoteUrl` 指定获取配置的远程 URL；
- `代理/调试平台`，可基于 `MidwareName.proxyEntry` 接入自定义配置。既可以用本地缓存实现，也可以使用远程的代理配置服务。从而做到微应用开发时，及时看到集成后的效果；
- `跨域服务`，自行搭建服务，然后基于 `MidwareName.urlOption` 中的 `corsRule` 接入；
- `可视化搭建平台`，即低代码平台，可拖拽创建的页面，也可以轻松集成到微前端体系中；
- `物料市场`，较通常的做法是代码复制或组件引入微应用。但此处有个“畅想”😀，物料站点把物料组件独立成一个个 URL，既可以是示例展示平台，又可以作为“区块微应用”集成到项目中，进而“打通” Vue/React/Angular 组件共享；
