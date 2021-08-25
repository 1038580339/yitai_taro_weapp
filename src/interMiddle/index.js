import baseApi from './baseApi'
import personApi from './personApi'
import projectApi from './projectApi'
import toolApi from './toolApi'
import rewardApi from './rewardApi'

export default {
  ...baseApi,
  ...personApi,
  ...projectApi,
  ...toolApi,
  ...rewardApi
}
