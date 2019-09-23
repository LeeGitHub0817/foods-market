import axios from 'axios';

let instance = axios.create({timeout: 1000 * 10})  // 超时时间设置为10秒

if(process.env.NODE_ENV == 'development') {
  instance.defaults.baseURL = '192.168.0.108:3000';
}

instance.interceptors.request.use((config) => {
  // 这个地方可以配置请求带上token

  return config;
}, (error) => {
  Promise.error(error);
});

instance.interceptors.response.use((res) => {
  res.status == 200 ? Promise.resolve(res) : Promise.reject(res);
}, (error) => {
  // 错误信息相关处理

  Promise.reject(error);
});

export default instance;