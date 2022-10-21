import { AuthContainer, Button, ErrorMessage, Form, Input } from "@components/index";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { HiUser, HiUserPlus } from "react-icons/hi2";
import { registerUser } from "@shared/services";

const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<IRegisterForm>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
    setIsLoading(true);
    try {
      await registerUser({...data, file: ""});
      reset()
      navigate("/login");
    } catch (error) {
      setErrorMessage("Já existe um usuário com esse email!");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    register("name", { required: true });
    register("email", { required: true });
    register("password", { required: true });
    register("confirmPassword", { required: true });
  }, []);

  return (
    <AuthContainer icon={<HiUserPlus />}>
      <Form onSubmit={handleSubmit(onSubmit)} title="Cadastrar">
        <Input
          type="text"
          placeholder="Nome Completo"
          icon={<HiUser />}
          onChange={async (e) => setValue("name", e.target.value)}
          isError={errors.name && true}
          errorMessage={"Campo obrigatório!"}
        />
        <Input
          type="email"
          placeholder="E-mail"
          icon={<HiMail size={20} />}
          onChange={async (e) => setValue("email", e.target.value)}
          isError={errors.email && true}
          errorMessage={"Campo obrigatório!"}
        />
        <Input
          type="password"
          placeholder="Senha"
          icon={<FaEyeSlash size={20} />}
          onChange={async (e) => setValue("password", e.target.value)}
          isError={errors.password && true}
          errorMessage={"Campo obrigatório!"}
        />
        <Input
          type="password"
          placeholder="Confirmar Senha"
          icon={<FaEyeSlash size={20} />}
          onChange={async (e) => setValue("confirmPassword", e.target.value)}
          isError={errors.confirmPassword && true}
          errorMessage={"Campo obrigatório!"}
        />
        {errorMessage && <ErrorMessage withBackgroung message={errorMessage} />}
        <Button type="submit" isLoad={isLoading}>
          Cadastrar
        </Button>

        <Link to="/login">
          já tem uma conta? <b>entrar</b>
        </Link>
      </Form>
    </AuthContainer>
  );
};

export default RegisterPage;
