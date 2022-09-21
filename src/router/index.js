import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Auth.vue'),
    children: [
      {
        path: '/login',
        name:'Login',
        component: () => import ('@/views/auth/Index.vue')
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
