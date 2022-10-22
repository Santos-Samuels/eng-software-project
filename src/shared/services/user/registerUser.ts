import api from "../api"

export const registerUser = async (user: FormData) => { 
  return api.post<User>('/user/register', user)
}