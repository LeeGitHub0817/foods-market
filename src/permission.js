/* 
*** 该文件用来验证权限，路由表里面有些需要登录了才能访问。
*** 有些不需要，所以需要写个验证判断
*/

import router from './router';
import api from './api/api.js';

// 定义一个路由白名单
const whiteList = ['/login', '/home', '/types', '/register', '/retrieve', '/productdetail'];

router.beforeEach((to, from, next) => {
  let a = true;
  
  if(a){ // 如果登录了也直接跳转
    next();
  }else { // 如果是在白名单里面直接跳转
    if(whiteList.indexOf(to.path) !== -1) {
      next();
    }else {
      next({path: '/login'})
    }
  }
});

