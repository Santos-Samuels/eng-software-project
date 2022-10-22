import api from "../api";

export const deleteUser = async (userId: string) => {
  return api.delete<User>(`/user/delete/${userId}`);
};
