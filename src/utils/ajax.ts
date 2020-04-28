import axios from 'axios'
import { Message } from 'element-ui'
class Ajax {
  private baseUrl: String = '';
  private instance: any = axios.create({})
  constructor() {
    axios.defaults.headers = {
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8'
    }
    this.initAxios()
  }
  private initParams(params:any) {
    // params.token = '123' // axios公共参数配置
    return params
  }
  private initAxios() {
    // 添加请求拦截器
    this.instance.interceptors.request.use((config: any) => {
      // 在发送请求之前做些什么
      return config
    }, function (error: any) {
      // 对请求错误做些什么
      return Promise.reject(error)
    })
    // 添加响应拦截器
    this.instance.interceptors.response.use((response: any) => {
      // 对响应数据做点什么
      if (response.data.code == 503) {
        window.location.hash = "#/login"
      } else if (response.data.code == 200) {
        return response
      } else {
        Message.error(response.data.message)
        return response
      }
    }, function (error: any) {
      // 对响应错误做点什么
      return Promise.reject(error)
    })
  }
  private handleMethod(method: String, url: String, params: any) {
    var newParam: any = {}
    if (method == "get") {
      newParam = { params: this.initParams(params) }
    } else if (method == "post" || method == "put" || method == "petch") {
      newParam = this.initParams(params)
    } else if (method == "delete") {
      newParam = { data: this.initParams(params) }
    }
    return new Promise((resolve, reject) => {
      this.instance[`${method}`](`${this.baseUrl}${url}`, newParam).then((response: any) => {
        resolve(response.data)
      }).catch((error: any) => {
        reject(error)
      })
    })
  }
  public get(url: String, params: any) {
    return this.handleMethod("get", url, params)
  }
  public post(url: String, params: any) {
    return this.handleMethod("post", url, params)
  }
  public put(url: String, params: any) {
    return this.handleMethod("put", url, params)
  }
  public patch(url: String, params: any) {
    return this.handleMethod("patch", url, params)
  }
  public delete(url: String, params: any) {
    return this.handleMethod("delete", url, params)
  }
}
export default new Ajax()
