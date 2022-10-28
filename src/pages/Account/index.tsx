import { UserContext } from "@src/context/userContext";
import { useContext, useEffect } from "react";

const AccountPage: React.FC = () => {
  const { getUserById, user } = useContext(UserContext)

  useEffect(() => {
    const userId = localStorage.getItem("userId")
    getUserById(userId!)
  }, []);

  return <h1>{user?.name}</h1>;
};

export default AccountPage;
