import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Branch from '../components/Branch.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'home',
    component: Home
  },
  {
    path:'/about',
    name:'about',
    component: About
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