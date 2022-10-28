import api from "../api";

export const showUser = async (userId: string) => {
  return api.get<IUser>(`/user/show/${userId}`);
};
