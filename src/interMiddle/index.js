import baseApi from './baseApi'
import personApi from './personApi'
import projectApi from './projectApi'
import toolApi from './toolApi'

export default {
  ...baseApi,
  ...personApi,
  ...projectApi,
  ...toolApi
}
