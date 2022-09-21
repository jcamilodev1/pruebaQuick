import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "",
    name: "Dashboard",
    component: () => import("@/views/dashboard/Index.vue"),
  },
  {
    path: "/servicing",
    name: "Servicing",
    component: () => import("@/views/servicing/Index.vue"),
  },
  {
    component: () => import("@/layouts/Auth.vue"),
    children: [
      {
        path: "/login",
        name: "Login",
        component: () => import("@/views/auth/Index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
const existToken = () => {
  return localStorage.getItem('token');
}

router.beforeEach((to, from, next) => {
  const token = existToken()
  if (to.name !== 'Login' && !token) next({ name: 'Login' })
  next()
});
export default router;
