import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/agenda",
      name: "agenda",
      component: () => import("../views/AgendaView.vue"),
    },
    {
      path: "/clientes",
      name: "clientes",
      component: () => import("../views/ClientesView.vue"),
    },
    {
      path: "/clientes/:userId",
      name: "clientes Perfil",
      component: () => import("../views/ClientesProfile.vue"),
    },
    {
      path: "/servicos",
      name: "servicos",
      component: () => import("../views/ServicosView.vue"),
    },
    {
      path: "/servicos/:servicoId",
      name: "Servicos Item",
      component: () => import("../views/ServicosItem.vue"),
    },
  ],
});

export default router;
