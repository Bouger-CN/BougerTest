import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import firstVue from '@/components/firstVue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/firstvue',
      name:'firstvue',
      component:firstVue
    }
  ]
})
