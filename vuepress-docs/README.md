---
home: true
heroImage: https://gw.alipayobjects.com/mdn/rms_edced6/afts/img/A*KfcRTYnC4eoAAAAAAAAAAAAAARQnAQ
tagLine: SatumJS
tagline: 🔱 面向多实例集成、功能可插拔的微前端框架
actionText: 快速上手 →
actionLink: /guide/
features:
  - title: 易扩展
    details: 内置中间件和插件机制，可以做像缓存、沙箱、代码处理等功能扩展。
  - title: 易上手
    details: 只需要一个 @satumjs/core 依赖，配置激活规则后即可看到效果。
  - title: 零侵入
    details: 微应用不需要任何适配代码，零侵入就能无缝地集成。

footer: SatumJS ❤️ you | Copyright © 2020-present

sidebarDepth: 2
sidebar: auto
---

## 安装

```bash
$ yarn add @satumjs/core  # or npm i @satumjs/core -S
```

## 使用

```js
import { register, start } from "@satumjs/core";

// 注册微应用
register({
  name: "reactApp",
  entry: "http://localhost:8000",
  rules: { rule: "/", container: "#mountNode" },
});

// 启动
start();
```

或者使用**远程的微应用配置**，可以直接启动：

```js {3}
import { start } from "@satumjs/core";

start({ remoteUrl: "https://example.com/apps.json" });
```

## 在线示例

- [无需适配代码，集成老网站](https://codepen.io/valleykid/pen/PoQopON)
- [无需适配代码，集成 Vuejs-todo](https://codepen.io/valleykid/pen/LYQYWrK)

<div></div>

- [SatumJS × Vite](https://stackblitz.com/edit/vitejs-vite-pl7bhf) <!-- | [playground/simple-vite](https://github.com/satumjs/playground/tree/master/simple-vite) -->
- [入门: 集成简单的微应用](https://stackblitz.com/edit/github-gacap7) <!-- | [playground/simple-example](https://github.com/satumjs/playground/tree/master/simple-example) -->
- [入门: 自定义中间件](https://stackblitz.com/edit/js-9dzksc) <!-- | [playground/simple-custom-midware](https://github.com/satumjs/playground/tree/master/simple-custom-midware) -->
- [入门: 使用官方中间件](https://stackblitz.com/edit/js-xte5xe) <!-- | [playground/use-offical-midwares](https://github.com/satumjs/playground/tree/master/use-offical-midwares) -->
- [入门: 集成自带生命周期的微应用](https://stackblitz.com/edit/js-lyqjyr) <!-- | [playground/use-app-with-lifecycles](https://github.com/satumjs/playground/tree/master/use-app-with-lifecycles) -->
- [进阶: 使用区块机制](https://stackblitz.com/edit/js-m2kkqn) <!-- | [playground/simple-block-example](https://github.com/satumjs/playground/tree/master/simple-block-example) -->
- [进阶: 共享三方库](https://stackblitz.com/edit/github-vfvwg3)
- [进阶: 共享组件](https://github.com/satumjs/playground/tree/master/simple-share-component)

## 社区

> 加我微信 `valleykiddy` 注明“satumjs”，加好友后会邀请入微信群。微信群二维码**不再更新**。

github：[https://github.com/satumjs](https://github.com/satumjs)

| 微信群                                 | 钉群                                     |
| -------------------------------------- | ---------------------------------------- |
| ![](./public/wechat0502.jpeg =195x226) | ![](./public/dingtalk0424.jpeg =200x202) |

其他渠道建设中，欢迎关注或参与~
