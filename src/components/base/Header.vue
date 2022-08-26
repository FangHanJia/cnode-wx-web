<template>
  <van-sticky class="header-wrap">
    <van-nav-bar
      title="标题"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </van-sticky>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<style lang="scss" scoped>
.header-wrap {
  height: 60px;
  background: #fff;
}
</style>
