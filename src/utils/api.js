import request from './request.js'
import store from '@/store'
import { Loading } from 'element-ui'

/* 使用说明：
  参考示例，src/api/user.js,src/store/modules/user.js
  **
  实例化API，例如let loginApi = API.POST('xx/login.action',{'userName':'zhangsan','pwd':'123456'})
  方式一：
  1.improt api.js 和 request.js
  2.调用request(loginApi).then().catch()
  方式二：
  1.improt api.js
  2.调用loginApi.request().then().catch()
*/
const baserul = {
  BASE_URL_DEV: 'http://192.168.32.20:4000/mock/145/',
  BASE_URL: 'http://192.168.32.20:4000/mock/145/'
}

const config = {
  baseURL: function () {
    // baseURL配置在.env.xxxxx文件中
    if (process.env.NODE_ENV === 'development') {
      // 通过proxy代理解决跨域问题（只在开发环境生效）
      return baserul.BASE_URL_DEV
    } else {
      return baserul.BASE_URL
    }
  },
  headers: function () {
    var headers = {}
    if (store.getters.token) {
      headers['token'] = store.getters.token
    }
    return headers
  }
}

const RequestType = {
  form: 'application/x-www-form-urlencoded',
  json: 'application/json',
  multipart: 'multipart/form-data',
  text: 'text/plain'
}

class API {
  constructor(baseURL, path, method) {
    this.requestConfig = {
      baseURL: baseURL,
      method: method,
      url: path,
      headers: config.headers()
    }
    // this.baseURL = baseURL
    // this.method = method
    // this.path = path
    // this.headers = config.headers()
    this.mockEnable = false
    this.showFailMessage = true //
  }
  static baseURL() {
    return config.baseURL()
  }
  /**
   * @description Post方法,注意，data参数将放在body中，且此时要注意content-type，默认为form,若要求改，可以链式调用.json()。若要拼在URL中，请链式调用setParams()方法。
   * @param {String} path 方法名
   * @param {Obj} data Body传参，将会根据requestType编码后放请求体中。
   * @param {String} requestType 配置请求体body的编码方式，默认为form，当data参数有值时生效。 设置后相当于给请求头head中添加'Content-Type'
   */
  static POST(path, data, requestType = 'form') {
    var api = new API(config.baseURL(), path, 'POST')
    if (data != null) {
      api.data = data
    }
    api.setRequestType(RequestType[requestType])
    return api
  }
  static GET(path, params) {
    var api = new API(config.baseURL(), path, 'GET')
    api.params = params
    return api
  }
  setBaseURL(bl) {
    this.requestConfig.baseURL = bl
    return this
  }
  setParams(params) {
    this.params = params
    return this
  }
  setData(data) {
    this.data = data
    return this
  }
  addHeaders(headers) {
    this.requestConfig.headers = {
      ...this.requestConfig.headers,
      ...headers
    }
    return this
  }
  resetHeaders(headers) {
    this.requestConfig.headers = headers
    return this
  }
  /**
   * 设置过期时间
   * @param {int} time 单位是毫秒，0表示无超时时间
   */
  setTimeout(time) {
    this.requestConfig.timeout = time
    return this
  }
  /**
   * 可以mock数据
   */
  setMock(enable) {
    this.mockEnable = enable || true
    this.requestConfig.baseURL = '/dev-api'
    return this
  }
  // 设置body编码方式
  setRequestType(type) {
    this.addHeaders({
      'Content-Type': type
    })
    return this
  }
  form() {
    this.setRequestType(RequestType.form)
    return this
  }
  json() {
    this.setRequestType(RequestType.json)
    return this
  }
  text() {
    this.setRequestType(RequestType.text)
    return this
  }
  multipart() {
    this.setRequestType(RequestType.multipart)
    return this
  }
  setResponseType(responseType) {
    this.requestConfig.responseType = responseType
    return this
  }
  addRequestConfig(key, value) {
    this.requestConfig[key] = value
    return this
  }
  //
  disableShowFail() {
    this.showFailMessage = false
    return this
  }
  diableHandleFail() {
    this.handleFail = false
    return this
  }
  request() {
    return request(this, this.showFailMessage, this.handleFail)
  }
  loading(doms) {
    // console.log(doms)
    if (!doms) {
      console.error('API.loading()方法中传入的ref为空，检查是否是在created中调用了接口，改为在mounted中调用')
      return this
    }
    if (Array.isArray(doms)) {
      this.loadingDoms = doms
    } else {
      this.loadingDoms = [doms]
    }
    function addAcloading(dom) {
      dom.acLoading = () => {
        var options = { target: dom, customClass: 'el-loading-custom' }
        if (!dom.loadingNumber) {
          dom.loadingNumber = 1
          dom.loadingInstance = Loading.service(options)
        } else {
          dom.loadingNumber++
        }
      }
      dom.acLoadingClose = () => {
        dom.loadingNumber--
        if (dom.loadingNumber === 0) {
          dom.loadingInstance.close()
          dom.loadingInstance = null
        }
      }
    }
    // console.log(this.loadingDoms)
    this.loadingDoms.forEach(dom => {
      if (!dom.acLoading) {
        addAcloading(dom)
      }
    })
    return this
  }
  loadingStart() {
    if (!this.loadingDoms) {
      return
    }
    this.loadingDoms.forEach(dom => {
      console.log(dom)
      dom.acLoading()
    })
  }
  loadingClose() {
    if (!this.loadingDoms) {
      return
    }
    this.loadingDoms.forEach(dom => {
      dom.acLoadingClose()
    })
  }
}

export default API
