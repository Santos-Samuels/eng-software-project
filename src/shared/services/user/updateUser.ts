import api from "../api"

export const updateUser = async (user: IRegisterForm, userId: string) => { 
  return api.put<IUser>(`/user/update/${userId}`, user)
}