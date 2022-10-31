import { StyledMain } from "./styles";

interface IProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  imageUrl?: string;
}

const AuthContainer: React.FC<IProps> = ({ children, icon, imageUrl }) => {
  return (
    <StyledMain>
      {imageUrl ? (
        <img src={imageUrl} alt="Imagem de perfil" />
      ) : (
        <span>{icon}</span>
      )}
      {children}
    </StyledMain>
  );
};

export default AuthContainer;
