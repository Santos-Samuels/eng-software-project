import {
  FormContainer,
  Button,
  ErrorMessage,
  Form,
  Input,
} from "@components/index";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { HiUser, HiUserPlus } from "react-icons/hi2";
import { FiUpload } from "react-icons/fi";
import { registerUser } from "@shared/services";
import { formatImageToPreview } from "@src/shared/utils/formatImageToPreview";

const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRegisterForm>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [previewImage, setPreviewImage] = useState<Blob | MediaSource | null>(null);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
    setIsLoading(true);
    setErrorMessage("");

    if (data.password !== data.confirmPassword) {
      setErrorMessage("As senhas não coincidem!");
      setIsLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      Object.entries(data).forEach((el) => formData.append(el[0], el[1]));

      await registerUser(formData);
      reset();
      navigate("/login");
    } catch (error) {
      setErrorMessage("Já existe um usuário com esse email!");
    }
    setIsLoading(false);
  };

  return (
    <FormContainer
      icon={<HiUserPlus />}
      imageUrl={previewImage ? formatImageToPreview(previewImage) : ""}
    >
      <Form onSubmit={handleSubmit(onSubmit)} title="Cadastrar">
        <Input
          type="file"
          id="file"
          icon={<FiUpload />}
          label="Enviar Foto do Perfil"
          accept="image/*"
          formRegister={register("file", { required: false })}
          onChange={async (e) => {
            setPreviewImage(e.target.files![0]);
          }}
          isError={errors.file && true}
          errorMessage={errors.email?.message}
        />
        <Input
          type="text"
          id="name"
          placeholder="Nome Completo"
          icon={<HiUser />}
          formRegister={register("name", { required: "Informe o Nome Completo!" })}
          isError={errors.name && true}
          errorMessage={errors.name?.message}
        />
        <Input
          type="email"
          id="email"
          placeholder="E-mail"
          icon={<HiMail size={20} />}
          formRegister={register("email", { required: "Informe o Email!" })}
          isError={errors.email && true}
          errorMessage={errors.email?.message}
        />
        <Input
          type="password"
          id="password"
          placeholder="Senha"
          icon={<FaEyeSlash size={20} />}
          altIcon={<FaEye size={20} />}
          formRegister={register("password", { required: "Informe a Senha!" })}
          isError={errors.password && true}
          errorMessage={errors.password?.message}
        />
        <Input
          type="password"
          id="confirm-password"
          placeholder="Confirmar Senha"
          icon={<FaEyeSlash size={20} />}
          altIcon={<FaEye size={20} />}
          formRegister={register("confirmPassword", { required: "Confirme a Senha!" })}
          isError={errors.confirmPassword && true}
          errorMessage={errors.confirmPassword?.message}
        />
        {errorMessage && <ErrorMessage withBackgroung message={errorMessage} />}
        <Button type="submit" isLoad={isLoading}>
          Cadastrar
        </Button>

        <Link to="/login">
          já tem uma conta? <b>entrar</b>
        </Link>
      </Form>
    </FormContainer>
  );
};

export default RegisterPage;
