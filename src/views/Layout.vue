<template>
  <!-- 顶部通栏 -->
  <app-navbar />
  <!-- 头部组件 -->
  <AppHeader />
  <!-- 内容容器 -->
  <div class="app-body">
    <!-- 二级路由 -->
    <router-view />
  </div>
  <!-- 底部组件 -->
  <AppFooter />
</template>

<script>
import AppNavbar from '@/components/app-navbar.vue'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
export default {
  name: 'Layout',
  components: {
    AppNavbar,
    AppHeader,
    AppFooter
  }
}
</script>

<style scoped lang="less">
.app-body {
  min-height: 600px;
}
</style>
