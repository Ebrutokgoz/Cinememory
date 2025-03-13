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
  {
    path: "/memories/:id",
    component: () => import("../pages/MemoryDetails.vue"),
  },
  {
    path: "/memories/add",
    component: () => import("../pages/AddMemory.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
