import { Button, Input } from "@src/components";
import PageLoading from "@src/components/layout/PageLoading";
import Collapsible from "@src/components/ui/Collapsible";
import { UserContext } from "@src/context/userContext";
import { useContext, useEffect, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { HiUser } from "react-icons/hi2";
import { StyledActions, StyledAvatar, StyledSection } from "./styles";

const AccountPage: React.FC = () => {
  const { getUserById, user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [uploadedAvatar, setUploadedAvatar] = useState<Blob | MediaSource | null>(null)

  const getData = async () => {
    const userId = localStorage.getItem("userId");
    await getUserById(userId!);
    setIsLoading(false);
  };

  const setImageToUpload = () => {
    const objectUrl = URL.createObjectURL(uploadedAvatar!)
    return objectUrl
  }

  useEffect(() => {
    getData();
  }, []);
  console.log(user);

  if (isLoading) return <PageLoading />;

  return (
    <>
      <Collapsible title="Perfil" icon={<HiUser />}>
        <StyledSection>
          {uploadedAvatar ? <div><img src={setImageToUpload()} /></div> : <div>
            {user?.avatar ? (
              <img src={user?.avatar} />
            ) : (
              <StyledAvatar>
                <HiUser />
              </StyledAvatar>
            )}
          </div>}

          <div>
            <article>
              <p>Nome:</p>
              <b>{user?.name}</b>
            </article>

            <article>
              <p>E-mail:</p>
              <b>{user?.email}</b>
            </article>

            <article>
              <p>Senha:</p>
              <Button feature="OUTLINE">Trocar</Button>
            </article>

            <Input
              type="file"
              id="file"
              icon={<FiUpload />}
              label="Trocar Foto do Perfil"
              accept="image/*"
              onChange={async (e) => setUploadedAvatar(e.target.files![0])}
            // isError={errors.file && true}
            // errorMessage={errors.email?.message}
            />
          </div>
        </StyledSection>

        <StyledActions>
          <Button>Editar</Button>
          <Button feature="LINK">
            <b>DELETAR</b>CONTA
          </Button>
        </StyledActions>
      </Collapsible>
    </>
  );
};

export default AccountPage;
