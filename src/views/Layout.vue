<template>
  <!-- 顶部通栏 -->
  <nav>顶部通栏</nav>
  <!-- 头部组件 -->
  <head>
    头部组件
  </head>
  <!-- 内容容器 -->
  <div>
    <!-- 二级路由 -->
    <router-view />
  </div>
  <!-- 底部组件 -->
  <footer>底部组件</footer>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style scoped lang="less"></style>
