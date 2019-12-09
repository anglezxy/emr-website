import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import c from '@/components/C.vue'
import d from '@/components/D.vue'
import e from '@/components/E.vue'
import f from '@/components/F.vue'
import sport from '@/components/sport.vue'
import question from '@/components/Question.vue'
import icomponent from '@/components/Icomponent.vue'
import wangye from '@/components/wangye.vue'

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
      path: '/b',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      redirect: '/wangye',
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
    },
    {
      path: '/f',
      name: 'f',
      component: f
    },
    {
      path: '/sport',
      name: 'sport',
      component: sport
    },
    {
      path: '/question',
      name: 'Question',
      component: question
    },
    {
      path: '/icomponent',
      name: 'Icomponent',
      component: icomponent
    },
    {
      path: '/wangye',
      name: 'wangye',
      component: wangye
    }
  ],
  scrollBehavior (to,from,savedPosition) {
    return { x: 0,y: 0}
  }
})
