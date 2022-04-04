// focus 后选中内容
export function autoFocus(e) {
  e.currentTarget.select()
}

// 身份证验证
export function validateCardId(cardId) {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  return reg.test(cardId)
}

// 手机号验证
export function validatePhone(phone) {
  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
  return reg.test(phone)
}

// %s 占位的字符串替换函数
export function printf(str, ...rest) {
  let i = 0
  return str.replace(/%s/g, function () {
    var val = rest[i++]
    return typeof val === 'undefined' ? '%s' : val
  })
}

export function longEnoughValue(value, limit = 1) {
  value = value + ''
  return hasChinese(value) || value.length > limit
}

function hasChinese(str) {
  var reg = new RegExp('[\\u4E00-\\u9FFF]+', 'g')
  return reg.test(str)
}

export function snakeToCamel(data) {
  if (Array.isArray(data)) return data.map((item) => snakeToCamel(item))
  if (Object(data) === data)
    return Object.fromEntries(Object.keys(data).map((key) => [snakeToCamelStr(key), snakeToCamel(data[key])]))
  return data
}

function snakeToCamelStr(str) {
  return str.replace(/_[a-z]/g, (s) => s[1].toUpperCase())
}

export function camelToSnake(data) {
  if (Array.isArray(data)) return data.map((item) => camelToSnake(item))
  if (Object(data) === data)
    return Object.fromEntries(Object.keys(data).map((key) => [camelToSnakeStr(key), camelToSnake(data[key])]))
  return data
}

function camelToSnakeStr(str) {
  return str.replace(/[A-Z]/g, (s) => '_' + s.toLowerCase())
}

export function downloadFile(obj, name, suffix) {
  const url = window.URL.createObjectURL(new Blob([obj]))
  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  const fileName = name + '.' + suffix
  link.setAttribute('download', fileName)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
