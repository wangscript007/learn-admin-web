import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/api/v1/mall/coupons/history',
    method:'get',
    params:params
  })
}
