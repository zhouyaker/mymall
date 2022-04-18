import axios from 'axios'
// 封装
export function request(config) {
  return new Promise((resolve, reject) => {
    // 创建axios实例
    const instance = axios.create({
      baseURL: 'http://127.0.0.1:3000',
      timeout: 5000
    })

    // 配置拦截器
    instance.interceptors.response.use(res => {
      return res.data
    }, err => {
      console.log(err)
    })
    // 使用axios实例发送请求
    instance(config).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}