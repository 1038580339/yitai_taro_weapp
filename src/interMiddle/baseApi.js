import {
  feth
} from './utils'

const baseData = {
  LOGIN: {
    url: '/a/login',
    method: 'post'
  },
  LOGOUT: {
    url: 'https://ytdp.ilonaltd.comytdp/a/wxLogout',
    method: 'get'
  },
  PROJECTPAGE: {
    url: '/a/api/project/ytdpProject/findProjectPage',
    method: 'get'
  },
  GETUSERINFO: {
    url: '/a/api/user/ytdpUser/getUserInfo',
    method: 'get'
  },
  FINDPROJECTTYPE: {
    url: '/a/api/project/ytdpProject/findProjectType',
    method: 'get'
  },
  DECRYPT: {
    url: '/wx/decryptPhoneNumber',
    method: 'get'
  }
}

export default {
  LOGIN: options => {
    return feth('LOGIN', baseData['LOGIN'], options)
  },
  LOGOUT: options => {
    return feth('LOGOUT', baseData['LOGOUT'], options)
  },
  PROJECTPAGE: options => {
    return feth('PROJECTPAGE', baseData['PROJECTPAGE'], options)
  },
  GETUSERINFO: options => {
    return feth('GETUSERINFO', baseData['GETUSERINFO'], options)
  },
  FINDPROJECTTYPE: options => {
    return feth('FINDPROJECTTYPE', baseData['FINDPROJECTTYPE'], options)
  },
  DECRYPT: options => {
    return feth('DECRYPT', baseData['DECRYPT'], options)
  },
}
