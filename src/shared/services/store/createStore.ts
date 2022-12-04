import api from "../api"

export const createStore = async (store: IStoreForm, userId: string) => { 
  return api.post(`/store/register/${userId}`, store)
}