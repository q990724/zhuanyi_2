/*
 * @Author: your name
 * @Date: 2019-11-24 00:07:15
 * @LastEditTime: 2019-11-24 21:40:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zhuanyi_2\zy\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import jkh from '../components/wtq/jkh'
import jswz from '../components/wtq/jswz'
import change from '../components/wtq/change'
import recommand from '../components/wtq/recommand'
import wz from '../components/wtq/wz'
import nowz from '../components/wtq/nowz'
import index from "../components/cfy/index"
import parent from "../views/cfy/parent"
import test from "../views/cfy/test"
import goGuaHao from "../components/cfy/goGuaHao/goGuaHao"
import login from "../components/mhp/login" //用户快速登录页面
import pwdLogin from "../components/mhp/pwdLogin" //密码登录页面
import chooseClass from "../components/cfy/chooseClass/chooseClass"
import me from "../components/mhp/me"
Vue.use(VueRouter)

const routes = [
  // {path: '/',name: 'home',component: Home},
  {path: '/jswz',name: 'jswz',component: jswz},
  {path: '/wz',name: 'wz',component: wz},
  {path: '/nowz',name: 'nowz',component: nowz},
  {path: '/jkh',name: 'jkh',component: jkh},
  {path: '/recommand',name: 'recommand',component: recommand},
  {path: '/change',name: 'change',component: change},
  {path: '/',component: index},
  {path: "/parent",component: parent},
  {path: '/login',component: login},
  {path: '/goGuahao',component: goGuaHao},
  {path: '/pwdLogin',component: pwdLogin},
  {path: "/chooseClass",component: chooseClass},
  {path: "/me",component: me}
]

const router = new VueRouter({
  routes
})

export default router
