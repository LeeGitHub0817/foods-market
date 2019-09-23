import axios from '../http.js';

export default {
  // 商品详情页数据
  getProduct(params) {
    return new Promise((resolve, reject) => {
      axios.get('/product/productdetail', params).then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 分类页面产品数据
  getType(params) {
    return new Promise((resolve, reject) => {
      axios.get('/product/typelist', params).then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
    });
  },
}