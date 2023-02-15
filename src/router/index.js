import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home')
      }
    ]
  }
]

// vue2 new VueRouter({}) 创建实例
// vue3 createRouter({})  创建实例
const router = createRouter({
  // 使用hash路由模式
  history: createWebHashHistory(),
  routes
})

export default router
