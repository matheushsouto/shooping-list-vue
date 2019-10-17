import Vue from "vue";
import Router from "vue-router";
import Main from "./pages/Main";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Main
    },
    {
      path: "/product/:id",
      name: "product",
      props: true,
      component: () => import("./pages/Product")
    },
    {
      path: "/cattegorie/:id",
      name: "cattegorie",
      props: true,
      component: () => import("./pages/Cattegorie")
    }
  ]
});
