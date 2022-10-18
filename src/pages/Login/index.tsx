import {AuthContainer, Button, Input} from "@components/index";
import { StyledForm } from "./styles";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ILoginForm>();

  const onSubmitt: SubmitHandler<ILoginForm> = (data) => console.log(data);

  useEffect(() => {
    register("email", { required: true })
    register("password", { required: true })
  }, []);

  return (
    <AuthContainer>
      <StyledForm onSubmit={handleSubmit(onSubmitt)}>
        <h1>LOGIN</h1>
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
        <Button>Entrar</Button>
        <Link to="/register">Fazer cadastro</Link>
      </StyledForm>
    </AuthContainer>
  );
};

export default LoginPage;
