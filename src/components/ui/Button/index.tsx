import { StyledButton } from "./styles";

interface IProps extends React.ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;
}

const Button: React.FC<IProps> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
