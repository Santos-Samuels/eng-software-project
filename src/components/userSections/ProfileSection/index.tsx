import { Button, Input, Collapsible } from "@src/components";
import { registerUser } from "@src/shared/services";
import { getAvatar } from "@src/shared/services/user/getAvatar";
import { formatImageToPreview } from "@src/shared/utils/formatImageToPreview";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import { HiUser } from "react-icons/hi2";
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
  const [isFormMode, setIsFormMode] = useState<IFormMode>(intitialFormMode);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onEditInfo: SubmitHandler<IEditUser> = async (data) => {
    /*setIsLoading(true);
    setErrorMessage("");

    try {
      const formData = new FormData();
      Object.entries(data).forEach((el) => formData.append(el[0], el[1]));

      await registerUser(formData);
      reset();
      navigate("/login");
    } catch (error) {
      setErrorMessage("Já existe um usuário com esse email!");
    }
    setIsLoading(false);*/
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

          <form onSubmit={handleSubmit(onEditInfo)}>
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
              formRegister={register("name", {
                required: "Informe o Nome Completo!",
              })}
              isError={errors.name && true}
              errorMessage={errors.name?.message}
            />
          </form>
        </StyledSection>

        <StyledActions>
          <Button>Salvar</Button>
          <Button
            feature="LINK"
            onClick={() => setIsFormMode(intitialFormMode)}
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
          </form>
        </StyledSection>

        <StyledActions>
          <Button>Salvar</Button>
          <Button
            feature="LINK"
            onClick={() => setIsFormMode(intitialFormMode)}
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
            <img
              src={avatar}
              alt="Imagem de perfil"
            />
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
        <Button feature="LINK">
          <b>DELETAR</b>CONTA
        </Button>
      </StyledActions>
    </Collapsible>
  );
};

export default ProfileSection;
