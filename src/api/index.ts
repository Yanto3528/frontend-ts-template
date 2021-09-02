import axios from 'axios'

export const clientAPI = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
})

clientAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')

  config.headers.Authorization = token ? `Bearer ${token}` : undefined

  return config
})
