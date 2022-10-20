import { StyledDiv } from "./styles";

interface IProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  placeholder: string;
  icon?: React.ReactNode;
  isError?: boolean;
}

const Input: React.FC<IProps> = ({ label, placeholder, icon, isError, ...rest }) => {
  return <>
    <label htmlFor="">{label}</label>
    <StyledDiv isError={isError}>
      <input placeholder={placeholder} { ...rest } />
      {icon}
    </StyledDiv>
  </>;
}

export default Input;