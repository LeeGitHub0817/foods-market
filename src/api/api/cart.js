import axios from '../http.js';

export default {
  // 获取购物车列表
  getCartList() {
    return new Promise((resolve, reject) => {
      axios.get('/cart/cartlist').then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      })
    });
  }
}