import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css' // 重置样式库
import '@/assets/styles/common.less' // 自己的重置样式和公用样式

import UI from './components/library' // 挂载全局组件

createApp(App).use(store).use(router).use(UI).mount('#app')
