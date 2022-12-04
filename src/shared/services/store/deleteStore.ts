import api from "../api";

export const deleteStore = async (userId: string, storeId:string) => {
  return api.delete<IStore>(`/store/delete/${userId}/${storeId}`);
};
