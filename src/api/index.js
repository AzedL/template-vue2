import request from '@/utils/request'

export function api(url, data) {
  return request({
    url,
    method: 'post',
    data,
  })
}
