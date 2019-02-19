import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/page/HelloWorld'
import Bpage from '@/page/b.vue'
import Cpage from '@/page/c.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/bpage',
      name: 'B',
      component: Bpage,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/cpage',
      name: 'C',
      component: Cpage
    }
  ]
})
