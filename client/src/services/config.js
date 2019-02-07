import axios from 'axios'

const BASE_URL = 'http://localhost:3001'
const TIMEOUT = 1000

export default axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})