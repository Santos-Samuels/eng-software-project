import { StoreSection, ProfileSection } from "@src/components";
import PageLoading from "@src/components/layout/PageLoading";
import { UserContext } from "@src/context/userContext";
import { useContext, useEffect, useState } from "react";

const AccountPage: React.FC = () => {
  const { getUserById, user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getData = async () => {
    const userId = localStorage.getItem("userId");
    await getUserById(userId!);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(user);

  if (isLoading) return <PageLoading />;

  return (
    <>
      <ProfileSection
        id={user!.id}
        name={user!.name}
        email={user!.email}
        avatar={user!.avatar}
      />
      <StoreSection />
    </>
  );
};

export default AccountPage;
