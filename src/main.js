import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入公共组件
import FootPart from "./components/Foot.vue";
import HeadCom from "./components/head/Head.vue";
// 引入vant ui组件
import { Icon, Stepper, Field, Cell, CellGroup, Toast, Button,
  Switch, Popup, Area, AddressList, RadioGroup, Radio } from "vant";

Vue.config.productionTip = false

// 设置公共组件footer
Vue.component("foot-part", FootPart);
Vue.component('head-com', HeadCom);
// 使用vant组件
Vue.use(Icon).use(Stepper).use(Field).use(Cell).use(CellGroup).use(Toast).use(Button)
  .use(Switch).use(Popup).use(Area).use(AddressList).use(RadioGroup).use(Radio);

// 引入组件
import loaddingPop from './components/loading/load.js';
// 在原型链上设置公告方法
Vue.prototype.$loadding = loaddingPop;

// 路由权限
import './permission.js';

// 手机上判断底部按钮位置（弹出键盘时会把底部fixed部分顶上去）
var nowHeight = window.innerHeight;
window.addEventListener('resize', function() {
  if(document.getElementById('fixed_part')) {
    if(window.innerHeight < nowHeight) {
      document.getElementById('fixed_part').style.position = 'static';
    }else {
      document.getElementById('fixed_part').style.position = 'fixed';
    }
  }
}, false);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
