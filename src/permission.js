import router from './router'
import store from './store'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { getToken } from '@/utils/cookies'

NProgress.configure({ showSpinner: false })

const whiteList = ['/']

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (!store.state.dict.hasDict) {
    store.dispatch('setDict', {})
  }
  getToken() || whiteList.includes(to.path) ? next() : next('/')
})

router.afterEach(() => {
  NProgress.done()
})
