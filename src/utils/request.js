import axios from 'axios'
const require = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
export default require
