import { feth } from './utils'

const baseData = {
  GETPROJECTINFO: {
    url: '/a/api/project/ytdpProject/getPorject',
    method: 'get'
  },
  APPLYPROJECT: {
    url: '/a/api/project/ytdpProject/applyPorject',
    method: 'get'
  }
}

export default {
  GETPROJECTINFO: options => {
    return feth('GETPROJECTINFO', baseData['GETPROJECTINFO'], options)
  },
  APPLYPROJECT: options => {
    return feth('APPLYPROJECT', baseData['APPLYPROJECT'], options)
  }
}
