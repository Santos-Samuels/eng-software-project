import { StyledInput } from "./styles";

interface IProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  isError?: boolean;
}

const Input: React.FC<IProps> = ({ label, isError, ...rest }) => {
  return <>
    <label htmlFor="">{label}</label>
    <StyledInput isError={isError ? isError : false} { ...rest } />
  </>;
}

export default Input;