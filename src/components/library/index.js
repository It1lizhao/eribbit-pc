// 扩展vue原有的功能：全局组件，自定义指令，挂载原型方法，注意：没有全局过滤器。
// 这就是插件
// vue2.0插件写法要素：导出一个对象，有install函数，默认传入了Vue构造函数，Vue基础之上扩展
// vue3.0插件写法要素：导出一个对象，有install函数，默认传入了app应用实例，app基础之上扩展

import XtxSkeleton from './xtx-skeleton.vue'
import XtxCarousel from './xtx-carousel.vue'
import XtxMore from './xtx-more.vue'
import HomePanel from './xtx-panel.vue'
import defaultImg from '@/assets/images/200.png'

export default {
  install(app) {
    // 在app上进行扩展，app提供 component directive 函数
    // 如果要挂载原型 app.config.globalProperties 方式
    app.component('XtxSkeleton', XtxSkeleton) // 骨架
    app.component('XtxCarousel', XtxCarousel) // 轮播图
    app.component('XtxMore', XtxMore) // 查看更多
    app.component('HomePanel', HomePanel) // 主页分类面板
    defineDirective(app) // 自定义指令
  }
}
// 指令
const defineDirective = (app) => {
  // 图片懒加载指令 v-lazyload
  // 原理：把原本在src上的图片地址存在指令上，当图片进入可视区时，把指令的图片地址赋值给src
  app.directive('lazyload', {
    // vue2 监听 使用指令 的 DOM 元素是否创建好----钩子函数:inserted
    // vue3 监听 使用指令 的 DOM 元素是否创建好----钩子函数:mounted
    // 传入两个参数 --- el：DOM元素实例 --- binding：自定义指令传入的数据
    mounted(el, binding) {
      //  IntersectionObserver 监听使用指令的DOM对象
      const observer = new IntersectionObserver(
        ([{ isIntersecting }]) => {
          // isIntersecting判断进入DOM或离开DOM触发
          if (isIntersecting) {
            // unobserve(dom) 停止观察那个dom
            observer.unobserve(el)
            // 图片加载失败时触发该函数
            el.onerror = () => {
              el.src = defaultImg
            }
            // 把指令的值设置给el的src属性， binding.value 是自定义指令接收过来的值
            el.src = binding.value
          }
        },
        {
          threshold: 0.01
        }
      )
      // observe(dom) 开启观察哪个dom
      observer.observe(el)
    }
  })
}
