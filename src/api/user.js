import request from '@/utils/request'

export const getCodeAPI = (clientToken) => {
  return request({
    url: `api/user-service/user/imageCode/${clientToken}`
  })
}
