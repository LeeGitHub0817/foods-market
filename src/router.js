import Vue from 'vue'
import Router from 'vue-router'

import App from "./App.vue";
//引入自己定义的组件
//使用懒加载方案，实现按需加载
const Home = r => require.ensure([], () => r(require('./views/Home')), 'home');
const Types = r => require.ensure([], () => r(require('./views/Types')), 'types');
const CommonList = r => require.ensure([], () => r(require('./views/CommonList')), 'commonlist');
const Cart = r => require.ensure([], () => r(require('./views/Cart')), 'cart');
const UserCenter = r => require.ensure([], () => r(require('./views/UserCenter')), 'usercenter');
const Login = r => require.ensure([], () => r(require('./views/user/Login')), 'login');
const Register = r => require.ensure([], () => r(require('./views/user/Register')), 'register');
const Retrieve = r => require.ensure([], () => r(require('./views/user/Retrieve')), 'retrieve');
const ProductDetail = r => require.ensure([], () => r(require('./views/ProductDetail')), 'productdetail');
const ConfirmOrder = r => require.ensure([], () => r(require('./views/orders/ConfirmOrder')), 'confirmorder');
const EditAddress = r => require.ensure([], () => r(require('./views/user/EditAddress')), 'editaddress');
const ManageAddress = r => require.ensure([], () => r(require('./views/user/ManageAddress')), 'manageaddress');
const CashierDesk = r => require.ensure([], () => r(require('./views/orders/CashierDesk')), 'cashierdesk');
const OrderSubmit = r => require.ensure([], () => r(require('./views/orders/OrderSubmit')), 'ordersubmit');
const OrderList = r => require.ensure([], () => r(require('./views/orders/OrderList')), 'orderlist');
const OrderDetail = r => require.ensure([], () => r(require('./views/orders/OrderDetail')), 'orderdetail');
const UserInfo = r => require.ensure([], () => r(require('./views/user/UserInfo.vue')), 'userinfo');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
        },
        {
          path: '/confirmorder',
          name: 'confirmorder',
          component: ConfirmOrder
        },
        {
          path: '/editaddress',
          name: 'editconfirm',
          component: EditAddress
        },
        {
          path: '/manageaddress',
          name: 'manageaddress',
          component: ManageAddress
        },
        {
          path: '/cashierdesk',
          name: 'cashierdesk',
          component: CashierDesk
        },
        {
          path: '/ordersubmit',
          name: 'ordersubmit',
          component: OrderSubmit
        },
        {
          path: '/orderlist',
          name: 'orderlist',
          component: OrderList
        },
        {
          path: '/orderdetail',
          name: 'orderdetail',
          component: OrderDetail
        },
        {
          path: '/userinfo',
          name: 'userinfo',
          component: UserInfo
        }
      ]
    }
  ]
})
