import { feth } from './utils'

const baseData = {
  FINDINTEGRATEPAGE: {
    url: '/a/api/integrate/ytdpIntegrate/findIntegratePage',
    method: 'get'
  },
  GETINTER: {
    url: '/a/api/integrate/ytdpIntegrate/getIntegrate',
    method: 'get'
  }
}

export default {
  FINDINTEGRATEPAGE: options => {
    return feth('FINDINTEGRATEPAGE', baseData['FINDINTEGRATEPAGE'], options)
  },
  GETINTER: options => {
    return feth('GETINTER', baseData['GETINTER'], options)
  }
}
