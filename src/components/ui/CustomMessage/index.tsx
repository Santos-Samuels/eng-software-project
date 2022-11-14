import { StyledP } from "./styles";

interface IProps {
  message: string;
}

const CustomMessage: React.FC<IProps> = ({ message }) => {
  return <StyledP>{message}</StyledP>;
};

export default CustomMessage;
