import api from "../api"

export const updateUser = async (user: IEditUser, userId: string) => { 
  return api.put<IUser>(`/user/update/${userId}`, user)
}