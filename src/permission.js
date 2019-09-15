/* 
*** 该文件用来验证权限，路由表里面有些需要登录了才能访问。
*** 有些不需要，所以需要写个验证判断
*/

import router from './router';

// 定义一个路由白名单
const whiteList = ['/login', '/home', '/types', '/register', '/retrieve', '/productdetail', '/'];

router.beforeEach((to, from, next) => {
  // 读取cookie信息，看用户是否登录
  let loginInfo = {
    islogin: 'false'
  };
  if(document.cookie) {
    let cookieArray = document.cookie.split(';')
    for (let i = 0; i < cookieArray.length; i++) {
      if(cookieArray[i].split('=')[0] === 'islogin') {
        loginInfo.islogin = cookieArray[i].split('=')[1];
      }
    }
  }
  if(loginInfo.islogin === 'true'){ // 如果登录了也直接跳转
    next();
  }else { // 如果是在白名单里面直接跳转
    if(whiteList.indexOf(to.path) !== -1) {
      next();
    }else {
      next({path: '/login'})
    }
  }
});

