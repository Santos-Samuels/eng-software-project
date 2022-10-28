import api from "../api"

export const login = async (user: ILoginForm) => { 
  return api.post<IUser>('/login', user) 
}