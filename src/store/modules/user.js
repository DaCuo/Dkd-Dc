
import { loginActionAPI, userInfoAPI } from '@/api'
export default {
  namespaced: true,
  state: {
    token: null,
    userId: '',
    userInfoMsg: {}
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    REMOVE_TOKEN(state) {
      state.token = null
    },
    SET_USER_Id(state, userId) {
      state.userId = userId
    },
    REMOVE_USER_Id(state) {
      state.userId = ''
    },
    SET_USER_INFO_MSG(state, userInfoMsg) {
      state.userInfoMsg = userInfoMsg
    },
    REMOVE_USER_INFO_MSG(state) {
      state.userInfoMsg = {}
    }
  },
  actions: {
    async loginAction({ commit }, userData) {
      const { data } = await loginActionAPI(userData)
      commit('SET_TOKEN', data.token)
      commit('SET_USER_Id', data.userId)
      return JSON.parse(JSON.stringify(data))
    },
    async userInfo({ commit, state }) {
      const userMsg = await userInfoAPI(state.userId)
      commit('SET_USER_INFO_MSG', userMsg.data)
    },
    loginOut({ commit }) {
      commit('REMOVE_TOKEN')
      commit('REMOVE_USER_Id')
      commit('REMOVE_USER_INFO_MSG')
    }
  }
}
