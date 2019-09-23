import axios from '../http.js';

export default {
  // 用户注册
  userRegister(params) {
    return new Promise((resolve, reject) => {
      axios.post('/user/register', params).then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 验证手机号是否已经注册
  checkPhoneNum(params) {
    return new Promise((resolve, reject) => {
      axios.post('/user/isRegister', params).then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 用户登录
  userLogin(params) {
    return new Promise((resolve, reject) => {
      axios.post('/user/login', params).then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 退出登录
  logout() {
    return new Promise((resolve, reject) => {
      axios.get('/user/logout').then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 判定用户是否已经登录
  isLogin() {
    return new Promise((resolve, reject) => {
      axios.get('/user/islogin').then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
    });
  },
}