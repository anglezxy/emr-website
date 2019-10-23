import Vue from 'vue'
import Router from 'vue-router'
import { BasicLayout } from '@/components/BasicLayout.vue'
import HelloWorld from '@/components/HelloWorld'

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
    }
  ]
})
