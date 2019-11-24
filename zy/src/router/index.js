/*
 * @Author: your name
 * @Date: 2019-11-24 00:07:15
 * @LastEditTime: 2019-11-24 11:53:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zhuanyi_2\zy\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import jkh from '../components/wtq/jkh'
import index from "../components/cfy/index"
import parent from "../views/cfy/parent"
import test from "../views/cfy/test"

Vue.use(VueRouter)

const routes = [
  // {path: '/',name: 'home',component: Home},
  {path: '/jkh',name: 'jkh',component: jkh},
  {path: '/',component: index},
  {path: "/parent",component: parent},
  {path: "/test", component: test}
]

const router = new VueRouter({
  routes
})

export default router
