/* 
*** 该文件用来验证权限，路由表里面有些需要登录了才能访问。
*** 有些不需要，所以需要写个验证判断
*/

import router from './router'

router.beforeEach((to, from, next) => {
  if(to.path.indexOf('usercenter') !== -1) {
    console.log(to)
  }
  next()
});

