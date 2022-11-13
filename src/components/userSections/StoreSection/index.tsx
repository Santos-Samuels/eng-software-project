import { Button, Input, Collapsible } from "@src/components";
import { formatImageToPreview } from "@src/shared/utils/formatImageToPreview";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { IoStorefront } from "react-icons/io5";
import { StyledActions, StyledAvatar, StyledSection } from "../styles";

const StoreSection: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<Blob | MediaSource | null>(
    null
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
