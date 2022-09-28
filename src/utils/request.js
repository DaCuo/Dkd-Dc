import axios from 'axios'
// import { Message } from 'element-ui'
import store from '@/store'
// import router from '@/router'
const require = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

require.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers.Authorization = store.getters.token
  }
  return config
}, error => { console.log(error) })
export default require
