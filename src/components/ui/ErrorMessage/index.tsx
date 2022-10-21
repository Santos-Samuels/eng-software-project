import { StyledP } from "./styles";

interface IProps {
  message: string;
  withBackgroung?: boolean;
}

const ErrorMessage: React.FC<IProps> = ({ message, withBackgroung }) => {
  return <StyledP withBackgroung={withBackgroung}>{message}</StyledP>;
};

export default ErrorMessage;
