module.exports = {
  title: 'Jmingzi',
  lang: 'zh-CN',
  description: 'Jmingzi 的个人博客，高级前端进阶之路。',
  base: '',
  // globalLayout: '/layouts/custom.vue',
  head: [
    ['meta', { 'http-equiv': 'Cache-Control', content: 'no-transform' }],
    ['meta', { name: 'google-site-verification', content: 'TbvyCK9sEBOqr5fAbXQ2uLNMgTDgn4wmpBM747LhOwk' }],
    ['meta', { name: "baidu-site-verification", content: "mqWodOmELg" }]
  ],
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/google-analytics',
    {
      'ga': 'UA-154866821-1'
    },
    '@vuepress/nprogress'
  ],
  markdown: {
    // lineNumbers: true
  },
  themeConfig: {
    logo: 'https://avatars0.githubusercontent.com/u/9743418?s=460&v=4',
    repo: 'jmingzi/vuepress-blog',
    repoLabel: 'github',
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    sidebar: [
      '/',
      {
        title: 'Js 深入系列',
        collapsable: false,
        children: [
          '/js-deep/float-number',
          '/js-deep/unicode',
        ]
      },
      {
        title: 'ES6 系列',
        collapsable: false,
        children: [
          '/es6/iterate'
        ]
      }
    ],
    nav: [
      { text: '图床工具', link: 'https://iming.work/demo/upload/dist/index.html' },
      { text: '博客', link: 'https://iming.work' },
      // { text: 'ES6 系列', link: '/es6系列/' },
      // { text: 'Vue 系列', link: '/vue系列/' },
      // { text: '数据结构系列', link: '/数据结构系列/' },
      // { text: '算法系列', link: '/算法系列/' },
    ]
  }
}