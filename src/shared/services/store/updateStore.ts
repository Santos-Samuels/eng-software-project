import api from "../api"

export const updateStore = async (store: IStoreForm, userId: string, storeId: string) => { 
  return api.put<IStore>(`/store/update/${userId}/${storeId}`, store)
}