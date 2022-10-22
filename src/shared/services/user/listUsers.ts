import api from "../api";

export const listUsers = async () => {
  return api.get<User>(`/user/list`);
};
