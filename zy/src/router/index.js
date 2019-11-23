import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "../components/cfy/index"
Vue.use(VueRouter)

const routes = [
  // {path: '/',name: 'home',component: Home},
  {path: '/',component: index},
]

const router = new VueRouter({
  routes
})

export default router
