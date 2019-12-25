import axios from 'axios';
import store from '@/store';

// import Qs from 'qs';

// import { Fun } from '../api/Fun'

//配置axios 请求时长，及默认路径
//axios.defaults.timeout = 10000;
// axios.defaults.baseURL = 'http://show-admin.xiujianshen.com/admin';
// axios.defaults.baseURL = 'http://show-admin.xiujianshen.com/admin';
// axios.defaults.baseURL = 'https://xjs.xiujianshen.com/admin';
// axios.defaults.baseURL = 'https://test.xiujianshen.com/admin';
// axios.defaults.withCredentials = false;

//axios  request拦截器
axios.interceptors.request.use(config => {
        // Do something before request is sent  /admin/user/banned
        if (store.getters.token) {
            config.headers["Authorization"] = getToken(); // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
        }
        if (config.type == 'formData' || config.method != 'post') {
            return config
        }
        // config.data = Qs.stringify(config.data)
        return config;
    },
    error => {
        // Do something with request error
        console.log(error); // for debug
        Promise.reject(error);
    }
);

//axios response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error)
    }
)

//get请求方法封装
function FetchGet(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(response => {
            resolve(response.data);
        }).catch(err => {
            reject(err)
        })
    })
}


//post请求方法封装
function FetchPost(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(response => {
            resolve(response.data);
        }, err => {
            reject(err)
        })
    })
}


//put请求方法封装
function FetchPut(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data).then(response => {
            resolve(response.data);
        }, err => {
            reject(err)
        })
    })
}

export {FetchGet, FetchPost, FetchPut}
