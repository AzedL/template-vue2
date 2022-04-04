import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/index.vue'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    component: Home,
    // component: () => import('../views/index'),
    // component: (resolve) => require(['@/views/index'], resolve),
  },
]

export default new Router({
  mode: 'history',
  base: '/',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
})
