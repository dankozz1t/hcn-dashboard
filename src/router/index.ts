import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(""),

  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("@/views/MainView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
  ],
});

export default router;
