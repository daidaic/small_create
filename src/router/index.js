import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/home.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/Home"},
    
      { path: "/Home", component: Home, children: [
        { path: "/About", component: About }
      ] },
     
   
];

const router = new VueRouter({
  routes
});

export default router;
