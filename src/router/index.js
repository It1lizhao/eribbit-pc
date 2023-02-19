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
      },
      {
        path: '/category/:id',
        name: 'TopCategory',
        component: () => import('@/views/category')
      },
      {
        path: '/category/sub/:id',
        name: 'SubCategory',
        component: () => import('@/views/category/sub')
      },
      {
        path: '/product/:id',
        name: 'Goods',
        component: () => import('@/views/goods/index')
      }
    ]
  }
]

// vue2 new VueRouter({}) 创建实例
// vue3 createRouter({})  创建实例
const router = createRouter({
  // 使用hash路由模式
  history: createWebHashHistory(),
  routes,
  // 每次切换路由的时候自动滚动到顶部
  scrollBehavior() {
    return { left: 0, top: 0 }
  }
})

export default router
