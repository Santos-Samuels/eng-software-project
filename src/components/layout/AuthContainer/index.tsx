import { PropsWithChildren } from "react";
import { StyledMain } from "./styles";

const AuthContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default AuthContainer;
