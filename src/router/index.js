import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "",
    component: () => import("@/layouts/Main.vue"),
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: () => import("@/views/dashboard/Index.vue"),
      },
    ],
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
  return true
  return !!localStorage.token;
}

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && existToken()) next({ name: 'Login' })
  // if the user is not authenticated, `next` is called twice
  next()
});
export default router;
