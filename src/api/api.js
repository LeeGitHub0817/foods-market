import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

//封装好的接口方法
export default {
    //用户注册
    userRegister(params){
        return new Promise((resolve, reject) => {
            axios.post('/user/register', params).then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            })
        })
    }
}