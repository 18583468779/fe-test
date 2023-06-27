import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import { defineAsyncComponent } from "vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/project1View",
      name: "project1View",
      component: defineAsyncComponent(
        () => import(`../views/project1View/index.vue`)
      ),
    },
    {
      path: "/project2View",
      name: "project2View",
      component: defineAsyncComponent(
        () => import(`../views/project2View/index.vue`)
      ),
    },
    {
      path: "/project3View",
      name: "project3View",
      component: defineAsyncComponent(
        () => import(`../views/project3View/index.vue`)
      ),
    },
    {
      path: "/project4View",
      name: "project4View",
      component: defineAsyncComponent(
        () => import(`../views/project4View/index.vue`)
      ),
    },
  ],
});

export default router;
