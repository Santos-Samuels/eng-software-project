import api from "../api"

export const updateUser = (user: IRegisterForm, userId: string) => { 
  try {
    const response = api.put<User>(`/user/update/${userId}`, user)
    return response
  } catch (error) {
    return error
  }
}