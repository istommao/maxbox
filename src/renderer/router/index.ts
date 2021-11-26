import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Home from '@renderer/views/index.vue'
import Page404 from '@renderer/views/404.vue'

import JsonToolPage from '@renderer/views/JsonTool.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    component: Page404,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/JsonTool',
    name: 'JsonTool',
    component: JsonToolPage,
  },
]

export default createRouter({
  history: createWebHashHistory(), // Importantly, createWebHashHistory() use for redirect multi window,
  routes: routes,
})
