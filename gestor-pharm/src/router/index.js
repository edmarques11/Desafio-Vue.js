import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Default',
    component: () => import('../templates/Default.vue'),
    redirect: 'home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home')
      },
      {
        path: '/medicines',
        name: 'medicines',
        component: () => import('../views/Medicines')
      }
    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
