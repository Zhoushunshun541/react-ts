import axios from 'axios'
import qs from 'qs'
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
    // 正常返回
    // 220  也属于成功请求  但是数据为空  所以单独拉出来判断下
    if (JSON.parse(res.request.response).status === 220) {
      res.data.status = 0
    } else {
      if (res.data.status === 200) {
        res.data.status = 1
      } else {
        res.data.status = 0
      }
    }
    return res.data
  },
  error => {
    // 异常返回 根据相应的状态码进行对应操作
    if (error.response && [403,404].includes(error.response.status)) {
      window.location.href = '/'
    }else{
      return error.response.data
    }
  }
)

export const sysLogin = (params: object) => {
  return http.post('/api/sys/login', qs.stringify(params))
}