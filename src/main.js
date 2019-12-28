import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//全局css引入
import css from "./assets/my_css/my_css.css";
// 导入elementui全局组件
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
// 导入字体图标
import Font from './assets/font/iconfont.css'
// 引入头
import Header from './components/header/header.vue'
import Footer from './components/footer/footer.vue'

Vue.config.productionTip = false;

Vue.use(ElementUI);
// 头部组件引入
Vue.component('tou',Header)
// 底部组件引入
Vue.component('jio',Footer)
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
