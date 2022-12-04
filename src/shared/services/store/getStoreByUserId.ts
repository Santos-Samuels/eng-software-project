import api from "../api";

export const getStoreByUserId = async (userId: string) => {
  return api.get<IStore>(`/storeuser/show/${userId}`);
};
