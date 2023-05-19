import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const menuRoutes: RouteRecordRaw[] = [
  {
    path: '/DishAdvice',
    title: '推荐菜',
    component: () => import('@/views/DishAdvice'),
  },
  {
    path: '/DataSource',
    title: '数据源',
    component: () => import('@/views/DataSource'),
  },
  {
    path: '/Additional',
    title: '额外菜单',
    component: () => import('@/views/Additional'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/DishAdvice',
      component: () => import('@/layout'),
      children: menuRoutes,
    },
  ],
});

export { router as default, menuRoutes };
