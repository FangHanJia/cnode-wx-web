import axios from "axios";
import qs from "qs";
import errorHandle from './errorHandle';
import { Notify } from "vant";

axios.defaults.baseURL = process.env.BASE_API;
//post请求头
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
//设置超时
axios.defaults.timeout = 10000;
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  response => {
    if (response.status == 200) {
      return Promise.resolve(response);
    } else {
      errorHandle(response);
      return Promise.reject(response);
    }
  },
  error => {}
);
export default {
  post(url, data) {
    if (!url) return Notify({ type: "danger", message: "请输入API" });
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: qs.stringify(data),
      })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        });
    })
  },
  get(url, data) {
    if (!url) return Notify({ type: "danger", message: "请输入API" });
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: data,
      })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
};
