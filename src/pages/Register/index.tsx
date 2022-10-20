import { AuthContainer, Button, Form, Input } from "@components/index";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { HiUser, HiUserPlus } from "react-icons/hi2";

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
    <AuthContainer icon={<HiUserPlus />}>
      <Form onSubmit={handleSubmit(onSubmitt)} title="Cadastrar">
        <Input
          type="text"
          placeholder="Nome Completo"
          icon={<HiUser />}
          onChange={async (e) => setValue("fullName", e.target.value)}
          isError={errors.fullName && true}
        />
        <Input
          type="email"
          placeholder="E-mail"
          icon={<FaEyeSlash size={20} />}
          onChange={async (e) => setValue("email", e.target.value)}
          isError={errors.email && true}
        />
        <Input
          type="password"
          placeholder="Senha"
          icon={<HiMail size={20} />}
          onChange={async (e) => setValue("password", e.target.value)}
          isError={errors.password && true}
        />
        <Input
          type="confirmPassword"
          placeholder="Confirmar Senha"
          icon={<FaEyeSlash size={20} />}
          onChange={async (e) => setValue("confirmPassword", e.target.value)}
          isError={errors.confirmPassword && true}
        />
        {/* <Input
          type="file"
          placeholder="teste"
          accept="image/png, image/jpeg"
          isError={errors.avatar && true}
        /> */}
        <Button type="submit">Cadastrar</Button>

        <Link to="/login">já tem uma conta? <b>entrar</b></Link>
      </Form>
    </AuthContainer>
  );
};

export default RegisterPage;
