import {
  FormContainer,
  Button,
  ErrorMessage,
  Form,
  Input,
  ProductCard,
} from "@components/index";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, UseFormRegisterReturn } from "react-hook-form";
import { useEffect, useState } from "react";
import { BsBoxSeam, BsCurrencyDollar } from "react-icons/bs";
import { IoPricetag } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";
import { CgNotes } from "react-icons/cg";
import { registerUser } from "@shared/services";
import { formatImageToPreview } from "@src/shared/utils/formatImageToPreview";
import { FaBoxes } from "react-icons/fa";
import { StyledDiv, StyledSection } from "./styles";

const ProductForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<IProductForm>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [previewImage, setPreviewImage] = useState<Blob | MediaSource | null>(
    null
  );
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IProductForm> = async (data) => {
    console.log(data);
    setIsLoading(true);
    setErrorMessage("");

    // try {
    //   const formData = new FormData();
    //   Object.entries(data).forEach((el) => formData.append(el[0], el[1]));

    //   await registerUser(formData);
    //   reset();
    //   navigate("/login");
    // } catch (error) {
    //   setErrorMessage("Já existe um usuário com esse email!");
    // }
    setIsLoading(false);
  };
  
  return (
    <StyledDiv>
      <StyledSection>
        {previewImage ? (
          <img
            src={formatImageToPreview(previewImage)}
            alt="Imagem de perfil"
          />
        ) : (
          <span>
            <BsBoxSeam />
          </span>
        )}
        <Form onSubmit={handleSubmit(onSubmit)} title="Cadastrar Produto">
          <Input
            type="file"
            id="file"
            icon={<FiUpload />}
            label="Enviar Imagem"
            accept="image/*"
            formRegister={register("file", {
              required: "Adicione uma Imagem!",
            })}
            onChange={async (e) => {
              setPreviewImage(e.target.files![0]);
            }}
            isError={errors.file && true}
            errorMessage={errors.file?.message}
          />
          <Input
            type="text"
            id="title"
            placeholder="Título"
            icon={<BsBoxSeam />}
            formRegister={register("title", { required: "Informe o Título!" })}
            isError={errors.title && true}
            errorMessage={errors.title?.message}
          />
          <Input
            type="number"
            id="price"
            min={0}
            step={0.1}
            placeholder="Preço"
            icon={<BsCurrencyDollar size={20} />}
            isError={errors.price && true}
            errorMessage={errors.price?.message}
            formRegister={register("price", { required: "Informe o Preço!" })}
          />
          <Input
            type="number"
            id="promotionalPrice"
            min={watch("price") ? Number(watch("price")) : 0}
            step={0.1}
            placeholder="Preço de Promoção"
            icon={<IoPricetag size={20} />}
            isError={errors.promotionalPrice && true}
            errorMessage={errors.promotionalPrice?.message}
            formRegister={register("promotionalPrice", { required: false })}
          />
          <Input
            type="number"
            id="stock"
            min={0}
            placeholder="Quantidade"
            icon={<FaBoxes size={20} />}
            isError={errors.stock && true}
            errorMessage={errors.stock?.message}
            formRegister={register("stock", {
              required: "Confirme a Quantidade!",
            })}
          />
          <Input
            type="description"
            id="description"
            placeholder="Descrição"
            icon={<CgNotes />}
            isError={errors.title && true}
            errorMessage={errors.title?.message}
            formRegister={register("description", {
              required: "Informe uma Descrição!",
            })}
          />
          {errorMessage && (
            <ErrorMessage withBackgroung message={errorMessage} />
          )}
          <Button type="submit" isLoad={isLoading}>
            Criar
          </Button>
          <Button type="button" feature="OUTLINE" onClick={() => navigate(-1)}>
            Cancelar
          </Button>
        </Form>
      </StyledSection>

      <div>
        <h2>Preview do Produto</h2>
        <ProductCard
          image={previewImage ? formatImageToPreview(previewImage) : ""}
          title={watch("title") ? watch("title") : "Informe um Título" }
          price={watch("price") ? Number(watch("price")) : 0}
          promotionalPrice={watch("promotionalPrice") ? Number(watch("promotionalPrice")) : undefined}
          amountSold={watch("stock") ? Number(watch("stock")) : 0}
          stars={5}
          previewMode
        />

        <Button
          type="button"
          feature="OUTLINE"
          onClick={() => {
            reset();
          }}
        >
          Limpar
        </Button>
      </div>
    </StyledDiv>
  );
};

export default ProductForm;
