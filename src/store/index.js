import { createStore } from 'vuex'
import createPersistedState from 'vuex-plugin-persistedstate'
// 导入模块
import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'
export default createStore({
  getters: {},
  modules: {
    user,
    cart,
    category
  },
  plugins: [
    createPersistedState({
      key: 'erabbitVuex', // 本地储存名字
      paths: ['user', 'cart'] // 指定储存模块
    })
  ]
})
