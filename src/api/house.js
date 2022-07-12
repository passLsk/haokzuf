import request from '@/utils/request'
export const houseParamsApi = () => {
  return request({
    url: '/houses/params'
  })
}
