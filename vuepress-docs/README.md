---
home: true
heroImage: https://gw.alipayobjects.com/mdn/rms_edced6/afts/img/A*KfcRTYnC4eoAAAAAAAAAAAAAARQnAQ
tagLine: SatumJS
tagline: 💫 面向多实例集成、功能可插拔的微前端框架
actionText: 快速上手 →
actionLink: /guide/
features:
  - title: 微内核
    details: 支持中间件、插件机制，可以集成其他微前端框架，和做有意义的扩展。
  - title: 开箱即用
    details: 只需要引入 @satumjs/core，配置微应用的激活规则后即可看到效果。
  - title: 集成能力强
    details: 支持所有的外部应用无需任何适配代码，就能无缝地集成。
  - title: 支持多实例
    details: 内置激活规则计算，可以同时激活多个实例，甚至是多条“微应用依赖链”。
  - title: 共享机制灵活
    details: UI 上支持布局/区块/组件/三方库共享，数据逻辑层面支持跨微应用共享。
  - title: 无缝支持 Vite
    details: 官方提供的沙箱中间件，完整的沙箱能力无缝支持 Vite。

footer: SatumJS ❤️ you
---

# 📦 安装

```bash
$ yarn add @satumjs/core  # or npm i @satumjs/core -S
```

# 🔨 使用

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

# 社区

> 加我微信 `valleykiddy` 注明“satumjs”，加好友后会邀请入微信群。微信群二维码**不再更新**。

github：[https://github.com/satumjs](https://github.com/satumjs)

| 微信群                                 | 钉群                                     |
| -------------------------------------- | ---------------------------------------- |
| ![](./public/wechat0502.jpeg =195x226) | ![](./public/dingtalk0424.jpeg =200x202) |

其他渠道建设中，欢迎关注或参与~
