import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: 'https://clear-worm-polo-shirt.cyclic.app/api'
})

api.interceptors.request.use(config => {
  const TOKEN = localStorage.getItem('TOKEN') === 'undefined' ? null : localStorage.getItem('TOKEN')

  if (TOKEN) {
    config.headers!['Authorization'] = `Bearer ${TOKEN}`
  }

  return config
},

  (error: AxiosError) => {
    return Promise.reject(error);
  }
)

export default api