<template>
  <div :style="{ textAlign: align }">
    <img :src="url" :alt="alt" :width="width">
    <p style="text-align: center; color: #999;font-size: 13px;">{{ alt }}</p>
  </div>
</template>

<script>
export default {
  name: 'artical-img',
  props: {
    align: String,
    url: String,
    alt: {
      type: String,
      default: 'Jmingzi - 高级前端进阶之路'
    },
    width: String
  }
}
</script>

<style>
</style>