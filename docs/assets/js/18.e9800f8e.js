(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{444:function(a,s,e){"use strict";e.r(s);var t=e(36),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"官方中间件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#官方中间件"}},[a._v("#")]),a._v(" 官方中间件")]),a._v(" "),e("h2",{attrs:{id:"satumjs-simple-midwares"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#satumjs-simple-midwares"}},[a._v("#")]),a._v(" @satumjs/simple-midwares")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://www.npmjs.com/package/@satumjs/simple-midwares",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.npmjs.com/package/@satumjs/simple-midwares"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("一些简单中间件的实现集合。包含了对"),e("strong",[a._v("缓存、沙箱、css 隔离、获取挂载 dom、路由协调")]),a._v("的实现。")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("simpleCacheMidware")]),a._v(" 简单的文件内容缓存，会缓存获取过的 js/css 文件内容")]),a._v(" "),e("li",[e("code",[a._v("simpleSandboxMidware")]),a._v(" 简单的沙箱，会执行微应用的脚本")]),a._v(" "),e("li",[e("code",[a._v("simpleCssScopeMidware")]),a._v(" 简单的 css scope 实现，会处理 css 规则增加 scope")]),a._v(" "),e("li",[e("code",[a._v("mountNodeMidware")]),a._v(" 获取挂载 dom 节点，会响应 dom 变化，直到成功获取")]),a._v(" "),e("li",[e("code",[a._v("interceptorMidware")]),a._v(" vue/react 路由协调，会为不同的微应用分发不同的路径")])]),a._v(" "),e("h2",{attrs:{id:"satumjs-midware-single-spa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#satumjs-midware-single-spa"}},[a._v("#")]),a._v(" @satumjs/midware-single-spa")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://www.npmjs.com/package/@satumjs/midware-single-spa",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.npmjs.com/package/@satumjs/midware-single-spa"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("对 "),e("code",[a._v("single-spa")]),a._v(" 做了一层封装，可以利用其 url 变化，协调微应用加/卸载的能力。")]),a._v(" "),e("h2",{attrs:{id:"satumjs-midware-thead-occ"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#satumjs-midware-thead-occ"}},[a._v("#")]),a._v(" @satumjs/midware-thead-occ")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://www.npmjs.com/package/@satumjs/midware-thead-occ",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.npmjs.com/package/@satumjs/midware-thead-occ"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("针对 occ 网站业务，封装了一个中间件。除了借用 "),e("code",[a._v("@satumjs/simple-midwares")]),a._v(" 的一些能力外，重点实现了"),e("strong",[a._v("浏览器 nosql 缓存机制、代码处理")]),a._v("。")]),a._v(" "),e("h2",{attrs:{id:"satumjs-midware-qiankun-sandbox"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#satumjs-midware-qiankun-sandbox"}},[a._v("#")]),a._v(" @satumjs/midware-qiankun-sandbox")]),a._v(" "),e("p",[a._v("基于 "),e("code",[a._v("qiankun")]),a._v(" 包实现，完全借用了 "),e("code",[a._v("qiankun")]),a._v(" 的沙箱能力。")]),a._v(" "),e("h2",{attrs:{id:"satumjs-midware-sandbox"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#satumjs-midware-sandbox"}},[a._v("#")]),a._v(" @satumjs/midware-sandbox")]),a._v(" "),e("p",[a._v("基于 iframe 实现的沙箱，支持"),e("strong",[a._v("严格的脚本运行环境")]),a._v("，会把挂载节点视作虚拟 BODY，脚本里"),e("strong",[a._v("对 dom 元素的操作会严格限制在虚拟 BODY 范围内")]),a._v("。并且多实例场景下，"),e("strong",[a._v("不阉割沙箱能力无缝支持 Vite")]),a._v("。")]),a._v(" "),e("h2",{attrs:{id:"satumjs-midware-microcode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#satumjs-midware-microcode"}},[a._v("#")]),a._v(" @satumjs/midware-microcode")]),a._v(" "),e("p",[a._v("更强大的运行时源码改写能力。")]),a._v(" "),e("h2",{attrs:{id:"satumjs-midware-cachecode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#satumjs-midware-cachecode"}},[a._v("#")]),a._v(" @satumjs/midware-cachecode")]),a._v(" "),e("p",[a._v("更强大的源码缓存能力。")]),a._v(" "),e("h2",{attrs:{id:"satumjs-midware-interceptor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#satumjs-midware-interceptor"}},[a._v("#")]),a._v(" @satumjs/midware-interceptor")]),a._v(" "),e("p",[a._v("更强大的路由协调能力。")]),a._v(" "),e("h2",{attrs:{id:"satumjs-midware-wc-sandbox"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#satumjs-midware-wc-sandbox"}},[a._v("#")]),a._v(" @satumjs/midware-wc-sandbox")]),a._v(" "),e("p",[a._v("基于 webComponents 实现的沙箱。规划中...")])])}),[],!1,null,null,null);s.default=r.exports}}]);