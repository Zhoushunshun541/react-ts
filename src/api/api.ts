import axios from 'axios'
import qs from 'qs'
import router from '../router/router'
const http = axios.create({
  baseURL:'',
  timeout:30000
})

// 拦截器  请求之前做点啥
http.interceptors.request.use(
  error => {
    return Promise.reject(error)
  }
)
// 返回的时候拦截一下
http.interceptors.response.use(
  res => {
    if (+res.data.code === 200) {
      res.data.status = 1
    } else {
      res.data.status = 0
    }
    switch (res.data.code) {
      case 403:
        break
      case 404:
        break
    }
    return res.data
  },
  error => {
    // 异常返回 根据相应的状态码进行对应操作

  }
)

export const sysLogin = (params: object) => {
  return http.post('/sys/login', qs.stringify(params))
}