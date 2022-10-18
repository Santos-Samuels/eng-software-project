import { AuthContainer, Button, Input } from "@components/index";
import { Link } from "react-router-dom";
import { StyledForm } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";

const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IRegisterForm>();

  const onSubmitt: SubmitHandler<IRegisterForm> = (data) => console.log(data);

  useEffect(() => {
    register("avatar", { required: true })
    register("fullName", { required: true })
    register("email", { required: true })
    register("password", { required: true })
    register("confirmPassword", { required: true })
  }, []);

  return (
    <AuthContainer>
      <StyledForm onSubmit={handleSubmit(onSubmitt)}>
        <h1>REGISTER</h1>
        <Input
          type="file"
          accept="image/png, image/jpeg"
          isError={errors.avatar && true}
        />
        <Input
          type="text"
          placeholder="Nome Completo"
          onChange={async (e) => setValue("fullName", e.target.value)}
          isError={errors.fullName && true}
        />
        <Input
          type="email"
          placeholder="Email"
          onChange={async (e) => setValue("email", e.target.value)}
          isError={errors.email && true}
        />
        <Input
          type="password"
          placeholder="Senha"
          onChange={async (e) => setValue("password", e.target.value)}
          isError={errors.password && true}
        />
        <Input
          type="confirmPassword"
          placeholder="Confirmar Senha"
          onChange={async (e) => setValue("confirmPassword", e.target.value)}
          isError={errors.confirmPassword && true}
        />
        <Button type="submit">Cadastrar</Button>

        <Link to="/login">Fazer login</Link>
      </StyledForm>
    </AuthContainer>
  );
};

export default RegisterPage;
