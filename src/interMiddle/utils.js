import api from '../service/api'

function getUrl (baseData) {
  return baseData.url
}

function getMethod (baseData) {
  return api[baseData.method]
}

export const feth = function (key, baseData, options) {
  const method = getMethod(baseData)
  const url = getUrl(baseData)
  return method(url, options)
}
