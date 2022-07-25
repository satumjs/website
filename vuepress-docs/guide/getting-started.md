---
title: guide-快速上手
sidebarDepth: 2
---

# 快速上手

本文会帮助你从头搭建一个简单的 SatumJS 微前端应用。这个示例应用是为了集成老网站。

## 项目初始化

> 以下演示均使用 yarn 作为包安装工具，npm 等工具用法类似。

SatumJS 对基座的技术栈没有任何限制，不过为了适配多个终端，不建议基座承载太多 UI 和逻辑。我们可以选用 `Parcel` 作为基座的构建工具。

1. 创建并进入一个新目录

```bash
$ mkdir satum-demo && cd satum-demo
```

2. 使用包管理器进行初始化

```bash
yarn init
```

3. 安装依赖

```bash
$ yarn add @satumjs/core parcel-bundler@1.12.5
```

4. 创建 src 文件夹，并创建 `index.html` 和 `index.js` 文件

```bash
$ mkdir src && touch src/index.html src/index.js
```

添加 `index.html` 的内容

```html
<html>
  <body>
    <div id="mountNode"></div>
    <script src="./index.js"></script>
  </body>
</html>
```

添加 `index.js` 的内容

```js
// @ts-check
import { register, start, use, MidwareName, corsRuleLabel } from "@satumjs/core";

// 设置跨域服务，或自行控制微应用跨域
use((sys, apps, next) => {
  sys.set(MidwareName.urlOption, {
    corsRule: `https://bird.ioliu.cn/v2?url=${corsRuleLabel}`,
  });
  next();
});

register({
  name: "ucar",
  // 以这个站点作为老网站为例：美国大气研究中心-关于气温，1995年12月进行最后的更新
  entry: "http://eo.ucar.edu/skymath/tmp2.html",
  rules: { rule: "/", container: "#mountNode" },
});

start();
```

5. 在 `package.json` 中添加一些 [scripts](https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts)

这一步骤是可选的，但我们推荐你完成它。在下文中，我们会默认这些 scripts 已经被添加。

```json
{
  "scripts": {
    "start": "parcel src/index.html --open",
    "build": "parcel build src/index.html --no-source-maps"
  }
}
```

## 执行命令

```bash
$ yarn start
```

访问 [http://localhost:1234](http://localhost:1234/) 就能看到效果。这样基座就初始化完成，老网站也被集成进来了。

可以看到虽然渲染出来了，但图片是相对路径，导致很多是“破图”。我们尝试一下`自定义中间件`，把图片路径补充完整。需要改写 `index.js` 文件：

```js {19-30}
// @ts-check
import { register, start, use, MidwareName, corsRuleLabel } from "@satumjs/core";

// 设置跨域服务，或自行控制微应用跨域
use((sys, apps, next) => {
  sys.set(MidwareName.urlOption, {
    corsRule: `https://bird.ioliu.cn/v2?url=${corsRuleLabel}`,
  });
  next();
});

register({
  name: "ucar",
  // 以这个站点作为老网站为例：美国大气研究中心-关于气温，1995年12月进行最后的更新
  entry: "http://eo.ucar.edu/skymath/tmp2.html",
  rules: { rule: "/", container: "#mountNode" },
});

use((sys, apps, next) => {
  sys.set(MidwareName.domChange, (appName, mountNode) => {
    mountNode.querySelectorAll("img").forEach((el) => {
      const src = el.getAttribute("src");
      const { assetPublicPath } = apps.find((item) => item.name === appName);
      const newSrc = /^(https?\:)?\/\//.test(src) ? src : `${assetPublicPath}${src.charAt(0) === "/" ? src.slice(1) : src}`;
      el.setAttribute("src", newSrc);
    });
    return appName;
  });
  next();
});

start();
```

## 在线编辑该示例

[https://codepen.io/valleykid/pen/PoQopON](https://codepen.io/valleykid/pen/PoQopON)
