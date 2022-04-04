import axios from 'axios'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const request = axios.create()

request.interceptors.request.use(
  (config) => {
    NProgress.start()

    !config.timeout && (config.timeout = 60000)

    config.url = process.env.VUE_APP_BASE_API + config.url

    if (config.params) {
      let url = config.url + '?'
      for (const propName of Object.keys(config.params)) {
        const value = config.params[propName]
        var part = encodeURIComponent(propName) + '='
        if (value !== null && typeof value !== 'undefined') {
          if (typeof value === 'object') {
            for (const key of Object.keys(value)) {
              let params = propName + '[' + key + ']'
              var subPart = encodeURIComponent(params) + '='
              url += subPart + encodeURIComponent(value[key]) + '&'
            }
          } else {
            url += part + encodeURIComponent(value) + '&'
          }
        }
      }
      url = url.slice(0, -1)
      config.params = {}
      config.url = url
    }

    return config
  },
  (error) => {
    Promise.reject(error)
    NProgress.done()
  }
)

request.interceptors.response.use(
  (res) => {
    if (!res.data.code || res.data.code === 200) {
      NProgress.done()
      return res.data
    } else {
      return errorHandler(res.data.message)
    }
  },
  (error) => {
    let { message, config } = error
    if (message.includes('timeout')) {
      message = '接口超时'
      config.timeoutCB && config.timeoutCB()
    } else if (message.includes('Request failed with status code')) {
      message = '接口' + message.substr(message.length - 3) + '异常'
    }
    return errorHandler(message)
  }
)

function errorHandler(msg, error = new Error(msg)) {
  NProgress.done()
  return Promise.reject(error)
}

export default request
