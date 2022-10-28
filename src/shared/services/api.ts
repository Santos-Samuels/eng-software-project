import axios from 'axios';

const api = axios.create({
  baseURL: 'https://zealous-elk-garb.cyclic.app/api'
})

export default api