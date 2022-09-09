import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/register",
    component: () => import("@/views/RegisterView.vue"),
  },
  {
    path: "/",
    component: () => import("@/views/HomeView.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
