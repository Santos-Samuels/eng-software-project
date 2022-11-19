import { Button, Input, Collapsible, CustomMessage } from "@src/components";
import { UserContext } from "@src/context/userContext";
import { formatImageToPreview } from "@src/shared/utils/formatImageToPreview";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FiUpload } from "react-icons/fi";
import { IoStorefront } from "react-icons/io5";
import {
  StyledActions,
  StyledAvatar,
  StyledSection,
  StyledDiv,
} from "../styles";

const intitialFormMode: IFormMode = {
  type: "EDIT-INFO",
  isActive: false,
};

const StoreSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<IRegisterForm>();
  const file = watch("file");
  const { store } = useContext(UserContext);
  const [isFormMode, setIsFormMode] = useState<IFormMode>(intitialFormMode);

  if (!store && !isFormMode.isActive)
    return (
      <Collapsible title="Loja" icon={<IoStorefront />}>
        <StyledDiv>
          <CustomMessage message="Ops! Parece que você ainda não criou sua loja." />
          <Button
            feature="FILL"
            onClick={() =>
              setIsFormMode({ type: "CREATE-INFO", isActive: true })
            }
          >
            Criar uma loja
          </Button>
        </StyledDiv>
      </Collapsible>
    );

  if (isFormMode.isActive)
    return (
      <Collapsible title="Loja" icon={<IoStorefront />}>
        <StyledSection>
          {file ? (
            <div>
              <img src={formatImageToPreview(file)} alt="Imagem de perfil" />
            </div>
          ) : (
            <div>
              {false ? (
                <img src={""} />
              ) : (
                <StyledAvatar>
                  <IoStorefront />
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
              errorMessage={errors.email?.message}
            />

            <Input
              type="text"
              id="name"
              placeholder="Nome da Loja"
              defaultValue="Fake Store Name"
              formRegister={register("name", {
                required: "Informe o Nome",
              })}
              isError={errors.name && true}
              errorMessage={errors.name?.message}
            />

            <Input
              type="text"
              id="description"
              placeholder="Descrição"
              defaultValue=""
              formRegister={register("name", {
                required: false,
              })}
              isError={errors.name && true}
              errorMessage={errors.name?.message}
            />
          </form>
        </StyledSection>

        <StyledActions>
          <Button type="submit">Salvar</Button>
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
    <Collapsible title="Loja" icon={<IoStorefront />}>
      <StyledSection>
        {file ? (
          <div>
            <img src={formatImageToPreview(file)} alt="Imagem de perfil" />
          </div>
        ) : (
          <div>
            {false ? (
              <img src={""} />
            ) : (
              <StyledAvatar>
                <IoStorefront />
              </StyledAvatar>
            )}
          </div>
        )}

        <div>
          <article>
            <p>Nome:</p>
            <b>Fake Store Name</b>
          </article>

          <article>
            <p>Produtos:</p>
            <b>154</b>
          </article>

          <article>
            <p>Avaliações:</p>
            <b>99</b>
          </article>

          <article>
            <p>Vendas:</p>
            <b>47</b>
          </article>

          <article>
            <p>Criada em:</p>
            <b>12/11/2022</b>
          </article>
        </div>
      </StyledSection>

      <StyledActions>
        <Button
          onClick={() => setIsFormMode({ type: "EDIT-INFO", isActive: true })}
        >
          Editar
        </Button>
        <Button feature="LINK">
          <b>DELETAR</b>LOJA
        </Button>
      </StyledActions>
    </Collapsible>
  );
};

export default StoreSection;
