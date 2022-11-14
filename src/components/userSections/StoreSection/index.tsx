import { Button, Input, Collapsible, CustomMessage } from "@src/components";
import { UserContext } from "@src/context/userContext";
import { formatImageToPreview } from "@src/shared/utils/formatImageToPreview";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FiUpload } from "react-icons/fi";
import { IoStorefront } from "react-icons/io5";
import { StyledActions, StyledAvatar, StyledSection, StyledDiv } from "../styles";

const StoreSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRegisterForm>();
  const [previewImage, setPreviewImage] = useState<Blob | MediaSource | null>(
    null
  );
  const { store } = useContext(UserContext);

  if (!store)
    return (
      <Collapsible title="Loja" icon={<IoStorefront />}>
        <StyledDiv>
          <CustomMessage message="Ops! Parece que você ainda não criou sua loja." />
          <Button feature="FILL">Criar uma loja</Button>
        </StyledDiv>
      </Collapsible>
    );

  return (
    <Collapsible title="Loja" icon={<IoStorefront />}>
      <StyledSection>
        {previewImage ? (
          <div>
            <img
              src={formatImageToPreview(previewImage)}
              alt="Imagem de perfil"
            />
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
          <Input
            type="file"
            id="file"
            icon={<FiUpload />}
            label="Trocar Foto do Perfil"
            accept="image/*"
            formRegister={register("file", { required: false })}
            onChange={async (e) => setPreviewImage(e.target.files![0])}
            // isError={errors.file && true}
            // errorMessage={errors.email?.message}
          />

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
        <Button>Editar</Button>
        <Button feature="LINK">
          <b>DELETAR</b>LOJA
        </Button>
      </StyledActions>
    </Collapsible>
  );
};

export default StoreSection;
