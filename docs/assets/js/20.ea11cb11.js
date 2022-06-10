(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{442:function(t,s,a){"use strict";a.r(s);var n=a(34),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"pluginevent-内置的钩子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pluginevent-内置的钩子"}},[t._v("#")]),t._v(" "),a("code",[t._v("PluginEvent")]),t._v(" 内置的钩子")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("fileLoadStart")]),t._v(": 文件开始请求获取时触发")]),t._v(" "),a("li",[a("code",[t._v("fileOriginSource")]),t._v(": 文件内容获取后触发")]),t._v(" "),a("li",[a("code",[t._v("fileMicroSource")]),t._v(": 文件内容改写后触发")]),t._v(" "),a("li",[a("code",[t._v("fileCacheInfo")]),t._v(": 文件被缓存后触发")])]),t._v(" "),a("div"),t._v(" "),a("ul",[a("li",[a("code",[t._v("beforeLoad")]),t._v(": 静态资源请求开始前")]),t._v(" "),a("li",[a("code",[t._v("beforeMount")]),t._v(": 微应用挂载前")]),t._v(" "),a("li",[a("code",[t._v("afterMount")]),t._v(": 微应用挂载后")]),t._v(" "),a("li",[a("code",[t._v("beforeUnmount")]),t._v(": 微应用卸载前")]),t._v(" "),a("li",[a("code",[t._v("afterUnmount")]),t._v(": 微应用卸载后")])]),t._v(" "),a("div"),t._v(" "),a("ul",[a("li",[a("code",[t._v("currentAppChains")]),t._v(": url 变化时，重新计算"),a("strong",[t._v("微应用依赖链")]),t._v("后触发")]),t._v(" "),a("li",[a("code",[t._v("currentAppRequests")]),t._v(": 微应用执行加载时触发，所有请求都会在 "),a("code",[t._v("requests")]),t._v(" 里罗列")]),t._v(" "),a("li",[a("code",[t._v("printForDebug")]),t._v(": 开发时调试信息埋点，目前包含"),a("strong",[t._v("全局事件、actorSystem 数据、路由信息")]),t._v("等")])]),t._v(" "),a("div"),t._v(" "),a("h2",{attrs:{id:"timinghookname-性能相关的钩子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timinghookname-性能相关的钩子"}},[t._v("#")]),t._v(" "),a("code",[t._v("TimingHookName")]),t._v(" 性能相关的钩子")]),t._v(" "),a("p",[t._v("数据格式: "),a("code",[t._v("{ url, appName?, actorId?, time }")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("scheduleSystemStart")]),t._v(": 调度系统启动，即 "),a("code",[t._v("start")]),t._v(" 方法执行时")]),t._v(" "),a("li",[a("code",[t._v("scheduleCycleStart")]),t._v(": URL 变化时，调度周期开始")]),t._v(" "),a("li",[a("code",[t._v("appAssetLoadStart")]),t._v(": 资源开始拉取触发")]),t._v(" "),a("li",[a("code",[t._v("appAssetLoadEnd")]),t._v(": 资源拉取完成触发")]),t._v(" "),a("li",[a("code",[t._v("appScriptRunStart")]),t._v(": 资源拉取完成且依赖三方库可用时触发")]),t._v(" "),a("li",[a("code",[t._v("appScriptRunEnd")]),t._v(": 资源执行完毕触发")]),t._v(" "),a("li",[a("code",[t._v("appRenderStart")]),t._v(": 周期内沙箱执行插入 template 模板时触发")]),t._v(" "),a("li",[a("code",[t._v("appRenderEnd")]),t._v(": 周期内检测到挂载点下第一次 DOM 变化，则触发")])]),t._v(" "),a("p",[t._v("可用于调试"),a("strong",[t._v("相关数据，记录日志")]),t._v("等。")]),t._v(" "),a("h2",{attrs:{id:"插件小示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件小示例"}},[t._v("#")]),t._v(" 插件小示例")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" PluginSystem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PluginEvent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@satumjs/core"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("testPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sys"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PluginSystem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PluginEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fileOriginSource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("detail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--------"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" detail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"更多使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多使用场景"}},[t._v("#")]),t._v(" 更多使用场景")]),t._v(" "),a("p",[t._v("期待你的参与和探索...")])])}),[],!1,null,null,null);s.default=e.exports}}]);