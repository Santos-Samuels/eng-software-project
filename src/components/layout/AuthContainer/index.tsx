import { PropsWithChildren } from "react";
import { StyledMain } from "./styles";

interface IProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const AuthContainer: React.FC<IProps> = ({ children, icon }) => {
  return (
    <StyledMain>
      {icon && <span>{icon}</span>}
      {children}
    </StyledMain>
  );
};

export default AuthContainer;
