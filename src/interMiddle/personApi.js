import { feth } from './utils'

const baseData = {
  GETUSERINFO: {
    url: '/a/api/user/ytdpUser/getUserInfo',
    method: 'get'
  },
  SAVEUSERINFO: {
    url: '/a/api/user/ytdpUser/saveUserInfo',
    method: 'post'
  },
  GETFACERECOGNITIONFUCTION: {
    url: '/a/api/system/ytdpSystemParameter/getFaceRecognitionFunction',
    method: 'get'
  },
  FACECHECK: {
    url: '/a/api/user/ytdpUser/faceIdentification',
    method: 'get'
  }
}

export default {
  GETUSERINFO: options => {
    return feth('GETUSERINFO', baseData['GETUSERINFO'], options)
  },
  SAVEUSERINFO: options => {
    return feth('SAVEUSERINFO', baseData['SAVEUSERINFO'], options)
  },
  GETFACERECOGNITIONFUCTION: options => {
    return feth(
      'GETFACERECOGNITIONFUCTION',
      baseData['GETFACERECOGNITIONFUCTION'],
      options
    )
  },
  FACECHECK: options => {
    return feth('FACECHECK', baseData['FACECHECK'], options)
  }
}
