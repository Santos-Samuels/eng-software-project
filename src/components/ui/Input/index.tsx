import { useState } from "react";
import ErrorMessage from "../ErrorMessage";
import { StyledDiv, StyledArticle } from "./styles";

interface IProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  altIcon?: React.ReactNode;
  isError?: boolean;
  errorMessage?: string;
  id?: string;
  type?: string;
}

const Input: React.FC<IProps> = ({
  label,
  placeholder,
  icon,
  altIcon,
  isError,
  errorMessage,
  id,
  type,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  if (type === "file") {
    return (
      <StyledArticle isError={isError}>
        <div>
          <label htmlFor={id}>
            {label} {icon}
          </label>
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
        <input placeholder={placeholder} {...rest} id={id} type={type === "password" && isPasswordVisible ? "text" : type} />
        {type === "password" ? (
          <div onClick={() => setIsPasswordVisible(!isPasswordVisible)}>{isPasswordVisible ? altIcon : icon}</div>
        ) : (
          icon
        )}
      </StyledDiv>
      {isError && errorMessage && <ErrorMessage message={errorMessage!} />}
    </article>
  );
};

export default Input;
