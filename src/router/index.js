import Vue from 'vue'
import Router from 'vue-router'
import { BasicLayout } from '@/components/BasicLayout.vue'
import HelloWorld from '@/components/HelloWorld'
import c from '@/components/C.vue'
import d from '@/components/D.vue'
import e from '@/components/E.vue'

Vue.use(Router)

// const asyncRouter = [{
//   path: '/',
//   name: 'index',
//   component: BasicLayout,
//   redirect: '/HelloWorld',
//   children:[
//     {
//       path: '/HelloWorld',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
// ]
// }]
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/c',
      name: 'c',
      component: c
    },
    {
      path: '/d',
      name: 'd',
      component: d
    },
    {
      path: '/e',
      name: 'e',
      component: e
    }
  ]
})
