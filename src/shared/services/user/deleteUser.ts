import api from "../api"

export const deleteUser = (userId: string) => { 
  try {
    const response = api.delete<User>(`/user/delete/${userId}`)
    return response
  } catch (error) {
    return error
  }
}