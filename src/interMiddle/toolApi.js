import { feth } from './utils'

const baseData = {
  UPLOAD: {
    url:
      '/a/upload/imageRaw?type=1&jeesite.session.id=36e2c96fc7bb42699dfdc609c67d6295',
    method: 'post'
  }
}

export default {
  UPLOAD: options => {
    return feth('UPLOAD', baseData['UPLOAD'], options)
  }
}
