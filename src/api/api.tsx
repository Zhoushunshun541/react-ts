import axios from 'axios'
import qs from 'qs'
const allUrl = window.document.location.href;
const pathName = window.document.location.pathname;
const urlRoute = allUrl.indexOf(pathName);
const baseUrl = allUrl.substring(0, urlRoute);
const http = axios.create({
  // baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API + '' : '',
  baseURL: process.env.VUE_APP_API,
  timeout:30000
})

// 拦截器  请求之前做点啥
// http.interceptors.request.use(
//   error => {
//     return Promise.reject(error)
//   }
// )
// 返回的时候拦截一下
http.interceptors.response.use(
  res => {
    if (+res.data.code === 200) {
      res.data.status = 1
    } else {
      res.data.status = 0
    }
    if ([403,404].includes(res.data.code)) {
      // window.location.href = baseUrl
    }
    return res.data
  },
  error => {
    // 异常返回 根据相应的状态码进行对应操作

  }
)

export const sysLogin = (params: object) => {
  console.log(params);
  
  return http.post('/api/sys/login', qs.stringify(params))
}