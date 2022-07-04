import request from '@/utils/request'
export const swipeApi = () => {
  return request({
    url: '/home/swiper'
  })
}
export const MyCityListApi = (level) => {
  return request({
    url: '/area/city',
    params: {
      level
    }
  })
}
export const hotCityApi = () => {
  return request({
    url: '/area/hot'
  })
}
