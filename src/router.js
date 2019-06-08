import Vue from 'vue'
import Router from 'vue-router'

import App from "./App.vue";
//引入自己定义的组件
//使用懒加载方案，实现按需加载
const Home = r => require.ensure([], () => r(require('./views/Home.vue')), 'home');
const Types = r => require.ensure([], () => r(require('./views/Types.vue')), 'types');
const CommonList = r => require.ensure([], () => r(require('./views/CommonList')), 'commonlist');
const Cart = r => require.ensure([], () => r(require('./views/Cart.vue')), 'cart');
const UserCenter = r => require.ensure([], () => r(require('./views/UserCenter.vue')), 'usercenter');
const Login = r => require.ensure([], () => r(require('./views/user/Login')), 'login');
const Register = r => require.ensure([], () => r(require('./views/user/Register')), 'register');
const Retrieve = r => require.ensure([], () => r(require('./views/user/Retrieve')), 'retrieve');
const ProductDetail = r => require.ensure([], () => r(require('./views/ProductDetail')), 'productdetail');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children: [
        {
          path: 'home',
          redirect: '/', //路径输入home的话从定向到根路经
        },
        {
          path: "/",
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
        },
        {
          path: '/login',
          name: 'login',
          component: Login
        },
        {
          path: '/register',
          name: 'register',
          component: Register
        },
        {
          path: '/retrieve',
          name: 'retrieve',
          component: Retrieve
        },
        {
          path: '/productdetail',
          name: 'productdetail',
          component: ProductDetail
        }
      ]
    }
  ]
})
