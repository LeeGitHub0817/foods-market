import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入公共组件
import FootPart from "./components/Foot.vue";

Vue.config.productionTip = false

//设置公共组件footer
Vue.component("foot-part", FootPart);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
