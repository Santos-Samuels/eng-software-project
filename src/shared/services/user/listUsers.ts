import api from "../api";

export const listUsers = () => {
  try {
    const response = api.get<User>(`/user/list`);
    return response;
  } catch (error) {
    return error;
  }
};
