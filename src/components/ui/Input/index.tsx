import ErrorMessage from "../ErrorMessage";
import { StyledDiv } from "./styles";

interface IProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  placeholder: string;
  icon?: React.ReactNode;
  isError?: boolean;
  errorMessage?: string;
}

const Input: React.FC<IProps> = ({
  label,
  placeholder,
  icon,
  isError,
  errorMessage,
  ...rest
}) => {
  return (
    <article>
      <StyledDiv isError={isError}>
        <input placeholder={placeholder} {...rest} />
        {icon}
      </StyledDiv>
      {isError && errorMessage && <ErrorMessage message={errorMessage!} />}
    </article>
  );
};

export default Input;
