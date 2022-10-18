import api from "../api"

export const registerUser = (user: IRegisterForm) => { 
  try {
    const response = api.post<User>('/user/register', user)
    return response
  } catch (error) {
    return error
  }
}