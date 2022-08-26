<template>
  <div class="home-wrap">
    <div class="title">store:{{ $store.state.count }}</div>
    <button @click="increment">Count is: {{ count }}</button>
    <router-link to="/login">To HelloWorld</router-link>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="primary" size="small">小型按钮</van-button>
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  const { proxy } = getCurrentInstance()
  // eslint-disable-next-line
  console.log(proxy.$axios)
})
</script>

<style lang="scss" scoped>
.home-wrap {
  padding: 24px;
  .title {
    font-size: 20px;
  }
}
</style>
