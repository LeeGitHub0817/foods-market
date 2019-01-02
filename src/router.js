import Vue from 'vue'
import Router from 'vue-router'

//引入自己定义的组件
import Home from './views/Home.vue';
import Types from "./views/Types.vue";
import CommonList from "./views/CommonList.vue";
import Cart from "./views/Cart.vue";
import UserCenter from "./views/UserCenter.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/types',
      name: 'types',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: Types
    },
    {
      path: '/commonlist',
      name: 'commonlist',
      component: CommonList
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/usercenter',
      name: 'usercenter',
      component: UserCenter
    }
  ]
})
