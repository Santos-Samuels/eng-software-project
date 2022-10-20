import { AuthContainer, Button, Form, Input } from "@components/index";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa";
import { HiUser } from "react-icons/hi2";

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ILoginForm>();

  const onSubmit: SubmitHandler<ILoginForm> = (data) => console.log(data);

  useEffect(() => {
    register("email", { required: true });
    register("password", { required: true });
  }, []);

  return (
    <AuthContainer icon={<HiUser />}>
      <Form onSubmit={handleSubmit(onSubmit)} title="Entrar">
        <>
          <Input
            type="email"
            placeholder="E-mail"
            icon={<HiUser />}
            onChange={async (e) => setValue("email", e.target.value)}
            isError={errors.email && true}
          />
          <Input
            type="password"
            placeholder="Senha"
            icon={<FaEyeSlash size={20} />}
            onChange={async (e) => setValue("password", e.target.value)}
            isError={errors.password && true}
          />
          <Button>Entrar</Button>

          <Link to="/register">
            não tem uma conta? <b>cadastre-se</b>
          </Link>
        </>
      </Form>
    </AuthContainer>
  );
};

export default LoginPage;
