<template>
  <div style="margin-top:50px;">
    <p style="font-weight: bold;">
      <template v-if="title">
        <a href="https://github.com/Jmingzi/vuepress-blog/issues/new" target="_blank">{{ title }}</a>
      </template>
      <template v-else>
        全文结束！
        <a href="https://github.com/Jmingzi/vuepress-blog/issues/new" target="_blank">文章有错误去纠正 →</a>
      </template>
    </p>
    <div style="text-align: center;border-top: 3px dashed #ccc;">
      <!-- <img src="http://file.iming.work/068ba1ab09eb399ad234.jpg" alt="高级前端进阶之路" width="200px" />
      <p>关注公众号：高级前端进阶之路。一起成长！</p> -->
      <img width="500px" src="../images/footer.jpg" alt="关注公众号：高级前端进阶之路。一起成长！">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style>
</style>