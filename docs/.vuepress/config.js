module.exports = {
  title: 'Jmingzi',
  lang: 'zh-CN',
  description: 'Jmingzi 的个人博客，高级前端进阶之路。',
  head: [
    ['meta', { 'http-equiv': 'Cache-Control', content: 'no-transform' }]
  ],
  themeConfig: {
    logo: 'https://avatars0.githubusercontent.com/u/9743418?s=460&v=4',
    repo: 'jmingzi/vuepress-blog',
    repoLabel: 'github',
    smoothScroll: true,
    nav: [
      { text: 'Js 深入系列', link: '/js深入系列/' },
      { text: 'ES6 系列', link: '/es6系列/' },
      { text: 'Vue 系列', link: '/vue系列/' },
      { text: '数据结构系列', link: '/数据结构系列/' },
      { text: '算法系列', link: '/算法系列/' },
    ]
  }
}