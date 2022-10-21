import { StyledButton } from "./styles";
import ReactLoading from "react-loading";

interface IProps extends React.ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;
  isLoad?: boolean;
}

const Button: React.FC<IProps> = ({ children, isLoad, ...rest }) => {
  return (
    <StyledButton {...rest} disabled={isLoad}>
      {children}
      {isLoad && <ReactLoading type="spin" color="#FFFFFF" height={18} width={18} />}
    </StyledButton>
  );
};

export default Button;
