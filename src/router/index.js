import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import PropertyDetails from "@/views/Property_highllights/property-details.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/property-details",
    name: "property-details",
    component: PropertyDetails,
  },

  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
