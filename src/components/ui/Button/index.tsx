import { StyledButton } from "./styles";
import ReactLoading from "react-loading";

interface IProps extends React.ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;
  isLoad?: boolean;
  feature?: "FILL" | "OUTLINE" | "LINK";
}

const Button: React.FC<IProps> = ({ children, isLoad, feature, ...rest }) => {
  return (
    <StyledButton {...rest} disabled={isLoad} feature={feature ? feature : "FILL"}>
      {children}
      {isLoad && <ReactLoading type="spin" color={feature === "LINK" ? "#671D04" : "#FFFFFF" } height={18} width={18} />}
    </StyledButton>
  );
};

export default Button;
