import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入公共组件
import FootPart from "./components/Foot.vue";
import HeadCom from "./components/head/Head.vue";

Vue.config.productionTip = false

//设置公共组件footer
Vue.component("foot-part", FootPart);
Vue.component('head-com', HeadCom);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
