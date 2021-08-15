import { feth } from './utils'

const baseData = {
  LOGIN: {
    url: '/ytdp/a/login',
    method: 'post'
  },
  LOGOUT: {
    url: 'https://ytdp.ilonaltd.comytdp/a/wxLogout',
    method: 'get'
  }
}

export default {
  LOGIN: options => {
    return feth('LOGIN', baseData['LOGIN'], options)
  },
  LOGOUT: options => {
    return feth('LOGOUT', baseData['LOGOUT'], options)
  }
}
