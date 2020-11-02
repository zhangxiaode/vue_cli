import Axios, { AxiosInstance } from 'axios'
import { Message } from 'element-ui'
class Ajax {
  private instance: AxiosInstance
  constructor() {
    var arr,reg=new RegExp("(^| )"+'csrfToken'+"=([^;]*)(;|$)");
    arr = document.cookie.match(reg) 
    Axios.defaults.headers = {
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
      // 'x-csrf-token': unescape(arr[2])
    }
    Axios.defaults.baseURL = '';
    // 请求超时的时间限制
    Axios.defaults.timeout = 10000;
    this.instance = Axios.create()
    this.initAxios()
  }
  private initParams(params:any) {
    // params.token = localStorage.getItem("token") // axios公共参数配置
    return params
  }
  private initAxios() {
    // 添加请求拦截器
    this.instance.interceptors.request.use((config: any) => {
      // 在发送请求之前做些什么
      // config.headers.Authorization = localStorage.getItem("token")
      // config.headers.Authorization = "token"
      return config
    }, function (error: any) {
      // 对请求错误做些什么
      return Promise.reject(error)
    })
    // 添加响应拦截器
    this.instance.interceptors.response.use((response: any) => {
      // 对响应数据做点什么
      if (response.data.code == 503) {
        // response.config.headers.Authorization = ""
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
  private handleMethod(method: String, request: Function, url: String, params: any) {
    var newParam: any = {}
    if (method == "get") {
      newParam = { params: this.initParams(params) }
    } else if (method == "post" || method == "put" || method == "patch") {
      newParam = this.initParams(params)
    } else if (method == "delete") {
      newParam = { data: this.initParams(params) }
    }
    return new Promise((resolve, reject) => {
      request(`${url}`, newParam).then((response: any) => {
        resolve(response.data)
      }).catch((error: any) => {
        reject(error)
      })
    })
  }
  public get(url: String, params: any) {
    return this.handleMethod("get", this.instance.get, url, params)
  }
  public post(url: String, params: any) {
    return this.handleMethod("post", this.instance.post, url, params)
  }
  public put(url: String, params: any) {
    return this.handleMethod("put", this.instance.put, url, params)
  }
  public patch(url: String, params: any) {
    return this.handleMethod("patch", this.instance.patch, url, params)
  }
  public delete(url: String, params: any) {
    return this.handleMethod("delete", this.instance.delete, url, params)
  }
}
export default new Ajax()
