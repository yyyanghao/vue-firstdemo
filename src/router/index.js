import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import del from '@/components/del'
import head from '@/components/head'
import date from '@/components/date'

Vue.use(Router)
export default new Router({
  linkActiveClass: 'mainactive',
  routes: [
    {
      path: '/',
      component: date
    },
    {
      path: '/date',
      component: date
    },
    {
      path:'/del',
      component:del
    },
    {
      path:'/done',
      component:Hello
    }
  ]
})
