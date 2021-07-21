import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "HelloWorld"
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        index: 1
      }
    },
    {
      path: '/another',
      name: 'Another',
      component: ()=>import("../components/another"),
      meta: {
        index: 2
      }
    },
    {
      path: '/last',
      name: 'Last',
      component: ()=>import("../components/last"),
      meta: {
        index: 3
      }
    }
  ]
})
