import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
/* eslint-disable no-new */

// 0. 如果使用模块化机制编程， 要调用 Vue.use(VueRouter)
Vue.use(VueRouter)
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
import Home from './view/Home'
import Interest from './view/Interest'
import MyTask from './view/MyTask'
import PersonalCenter from './view/PersonalCenter'

import TaskDoing from './components/TaskDoing'
import TaskEnding from './components/TaskEnding'
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/', component: App },
  { path: '/home', component: Home },
  { path: '/myTask',
    component: MyTask,
    children: [
      { path: '/', component: TaskDoing },
      { path: 'TaskDoing', component: TaskDoing },
      { path: 'TaskEnding', component: TaskEnding }
    ]
  },
  { path: '/interest', component: Interest },
  { path: '/personalCenter', component: PersonalCenter }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
  router,
  template: '' +
  '<transition mode="out-in">' +
    '<router-view ></router-view>' +
  '</transition>'
}).$mount('#app')

// 现在，应用已经启动了！
