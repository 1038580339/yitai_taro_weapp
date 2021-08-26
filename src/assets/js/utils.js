// import { formatTime } from './common'

/**
 *
 * @param {string} name 错误名字
 * @param {string} action 错误动作描述
 * @param {string} info 错误信息，通常是 fail 返回的
 */

// export const formatTime = date => {
//   const year = date.getFullYear()
//   const month = date.getMonth() + 1
//   const day = date.getDate()
//   const hour = date.getHours()
//   const minute = date.getMinutes()
//   const second = date.getSeconds()

//   return (
//     [year, month, day].map(formatNumber).join('/') +
//     ' ' +
//     [hour, minute, second].map(formatNumber).join(':')
//   )
// }

export const timestampToTime = timestamp => {
  var date = new Date(timestamp) //时间戳为10位需*1000，时间戳为13位的话不需乘1000

  let Y = date.getFullYear() + '-'

  let M =
    (date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) + '-'

  let D = date.getDate() + ' '

  let h = date.getHours() + ':'

  let m = date.getMinutes() + ':'

  let s = date.getSeconds()

  return Y + M + D
}
