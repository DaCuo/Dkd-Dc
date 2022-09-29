// 全局路由守卫
import router from './router'
import store from './store'
const whiteList = ['/login', '/404']
// 登录权限设置
router.beforeEach((to, from, next) => {
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
