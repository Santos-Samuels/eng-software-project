import { StyledForm } from "./styles";

interface IProps extends React.ComponentPropsWithoutRef<"form"> {
  title?: string;
  children?: React.ReactNode;
}

const Form: React.FC<IProps> = ({
  title,
  children,
  ...rest
}: IProps) => {
  return (
    <StyledForm {...rest}>
      <h1>{title}</h1>
      {children}
    </StyledForm>
  );
};

export default Form;
