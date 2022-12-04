import { showUser } from "@src/shared/services";
import { getStoreByUserId } from "@src/shared/services/store/getStoreByUserId";
import { getAvatar } from "@src/shared/services/user/getAvatar";
import React, { useEffect, useState } from "react";

interface IUserContext {
  user?: IUser;
  store?: IStore;
  getUserById: (userId: string) => Promise<void>;
  getUserStore: (userId: string) => Promise<void>;
  setStore: React.Dispatch<React.SetStateAction<IStore | undefined>>;
}

export const UserContext = React.createContext({} as IUserContext);

export const UserProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser>();
  const [store, setStore] = useState<IStore>();

  const getImageProfile = async (userId: string) => {
    const response = await getAvatar(userId);
    return response.data.url;
  };

  const getUserById = async (userId: string) => {
    const response = await showUser(userId);
    response.data.avatar = await getImageProfile(userId);
    setUser(response.data);
  };

  const getUserStore = async (userId: string) => {
    try {
      const response = await getStoreByUserId(userId);
      setStore(response.data);
    } catch (error) {
      throw error;
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        store,
        getUserById,
        getUserStore,
        setStore,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
