import * as Router from "vue-router";
import TrafficLight from "./components/TrafficLight";

const router = Router.createRouter({
  history: Router.createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/red",
    },
    {
      path: "/red",
      component: TrafficLight,
      props: {
        activeColor: "red",
        timeout: 10000,
      },
    },
    {
      path: "/yellow",
      component: TrafficLight,
      props: {
        activeColor: "yellow",
        timeout: 3000,
      },
    },
    {
      path: "/green",
      component: TrafficLight,
      props: {
        activeColor: "green",
        timeout: 15000,
      },
    },
    {
      path: "/:pathMatch(.*)",
      component: { template: "<h1>Page not found!</h1>" },
    },
  ],
});

export default router;
