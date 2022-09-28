import require from '@/utils/request'

export const getCodeAPI = (clientToken) => {
  return require({
    url: `user-service/user/imageCode/${clientToken}`,
    responseType: 'blob'
  })
}

export const loginActionAPI = (data) => {
  // console.log(data)
  return require({
    url: 'user-service/user/login',
    method: 'POST',
    data
  })
}

