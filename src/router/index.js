import Vue from "vue";
import VueRouter from "vue-router";
// 首页
import Home from "../components/home.vue";
// 关于我们
import About from "../views/About/About.vue";
// 咨询培训
import Training from "../views/training/training.vue";
// 论坛
import Forum from "../views/Forum/Forum.vue";
// 活动列表
import List from "../views/List/List.vue";
// 行业研究
import Research from "../views/research/research.vue";
// 热点推荐
import Recommend from "../views/recommend/recommend.vue";
// 明星推荐
import Star from "../views/Star/Star.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/Home" },

  {
    path: "/Home",
    component: Home,
    children: [
      { path: "/About", component: About },
      { path: "/training", component: Training },
      { path: "/Forum", component: Forum },
      { path: "/List", component: List },
      { path: "/research", component: Research },
      { path: "/recommend", component: Recommend },
      { path: "/Star", component: Star }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
