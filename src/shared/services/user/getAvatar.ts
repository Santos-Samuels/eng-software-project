import api from "../api";

export const getAvatar = async (userId: string) => {
  return api.get<IUserAvatar>(`/user/signed-url/${userId}`);
};
