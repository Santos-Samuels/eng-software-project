import api from "../api";

export const deleteUser = async (userId: string) => {
  return api.delete<IUser>(`/user/delete/${userId}`);
};
