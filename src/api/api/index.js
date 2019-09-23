/**
 * api接口的出口管理文件 
**/
import axios from '../http.js';
import product from './home.js';
import user from './user.js';
import cart from './cart.js';

export default {
  product,
  user,
  cart,
  // 通用不带参数请求
  common_request(url) {
    return new Promise((resolve, reject) => {
      axios.get(url).then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      })
    });
  },
}

