<template>
  <div id="global-layout">
    <header><h1>Header</h1></header>
    <component :is="layout"/>
    <footer><h1>Footer</h1></footer>
  </div>
</template>

<script>
import Home from '../layouts/home.vue'

export default {
  components: {
    Home
  },

  computed: {
    layout () {
      if (this.$page.path) {
        console.log(this.$page.path)
        if (this.$page.path === '/') {
          // return 'home'
          return 'Layout'
        } else if (this.$frontmatter.layout) {
          // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  },
  created () {
  }
}
</script>