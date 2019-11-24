/*
 * @Author: your name
 * @Date: 2019-11-24 00:07:15
 * @LastEditTime: 2019-11-24 15:10:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zhuanyi_2\zy\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import jkh from '../components/wtq/jkh'
import change from '../components/wtq/change'
import recommand from '../components/wtq/recommand'
import index from "../components/cfy/index"
Vue.use(VueRouter)

const routes = [
  // {path: '/',name: 'home',component: Home},
  {path: '/jkh',name: 'jkh',component: jkh},
  {path: '/recommand',name: 'recommand',component: recommand},
  {path: '/change',name: 'change',component: change},
  {path: '/',component: index},
]

const router = new VueRouter({
  routes
})

export default router
