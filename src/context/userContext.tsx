import { showUser } from "@src/shared/services";
import React, { useEffect, useState } from "react";

interface IUserContext {
  user?: IUser;
  getUserById: (userId: string) => Promise<void>
}

export const UserContext = React.createContext({} as IUserContext);

export const UserProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser>();

  const getUserById = async (userId: string) => {
    const response = await showUser(userId);
    setUser(response.data)
  }

  return (
    <UserContext.Provider
      value={{
        user,
        getUserById
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;