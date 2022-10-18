import api from "../api"

export const login = (user: ILoginForm) => { 
  try {
    const response = api.post<User>('/login', user)
    return response
  } catch (error) {
    return error
  }
}