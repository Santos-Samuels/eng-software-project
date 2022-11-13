import { StyledMain } from "./styles";

interface IProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  imageUrl?: string;
  width?: string;
  height?: string;
}

const FormContainer: React.FC<IProps> = ({
  children,
  icon,
  imageUrl,
  width,
  height,
}) => {
  return (
    <StyledMain width={width ? width : ""} height={height ? height : ""}>
      {imageUrl ? (
        <img src={imageUrl} alt="Imagem de perfil" />
      ) : (
        <span>{icon}</span>
      )}
      {children}
    </StyledMain>
  );
};

export default FormContainer;
