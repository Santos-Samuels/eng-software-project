import { FormContainer, Button, ErrorMessage, Form, Input } from "@components/index";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiUser } from "react-icons/hi2";
import { login } from "@shared/services";

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginForm>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const response = await login(data);
      localStorage.setItem('TOKEN', response.data.token!)
      localStorage.setItem('userId', response.data.id!)
      reset();
      navigate("/");
    } catch (error) {
      setErrorMessage("Email ou senha incorretos!");
    }
    setIsLoading(false);
  };

  return (
    <FormContainer icon={<HiUser />}>
      <Form onSubmit={handleSubmit(onSubmit)} title="Entrar">
        <>
          <Input
            type="email"
            placeholder="E-mail"
            icon={<HiUser />}
            formRegister={register("email", { required: "Informe o Email!" })}
            isError={errors.email && true}
            errorMessage={errors.email?.message}
          />
          <Input
            type="password"
            placeholder="Senha"
            icon={<FaEyeSlash size={20} />}
            altIcon={<FaEye size={20} />}
            formRegister={register("password", { required: "Informe a Senha!" })}
            isError={errors.password && true}
            errorMessage={errors.password?.message}
          />
          {errorMessage && <ErrorMessage withBackgroung message={errorMessage} />}
          <Button isLoad={isLoading}>Entrar</Button>

          <Link to="/register">
            não tem uma conta? <b>cadastre-se</b>
          </Link>
        </>
      </Form>
    </FormContainer>
  );
};

export default LoginPage;
