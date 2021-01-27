import axios from '@/api/axios'

const register = (credentials) => {
  return axios.post('/users', {user: credentials})
}
const login = (credentials) => {
  return axios.post('/users/login', {users: credentials})
}
export default {
  register,
  login,
}
