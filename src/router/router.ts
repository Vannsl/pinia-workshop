import { createWebHistory, createRouter } from "vue-router";
import AnalyticsView from "@/views/AnalyticsView.vue";
import TodoView from "@/views/TodoView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: AnalyticsView,
  },
  {
    path: "/todo",
    name: "Todo",
    component: TodoView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
