import router from '@/router'
import { Notify } from 'vant'

/**
 * 请求失败后的错误统一处理
 * @param {Object} err 请求失败的状态
 */
export default err => {
  // 状态码判断
  if (err && err.response) {
    switch (err.response.status) {
      case 401:
        Notify({ type: 'danger', message: '登录过期，请重新登录！' })
        router.push('/login')
        // store.dispatch('Logout').then(() => {
        //   router.push('/login')
        // })
        break
      case 400:
        Notify({ type: 'danger', message: '错误请求' })
        break
      case 403:
        Notify({ type: 'danger', message: '拒绝访问' })
        break
      case 404:
        Notify({ type: 'danger', message: '请求错误,未找到该资源' })
        break
      case 405:
        Notify({ type: 'danger', message: '请求方法未允许' })
        break
      case 408:
        Notify({ type: 'danger', message: '请求超时' })
        break
      case 500:
        Notify({ type: 'danger', message: '服务器端出错' })
        break
      case 501:
        Notify({ type: 'danger', message: '网络未实现' })
        break
      case 429:
        Notify({
          type: 'danger',
          message: '前方拥挤，参与报名的用户太热情了，请稍等片刻'
        })
        break
      case 502:
        Notify({
          type: 'danger',
          message: '前方拥挤，参与报名的用户太热情了，请稍等片刻'
        })
        break
      case 503:
        Notify({ type: 'danger', message: '服务不可用' })
        break
      case 504:
        Notify({
          type: 'danger',
          message: '前方拥挤，参与报名的用户太热情了，请稍等片刻'
        })
        break
      case 505:
        Notify({ type: 'danger', message: 'http版本不支持该请求' })
        break
      default:
        Notify({ type: 'danger', message: `连接错误${err.response.status}` })
    }
  } else {
    Notify({ type: 'danger', message: '当前网络不稳定，请稍候再试' })
  }
}
