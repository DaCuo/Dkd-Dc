
import { loginActionAPI } from '@/api'
export default {
  namespaced: true,
  state: {
    token: null,
    userInfoMsg: {}
  },
  mutations: {
    SET_TOKEN(state, token) {
      // console.log(token)
      state.token = token
    },
    SET_USER_INFO_MSG(state, userInfoMsg) {
      state.userInfoMsg = userInfoMsg
    }
  },
  actions: {
    async loginAction({ commit }, userData) {
      const { data } = await loginActionAPI(userData)
      console.log(data)
      commit('SET_TOKEN', data.token)
      commit('SET_USER_INFO_MSG', data)
    }
  }
}
