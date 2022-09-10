import { useAuthStore } from "@/stores/auth";
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

router.beforeEach(async (to) => {
  const authStore = useAuthStore();
  useAuthStore.loadingSession = true;
  const currentUser = await authStore.currentUser();
  if (!currentUser && to.path !== "/login" && to.path !== "/register") {
    authStore.loadingSession = false;
    return { path: "/login" };
  } else {
    authStore.loadingSession = false;
  }
});

export default router;
