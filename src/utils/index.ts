export const baseUrl = './'

const formatNumber = (n: Number) => {
  var num: String = n.toString()
  return num[1] ? num : '0' + num
}

export function formatDateTime(date: Date) {
  const year: Number = date.getFullYear()
  const month: Number = date.getMonth() + 1
  const day: Number = date.getDate()
  const hour: Number = date.getHours()
  const minute: Number = date.getMinutes()
  const second: Number = date.getSeconds()
  return (
    [year, month, day].map(formatNumber).join('.') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}
