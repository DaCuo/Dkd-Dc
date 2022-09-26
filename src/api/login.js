import request from '@/utils/request'

export const getCodeAPI = (clientToken) => {
  return request({
    url: `user-service/user/imageCode/${clientToken}`,
    responseType: 'blob'
  })
}

export const loginActionAPI = (data) => {
  // console.log(data)
  return request({
    url: 'user-service/user/login',
    method: 'POST',
    data
  })
}

