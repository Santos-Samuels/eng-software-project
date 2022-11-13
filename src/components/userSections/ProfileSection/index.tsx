import { Button, Input, Collapsible } from "@src/components";
import { formatImageToPreview } from "@src/shared/utils/formatImageToPreview";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { HiUser } from "react-icons/hi2";
import { StyledActions, StyledAvatar, StyledSection } from "../styles";

const ProfileSection: React.FC<IUser> = ({ avatar, name, email, id }) => {
  const [previewImage, setPreviewImage] = useState<Blob | MediaSource | null>(
    null
  );

  return (
    <Collapsible title="Perfil" icon={<HiUser />}>
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
            {avatar ? (
              <img src={avatar} />
            ) : (
              <StyledAvatar>
                <HiUser />
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
            <b>{name}</b>
          </article>

          <article>
            <p>E-mail:</p>
            <b>{email}</b>
          </article>

          <article>
            <p>Senha:</p>
            <Button feature="OUTLINE">Trocar</Button>
          </article>
        </div>
      </StyledSection>

      <StyledActions>
        <Button>Editar</Button>
        <Button feature="LINK">
          <b>DELETAR</b>CONTA
        </Button>
      </StyledActions>
    </Collapsible>
  );
};

export default ProfileSection;
