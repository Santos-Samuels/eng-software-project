import axios from 'axios';

const api = axios.create({
  baseURL: 'https://alert-jade-rooster.cyclic.app/api'
})

export default api