module.exports = {
  title: 'SatumJS',
  description: 'A core of micro-frontends framework',
  base: '/website/',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', {
      href: 'https://gw.alipayobjects.com/mdn/rms_edced6/afts/img/A*KfcRTYnC4eoAAAAAAAAAAAAAARQnAQ',
      type: 'image/x-icon',
      rel: 'shortcut icon'
    }],
    ['script', {}, `
var ignoreDomains = ["localhost", "127.0.0.1", "0.0.0.0"];
var currentDomainIsIgnored = ignoreDomains.some(function(domain){return location.hostname.indexOf(domain)!==-1});

// 插入 51la 统计代码
!function(p){"use strict";!function(t){if(currentDomainIsIgnored) return;var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"JiS3PZJqUNXw6wVQ",ck:"JiS3PZJqUNXw6wVQ",autoTrack:true,hashMode:true});

// 插入百度统计代码
var _hmt=_hmt||[];!function(){if(currentDomainIsIgnored) return;var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?ff1ee4d80feed24efd13ed94ef4722fe";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s)}();
    `],
  ],
  /* locales: {
    '/': {
      lang: 'zh-CN',
      title: 'SatumJS',
      description: '面向未来更多场景的下一代微前端框架',
      selectText: '选择语言',
    },
    '/en/': {
      lang: 'en-US',
      title: 'SatumJS',
      description: 'Next-generation microf2e framework for more scenarios in the future',
      selectText: 'Languages',
    },
  }, */
  themeConfig: {
    repo: 'satumjs',
    docsRepo: 'satumjs/website',
    editLinks: true,
    docsDir: 'vuepress-docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '更新时间',
    nav: [
      { text: '文档', link: '/guide/' },
      { text: '示例', link: '/examples' },
      { text: '更新日志', link: '/changelog' },
    ],
    sidebar: {
      '/guide': [{
        title: '指南',
        collapsable: false,
        children: [
          { title: '简单介绍', path: '/guide/' },
          { title: '快速上手', path: '/guide/getting-started' },
          { title: '架构体系', path: '/guide/architecture-map' },
          { title: '参与贡献', path: '/guide/contributing' },
        ],
      }, {
        title: 'API',
        collapsable: false,
        children: [
          { title: 'API 说明', path: '/guide/api/' },
          { title: '注意事项', path: '/guide/api/attention' },
        ],
      }, {
        title: '中间件',
        collapsable: false,
        children: [
          { title: '快速了解', path: '/guide/midware/' },
          { title: '流程节点', path: '/guide/midware/flow-nodes' },
          { title: '官方中间件', path: '/guide/midware/offical-midwares' },
        ],
      }, {
        title: '插件',
        collapsable: false,
        children: [
          { title: '文档说明', path: '/guide/plugin/' },
        ],
      }, {
        title: '工具',
        collapsable: false,
        children: [
          { title: '工具包', path: '/guide/tool/' },
        ],
      }],
    },
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-imsize'));
    },
  },
}