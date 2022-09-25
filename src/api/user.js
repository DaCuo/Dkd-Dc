import request from '@/utils/request'

export const getCodeAPI = (clientToken) => {
  return request({
    url: `user-service/user/imageCode/${clientToken}`,
    responseType: 'blob'
  })
}

export const loginActionAPI = (loginName, password, code, clientToken) => {
  return request({
    url: 'user-service/user/login',
    method: 'POST',
    data: {
      loginName,
      password,
      code,
      clientToken,
      loginType: 0
    }
  })
}

