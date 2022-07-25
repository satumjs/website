(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{290:function(e,a,s){"use strict";s.r(a);var t=s(10),r=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"官方中间件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官方中间件"}},[e._v("#")]),e._v(" 官方中间件")]),e._v(" "),a("h2",{attrs:{id:"satumjs-simple-midwares"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#satumjs-simple-midwares"}},[e._v("#")]),e._v(" @satumjs/simple-midwares")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/@satumjs/simple-midwares",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.npmjs.com/package/@satumjs/simple-midwares"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("一些简单中间件集合。包含"),a("strong",[e._v("缓存、沙箱、样式隔离、获取挂载点、路由协调、图片路径自动补全")]),e._v("等实现。")]),e._v(" "),a("ul",[a("li",[e._v("simpleCacheMidware: 简单的文件内容缓存，会缓存获取过的 js/css 文件内容")]),e._v(" "),a("li",[e._v("simpleSandboxMidware: 简单的沙箱，会执行微应用的脚本"),a("br"),e._v("options 说明:\n"),a("ul",[a("li",[a("code",[e._v("docVariable")]),e._v(": 改写沙箱 document 的返回值, 当返回 undefined/null 则继续按默认逻辑查找")]),e._v(" "),a("li",[a("code",[e._v("winVariable")]),e._v(": 改写沙箱 window 的返回值, 当返回 undefined/null 则继续按默认逻辑查找")])])]),e._v(" "),a("li",[e._v("simpleCssScopeMidware: 简单的 css scope 实现，会处理 css 规则增加 scope"),a("br"),e._v("options 说明:\n"),a("ul",[a("li",[a("code",[e._v("scopeRule")]),e._v(": 设置 css selector 前缀规则")]),e._v(" "),a("li",[a("code",[e._v("ignoreList")]),e._v(": 设置特殊的忽略名单，前缀会在命中的选择器后面插入")])])]),e._v(" "),a("li",[e._v("imageUrlCompleteMidware: css 和页面中的图片相对路径自动补全"),a("br"),e._v("options 说明:\n"),a("ul",[a("li",[a("code",[e._v("publicPath")]),e._v(": 用户自定义微应用的 publicPath")]),e._v(" "),a("li",[a("code",[e._v("getFinalUrl")]),e._v(": 用户自定义最终的返回，参数为默认处理后的 url")])])]),e._v(" "),a("li",[e._v("mountNodeMidware: 获取挂载 dom 节点，会响应 dom 变化，直到成功获取")]),e._v(" "),a("li",[e._v("interceptorMidware: vue/react 路由拦截器，会为不同的微应用分发不同的路径")])]),e._v(" "),a("h2",{attrs:{id:"satumjs-midware-proxy-sandbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#satumjs-midware-proxy-sandbox"}},[e._v("#")]),e._v(" @satumjs/midware-proxy-sandbox")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/@satumjs/midware-proxy-sandbox",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.npmjs.com/package/@satumjs/midware-proxy-sandbox"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("基于 Proxy 实现的沙箱中间件，目前与 simple-midwares 中的沙箱功能一致。"),a("br"),e._v("欢迎社区感兴趣的同学一起持续增强该沙箱。")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("docVariable")]),e._v(": (k: string, proxyDoc: Object, document: Document) => any.")]),e._v(" "),a("li",[a("code",[e._v("winVariable")]),e._v(": (k: string, proxyWin: Object, window: Window) => any.")])]),e._v(" "),a("h2",{attrs:{id:"satumjs-midware-single-spa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#satumjs-midware-single-spa"}},[e._v("#")]),e._v(" @satumjs/midware-single-spa")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/@satumjs/midware-single-spa",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.npmjs.com/package/@satumjs/midware-single-spa"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("对 "),a("code",[e._v("single-spa")]),e._v(" 做了一层封装，可以利用其 url 变化，协调微应用加/卸载的能力。")]),e._v(" "),a("h2",{attrs:{id:"satumjs-midware-qiankun-sandbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#satumjs-midware-qiankun-sandbox"}},[e._v("#")]),e._v(" @satumjs/midware-qiankun-sandbox")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/@satumjs/midware-qiankun-sandbox",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.npmjs.com/package/@satumjs/midware-qiankun-sandbox"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("基于 "),a("a",{attrs:{href:"https://www.npmjs.com/package/@satumjs/x-qiankun",target:"_blank",rel:"noopener noreferrer"}},[e._v("x-qiankun"),a("OutboundLink")],1),e._v(" 包实现，完全借用了 "),a("code",[e._v("qiankun")]),e._v(" 的沙箱能力。")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("scopedCSS")]),e._v(": 同 "),a("code",[e._v("qiankun")]),e._v(" 的配置")]),e._v(" "),a("li",[a("code",[e._v("useLooseSandbox")]),e._v(": 同 "),a("code",[e._v("qiankun")]),e._v(" 中的 loose 设置")]),e._v(" "),a("li",[a("code",[e._v("useQiankunStart")]),e._v(": 是否使用 "),a("code",[e._v("qiankun")]),e._v(" 中依赖的 "),a("code",[e._v("single-spa")]),e._v(" 的 start")]),e._v(" "),a("li",[a("code",[e._v("urlRerouteOnly")]),e._v(": 同 "),a("code",[e._v("single-spa")]),e._v(" 的配置")]),e._v(" "),a("li",[a("code",[e._v("mergeWinProperty(fakeWin: Object, window: Window): void")]),e._v(": 通过增删改 fakeWin 对象上的属性，改写沙箱 window 的属性")])]),e._v(" "),a("h2",{attrs:{id:"satumjs-midware-sandbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#satumjs-midware-sandbox"}},[e._v("#")]),e._v(" @satumjs/midware-sandbox")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/@satumjs/midware-sandbox",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.npmjs.com/package/@satumjs/midware-sandbox"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("基于 iframe 实现的沙箱，支持"),a("strong",[e._v("严格的脚本运行环境")]),e._v("，会把挂载节点视作虚拟 BODY，脚本里"),a("strong",[e._v("对 dom 元素的操作会严格限制在虚拟 BODY 范围内")]),e._v("。并且多实例场景下，"),a("strong",[e._v("不阉割沙箱能力无缝支持 Vite")]),e._v("。")]),e._v(" "),a("ul",[a("li",[e._v("Vite 模式 (loose 和 strict 都不设置或都为 false 时)\n"),a("ul",[a("li",[a("code",[e._v("batchNumber")]),e._v(": number, 设置静态资源批量请求时最大数，默认 200")]),e._v(" "),a("li",[a("code",[e._v("ifmAttribute")]),e._v(": Object, 设置 iframe 的属性")]),e._v(" "),a("li",[a("code",[e._v("mergeWinProperty(fakeWin: Object, window: Window): void")]),e._v(": 通过增删改 fakeWin 对象上的属性，改写沙箱 window 的属性\n"),a("br")])])]),e._v(" "),a("li",[e._v("普通模式\n"),a("ul",[a("li",[a("code",[e._v("loose")]),e._v(": boolean, 仅使用 with 控制沙箱上下文")]),e._v(" "),a("li",[a("code",[e._v("strict")]),e._v(": boolean, 使用 with + function 控制沙箱上下文")]),e._v(" "),a("li",[a("code",[e._v("ifmAttribute")]),e._v(": 同上")]),e._v(" "),a("li",[a("code",[e._v("mergeWinProperty(fakeWin: Object, window: Window): void")]),e._v(": 同上")]),e._v(" "),a("li",[a("code",[e._v("proxyIds")]),e._v(": string[], 默认会劫持 localStorage/sessionStorage，设置白名单则不被统一管控")])])])]),e._v(" "),a("h2",{attrs:{id:"satumjs-midware-microcode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#satumjs-midware-microcode"}},[e._v("#")]),e._v(" @satumjs/midware-microcode")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/@satumjs/midware-microcode",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.npmjs.com/package/@satumjs/midware-microcode"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("更强大的运行时源码改写能力。")]),e._v(" "),a("h2",{attrs:{id:"satumjs-midware-cachecode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#satumjs-midware-cachecode"}},[e._v("#")]),e._v(" @satumjs/midware-cachecode")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/@satumjs/midware-cachecode",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.npmjs.com/package/@satumjs/midware-cachecode"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("更强大的源码缓存能力。")]),e._v(" "),a("h2",{attrs:{id:"satumjs-midware-interceptor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#satumjs-midware-interceptor"}},[e._v("#")]),e._v(" @satumjs/midware-interceptor")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/@satumjs/midware-interceptor",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.npmjs.com/package/@satumjs/midware-interceptor"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("更强大的路由协调能力。")]),e._v(" "),a("h2",{attrs:{id:"satumjs-midware-wc-sandbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#satumjs-midware-wc-sandbox"}},[e._v("#")]),e._v(" @satumjs/midware-wc-sandbox")]),e._v(" "),a("p",[e._v("基于 webComponents 实现的沙箱。规划中...")])])}),[],!1,null,null,null);a.default=r.exports}}]);