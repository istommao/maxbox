import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Home from '@renderer/views/index.vue'
import Page404 from '@renderer/views/404.vue'

import JsonToolPage from '@renderer/views/JsonTool.vue';
import SQLitePage from '@renderer/views/SQLite.vue';
import QRCodePage from '@renderer/views/QRCode.vue';
import TextBoxPage from '@renderer/views/TextBox.vue';

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
    path: '/TextBox',
    name: 'TextBox',
    component: TextBoxPage,
  },
  {
    path: '/JsonTool',
    name: 'JsonTool',
    component: JsonToolPage,
  },
  {
    path: '/SQLite',
    name: 'SQLite',
    component: SQLitePage,
  },
  {
    path: '/QRCode',
    name: 'QRCode',
    component: QRCodePage,
  }
]

export default createRouter({
  history: createWebHashHistory(), // Importantly, createWebHashHistory() use for redirect multi window,
  routes: routes,
})
