import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomePage from "../views/HomePage.vue";
import Memories from "../pages/Memories.vue";

const routes = [
  {
    path: "/",
    redirect: "/memories",
  },
  {
    path: "/memories",
    component: Memories,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
