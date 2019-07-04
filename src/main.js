import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入公共组件
import FootPart from "./components/Foot.vue";
import HeadCom from "./components/head/Head.vue";
//引入vant ui组件
import { Icon, Stepper, Field, Cell, CellGroup, Toast } from "vant";

Vue.config.productionTip = false

//设置公共组件footer
Vue.component("foot-part", FootPart);
Vue.component('head-com', HeadCom);
//使用vant组件
Vue.use(Icon).use(Stepper).use(Field).use(Cell).use(CellGroup).use(Toast);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
