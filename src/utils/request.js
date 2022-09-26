import axios from 'axios'
// import store from '@/store'
const require = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// require.interceptors.request.use(config => {
//   console.log(store.getters.token)
//   if (store.getters.token) {
//     // config.headers.
//   }
//   return config
// }, error => {})
export default require
