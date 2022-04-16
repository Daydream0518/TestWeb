import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'

class RequestPromise {
  constructor(executor) {
    this._promise = new Promise(executor)
    this._catchyPromise = Promise.resolve()
      .then(() => this._promise)
      .catch(err => {
        console.error(err)
      })
    // every method but 'constructor' from Promise.prototype
    const methods = ['then', 'catch', 'finally']
    for (const method of methods) {
      this[method] = function (...args) {
        this._promise = this._promise[method](...args)
        return this
      }
    }
  }
}

const Qs = require('qs')
// create an axios instance
const service = axios.create({
  timeout: 60000 // request timeout
})
var messageBoxCount = 0

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      Message({
        message: response.statusText || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(response.statusText || 'Error'))
    }

    const res = response.data
    return res
  },
  error => {
    if (!error.response) {
      return Promise.reject(new Error(error.message))
    }
    if (error.response.status === 401) {
      //  token过期，跳转登录页
      console.warn('无效或者过期的token。')
      if (messageBoxCount === 0) {
        // messageBoxCount = 1
        // MessageBox.confirm(language.t('request.message1'), language.t('request.title1'), {
        //   confirmButtonText: language.t('request.confirmBtn1'),
        //   cancelButtonText: language.t('button.cancel'),
        //   type: 'warning'
        // })
        //   .then(() => {
        //     messageBoxCount = 0
        //     store.dispatch('user/resetToken').then(() => {
        //       location.reload()
        //       // router.push('/login')
        //     })
        //   })
        //   .catch(action => {
        //     messageBoxCount = 0
        //   })
        return Promise.reject(new Error(error.message))
      }
    } else {
      //  其他错误，仅提示
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
  }
)

/**
 * @description 请求
 * @param {API} api API类型数据，查看/src/utils/api.js
 * @param {Bool} failShow 当success != '1'时，是否提示错误信息，默认为提示。
 * @param {Bool} failHandle 当为false时，不去检查sucess状态，直接返回。
 */
function request(api, failShow = true, failHandle = true) {
  var config = api.requestConfig
  config.paramsSerializer = function (params) {
    if (api.method === 'GET') {
      return Qs.stringify(params)
    } else {
      return Qs.stringify(params, {
        indices: false
      })
    }
  }
  if (api.data != null) {
    if (config.headers['Content-Type'].indexOf('application/x-www-form-urlencoded') > -1) {
      config.data = Qs.stringify(api.data)
    } else {
      config.data = api.data
    }
  }
  if (api.params != null) {
    config.params = api.params
  }
  api.loadingStart()

  return new RequestPromise((resolve, reject) => {
    service
      .request(config)
      .then(res => {
        api.loadingClose()
        if (failHandle === true) {
          if (res.success !== '1') {
            if (failShow === true) {
              Message({
                message: res.errorMsg,
                type: 'error',
                duration: 5 * 1000
              })
            }
            reject(res)
          }
        }
        resolve(res)
      })
      .catch(err => {
        api.loadingClose()

        reject(err)
      })
  })
}
export default request
