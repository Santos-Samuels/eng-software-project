import { Button, Input, Collapsible, ErrorMessage } from "@src/components";
import { UserContext } from "@src/context/userContext";
import { deleteUser, registerUser, updateUser } from "@src/shared/services";
import { getAvatar } from "@src/shared/services/user/getAvatar";
import { formatImageToPreview } from "@src/shared/utils/formatImageToPreview";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import { HiUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { StyledActions, StyledAvatar, StyledSection } from "../styles";

const intitialFormMode: IFormMode = {
  type: "EDIT-INFO",
  isActive: false,
};

const ProfileSection: React.FC<IUserSection> = ({
  avatar,
  name,
  email,
  id,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<IEditUser>();
  const file = watch("file");
  const { getUserById } = useContext(UserContext);
  const [isFormMode, setIsFormMode] = useState<IFormMode>(intitialFormMode);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  const resetErros = () => {
    setErrorMessage("")
    reset()
    setIsFormMode(intitialFormMode)
  }

  const updateUserHandler: SubmitHandler<IEditUser> = async (data) => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const formData = new FormData();
      formData.append("name", data.name);

      await updateUser(data, id);
      reset();
      await getUserById(id);
      setIsFormMode(intitialFormMode);
      toast.success("Usuário Editado com Sucesso");
    } catch (error) {
      setErrorMessage("Erro ao editar a usuário!");
      toast.error("Erro ao Editar o Usuário!");
    }
    setIsLoading(false);
  };

  const deleteUserHandler = async () => {
    setIsLoading(true);

    try {
      await deleteUser(id);
      localStorage.removeItem("userId")
      localStorage.removeItem("TOKEN")
      navigate("/");
      toast.success("Usuário Deletado com Sucesso");
    } catch (error) {
      setErrorMessage("Erro ao deletar a usuário!");
      toast.error("Erro ao Deletar o Usuário!");
    }
    setIsLoading(false);
  };

  if (isFormMode.isActive && isFormMode.type === "EDIT-INFO")
    return (
      <Collapsible title="Perfil" icon={<HiUser />}>
        <StyledSection>
          {file && file.length !== 0 ? (
            <div>
              <img src={formatImageToPreview(file)} alt="Imagem de perfil" />
            </div>
          ) : (
            <div>
              {avatar ? (
                <img src={avatar} />
              ) : (
                <StyledAvatar>
                  <HiUser />
                </StyledAvatar>
              )}
            </div>
          )}

          <form>
            <Input
              type="file"
              id="file"
              icon={<FiUpload />}
              label="Trocar Foto do Perfil"
              accept="image/*"
              formRegister={register("file", { required: false })}
              isError={errors.file && true}
              errorMessage={errors.file?.message}
            />

            <Input
              type="text"
              id="name"
              placeholder="Nome Completo"
              icon={<HiUser />}
              defaultValue={name}
              formRegister={register("name", {
                required: "Informe o Nome Completo!",
              })}
              isError={errors.name && true}
              errorMessage={errors.name?.message}
            />

            {errorMessage && (
              <ErrorMessage withBackgroung message={errorMessage} />
            )}
          </form>
        </StyledSection>

        <StyledActions>
          <Button
            type="submit"
            isLoad={isLoading}
            onClick={handleSubmit(updateUserHandler)}
          >
            Salvar
          </Button>
          <Button
            feature="LINK"
            onClick={resetErros}
          >
            <b>CANCELAR</b>
          </Button>
        </StyledActions>
      </Collapsible>
    );

  if (isFormMode.isActive && isFormMode.type === "EDIT-PASSWORD")
    return (
      <Collapsible title="Perfil" icon={<HiUser />}>
        <StyledSection>
          <form>
            <Input
              type="password"
              id="current-password"
              placeholder="Senha Atual"
              icon={<FaEyeSlash size={20} />}
              altIcon={<FaEye size={20} />}
              formRegister={register("password", {
                required: "Informe a Senha Atual!",
              })}
              isError={errors.name && true}
              errorMessage={errors.name?.message}
            />
            <Input
              type="password"
              id="new-password"
              placeholder="Nova Senha"
              icon={<FaEyeSlash size={20} />}
              altIcon={<FaEye size={20} />}
              formRegister={register("newPassword", {
                required: "Informe a Nova Senha!",
              })}
              isError={errors.newPassword && true}
              errorMessage={errors.newPassword?.message}
            />
            <Input
              type="password"
              id="confirm-new-password"
              placeholder="Nova Senha"
              icon={<FaEyeSlash size={20} />}
              altIcon={<FaEye size={20} />}
              formRegister={register("confirmPassword", {
                required: "Confirme a Nova Senha!",
              })}
              isError={errors.password && true}
              errorMessage={errors.password?.message}
            />

            {errorMessage && (
              <ErrorMessage withBackgroung message={errorMessage} />
            )}
          </form>
        </StyledSection>

        <StyledActions>
          <Button>Salvar</Button>
          <Button
            feature="LINK"
            onClick={resetErros}
          >
            <b>CANCELAR</b>
          </Button>
        </StyledActions>
      </Collapsible>
    );

  return (
    <Collapsible title="Perfil" icon={<HiUser />}>
      <StyledSection>
        {avatar ? (
          <div>
            <img src={avatar} alt="Imagem de perfil" />
          </div>
        ) : (
          <div>
            <StyledAvatar>
              <HiUser />
            </StyledAvatar>
          </div>
        )}

        <div>
          <article>
            <p>Nome:</p>
            <b>{name}</b>
          </article>

          <article>
            <p>E-mail:</p>
            <b>{email}</b>
          </article>

          <article>
            <p>Senha:</p>
            <Button
              feature="OUTLINE"
              onClick={() =>
                setIsFormMode(() => {
                  return { type: "EDIT-PASSWORD", isActive: true };
                })
              }
            >
              Trocar
            </Button>
          </article>
        </div>
      </StyledSection>

      <StyledActions>
        <Button
          onClick={() =>
            setIsFormMode(() => {
              return { type: "EDIT-INFO", isActive: true };
            })
          }
        >
          Editar
        </Button>
        <Button feature="LINK" onClick={deleteUserHandler} isLoad={isLoading}>
          <b>DELETAR</b>CONTA
        </Button>
      </StyledActions>
    </Collapsible>
  );
};

export default ProfileSection;
