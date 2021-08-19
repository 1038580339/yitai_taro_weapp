import { feth } from './utils'

const baseData = {
  GETPROJECTINFO: {
    url: '/a/api/project/ytdpProject/getPorject',
    method: 'get'
  }
}

export default {
  GETPROJECTINFO: options => {
    return feth('GETPROJECTINFO', baseData['GETPROJECTINFO'], options)
  }
}
