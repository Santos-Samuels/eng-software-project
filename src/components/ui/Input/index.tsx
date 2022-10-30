import ErrorMessage from "../ErrorMessage";
import { StyledDiv, StyledArticle } from "./styles";

interface IProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  isError?: boolean;
  errorMessage?: string;
  id?: string;
  type?: string;
}

const Input: React.FC<IProps> = ({
  label,
  placeholder,
  icon,
  isError,
  errorMessage,
  id,
  type,
  ...rest
}) => {
  if (type === "file") {
    return (
      <StyledArticle isError={isError}>
        <div>
          <label htmlFor={id}>{label} {icon}</label>
          <input type="file" {...rest} id={id} />
        </div>
        {isError && errorMessage && <ErrorMessage message={errorMessage!} />}
      </StyledArticle>
    );
  }

  return (
    <article>
      <label htmlFor={id}>{label}</label>
      <StyledDiv isError={isError}>
        <input placeholder={placeholder} {...rest} id={id} type={type} />
        {icon}
      </StyledDiv>
      {isError && errorMessage && <ErrorMessage message={errorMessage!} />}
    </article>
  );
};

export default Input;
