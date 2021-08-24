import Taro from '@tarojs/taro'
import api from '../interMiddle';
import {
  HTTP_STATUS
} from './status'
import {
  base
} from './config'
// import { logError } from '../assets/js/utils.js'

const token = ''

export const logError = (name, action, info) => {
  if (!info) {
    info = 'empty'
  }
  try {
    let deviceInfo = wx.getSystemInfoSync()
    var device = JSON.stringify(deviceInfo)
  } catch (e) {
    console.error('not support getSystemInfoSync api', err.message)
  }
  let time = formatTime(new Date())
  console.error(time, name, action, info, device)
  // if (typeof action !== 'object') {
  // fundebug.notify(name, action, info)
  // }
  // fundebug.notifyError(info, { name, action, device, time })
  // if (typeof info === 'object') {
  //   info = JSON.stringify(info)
  // }
}

async function baseOptions(params, method = 'GET') {
  let {
    url,
    data
  } = params

  let token = Taro.getStorageSync('userInfo');
  if (token || String(url).indexOf('decrypt') !== -1 || String(url).indexOf('login') !== -1) {
    // options = {
    //   ...(options || {}),
    //   ['jeesite.session.id']: token.sessionid
    // }
  } else {
    let needCall = false;
    let res = await login();
    // Taro.login({
    //   success: res => {
    //     // let userInfo = await api.LOGIN({
    //     //   // wechatLogin: true,
    //     //   // code: res.code,
    //     //   username: 'admin',
    //     //   password: 'admin',
    //     //   mobileLogin: true,
    //     //   __ajax: true,
    //     // });
    //     res = res;
    //   }
    // })

    let userInfo = await Taro.request({
      isShowLoading: true,
      loadingText: '正在加载',
      url: base + '/a/login',
      data: {
        // username: 'thinkgem',
        // password: 'admin',
        // mobileLogin: true,
        wechatLogin: true,
        code: res.code,
        __ajax: true,
      },
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        token: token
      },
      success(res) {
        if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
          return logError('api', '请求资源不存在')
        } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
          return logError('api', '服务端出现了问题')
        } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
          return logError('api', '没有权限访问')
        } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
          return res.data
        }
      },
      error(e) {
        logError('api', '请求接口出现问题', e)
      }
    })
    console.log(userInfo);
    if (!userInfo.data.sessionid) {
      Taro.redirectTo({
        url: '/pages/login/index'
      })
      return;
    } else {
      await Taro.setStorageSync('userInfo', userInfo.data);
      needCall = true;
    }


    if (needCall) {
      // console.log(1);
      return baseOptions(params, method);
    }

  }




  // let token = getApp().globalData.token
  // if (!token) login()
  console.log('params', params)
  let contentType = 'application/x-www-form-urlencoded'
  contentType = params.contentType || contentType
  const option = {
    isShowLoading: false,
    loadingText: '正在加载',
    url: base + url,
    data: {
      ...(data || {}),
      'jeesite.session.id': token.sessionid
    },
    method: method,
    header: {
      'content-type': contentType,
      token: token
    },
    success(res) {
      if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
        return logError('api', '请求资源不存在')
      } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
        return logError('api', '服务端出现了问题')
      } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
        return logError('api', '没有权限访问')
      } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
        return res.data
      }
    },
    error(e) {
      logError('api', '请求接口出现问题', e)
    }
  }


  return Taro.request(option)
}


function login() {
  return new Promise((resolve, reject) => {
    Taro.login({
      success: res => {
        // let userInfo = await api.LOGIN({
        //   // wechatLogin: true,
        //   // code: res.code,
        //   username: 'admin',
        //   password: 'admin',
        //   mobileLogin: true,
        //   __ajax: true,
        // });
        resolve(res);
      }
    })
  })
}

export default {
  get(url, data = '') {
    let option = {
      url,
      data
    }
    return baseOptions(option)
  },
  post: function (url, data, contentType) {
    let params = {
      url,
      data,
      contentType
    }
    return baseOptions(params, 'POST')
  }
}
