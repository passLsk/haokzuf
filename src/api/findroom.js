import request from '@/utils/request'
export const findroomApi = ({ cityId }) => {
  return request({
    url: '/houses',
    params: {
      cityId
    }
  })
}
