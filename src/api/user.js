import require from '@/utils/request'

/**
 *
 * @param {string} id 用户ID
 * @returns
 */
export const userInfoAPI = (id) => require({
  url: `user-service/user/${id}`
})
