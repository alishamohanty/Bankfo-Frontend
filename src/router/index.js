import Vue from 'vue'
import VueRouter from 'vue-router'
import Branch from '../components/Branch.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/branches'
  },
  {
    path:'/branches',
    name:'branches',
    component: Branch
  }
]
const router = new VueRouter({
  mode:'history',
  base: process.env.BASE_URL,
  routes
})
export default router