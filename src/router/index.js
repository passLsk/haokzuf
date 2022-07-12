import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: () => import('@/views/Layout'),
    children:
      [
        { path: '/home', name: 'Home', component: () => import('@/views/Home') },
        { path: '/findroom', name: 'FindRoom', component: () => import('@/views/FindRoom') },
        { path: '/info', name: 'Info', component: () => import('@/views/Info') },
        { path: '/my', name: 'My', component: () => import('@/views/My') }
      ]
  },
  { path: '/login', name: 'login', component: () => import('@/views/Login') },
  { path: '/city', name: 'city', component: () => import('@/views/Home/components/MyCity.vue') },
  { path: '/renthouse', name: 'renthouse', component: () => import('@/components/MyAddHouse.vue') }
]

const router = new VueRouter({
  routes
})

export default router
