import {
  Button,
  Input,
  Collapsible,
  CustomMessage,
  ErrorMessage,
} from "@src/components";
import { UserContext } from "@src/context/userContext";
import { deleteStore, updateStore } from "@src/shared/services";
import { createStore } from "@src/shared/services/store/createStore";
import { formatImageToPreview } from "@src/shared/utils/formatImageToPreview";
import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiUpload } from "react-icons/fi";
import { IoStorefront } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import {
  StyledActions,
  StyledAvatar,
  StyledSection,
  StyledDiv,
} from "../styles";

const intitialFormMode: IFormMode = {
  type: "EDIT-INFO",
  isActive: false,
};

const StoreSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<IStoreForm>();
  const file = watch("file");
  const { store, user, getUserStore, setStore } = useContext(UserContext);
  const [isFormMode, setIsFormMode] = useState<IFormMode>(intitialFormMode);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const resetErros = () => {
    setErrorMessage("")
    reset()
    setIsFormMode(intitialFormMode)
  }

  const createStoreHandler: SubmitHandler<IStoreForm> = async (data) => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const formData = new FormData();
      formData.append("name", data.name);

      await createStore(data, user!.id);
      reset();
      await getUserStore(user!.id);
      setIsFormMode(intitialFormMode);
      toast.success("Loja Criada com Sucesso");
    } catch (error) {
      setErrorMessage("Erro ao criar a loja!");
      toast.error("Erro ao Criar a Loja!");
    }
    setIsLoading(false);
  };

  const updateStoreHandler: SubmitHandler<IStoreForm> = async (data) => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const formData = new FormData();
      formData.append("name", data.name);

      await updateStore(data, user!.id, store!.id);
      reset();
      await getUserStore(user!.id);
      setIsFormMode(intitialFormMode);
      toast.success("Loja Editada com Sucesso");
    } catch (error) {
      setErrorMessage("Erro ao editar a loja!");
      toast.error("Erro ao Editar a Loja!");
    }
    setIsLoading(false);
  };

  const deleteStoreHandler = async () => {
    setIsLoading(true);

    try {
      await deleteStore(user!.id, store!.id);
      setStore(undefined);
      setIsFormMode(intitialFormMode);
      toast.success("Loja Deletada com Sucesso");
    } catch (error) {
      setErrorMessage("Erro ao deletar a loja!");
      toast.error("Erro ao Deletar a Loja!");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getUserStore(user!.id);
  }, []);

  if (!store && !isFormMode.isActive)
    return (
      <Collapsible title="Loja" icon={<IoStorefront />}>
        <StyledDiv>
          <CustomMessage message="Ops! Parece que você ainda não criou sua loja." />
          <Button
            feature="FILL"
            onClick={() =>
              setIsFormMode({ type: "CREATE-INFO", isActive: true })
            }
          >
            Criar uma loja
          </Button>
        </StyledDiv>
      </Collapsible>
    );

  if (isFormMode.isActive)
    return (
      <Collapsible title="Loja" icon={<IoStorefront />}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <StyledSection>
          {file && file.length !== 0 ? (
            <div>
              <img src={formatImageToPreview(file)} alt="Imagem de perfil" />
            </div>
          ) : (
            <div>
              {false ? (
                <img src={""} />
              ) : (
                <StyledAvatar>
                  <IoStorefront />
                </StyledAvatar>
              )}
            </div>
          )}

          <form>
            <Input
              type="file"
              id="file"
              icon={<FiUpload />}
              label="Trocar Foto do Perfil"
              accept="image/*"
              formRegister={register("file", {
                required: false,
              })}
              isError={errors.file && true}
              errorMessage={errors.file?.message}
            />

            <Input
              type="text"
              id="name"
              placeholder="Nome da Loja"
              formRegister={register("name", {
                required: "Informe o Nome",
              })}
              defaultValue={store ? store.name : ""}
              isError={errors.name && true}
              errorMessage={errors.name?.message}
            />

            {errorMessage && (
              <ErrorMessage withBackgroung message={errorMessage} />
            )}
          </form>
        </StyledSection>

        <StyledActions>
          <Button
            onClick={
              isFormMode.type === "CREATE-INFO"
                ? handleSubmit(createStoreHandler)
                : handleSubmit(updateStoreHandler)
            }
            isLoad={isLoading}
          >
            Salvar
          </Button>
          <Button
            feature="LINK"
            onClick={resetErros}
          >
            <b>CANCELAR</b>
          </Button>
        </StyledActions>
      </Collapsible>
    );

  return (
    <Collapsible title="Loja" icon={<IoStorefront />}>
      <StyledSection>
        <div>
          {store?.imageURL ? (
            <img src={store.imageURL} />
          ) : (
            <StyledAvatar>
              <IoStorefront />
            </StyledAvatar>
          )}
        </div>

        <div>
          <article>
            <p>Nome:</p>
            <b>{store?.name}</b>
          </article>

          <article>
            <p>Produtos:</p>
            <b>{store?.products.length}</b>
          </article>

          <article>
            <p>Avaliações:</p>
            <b>{store?.amountRates}</b>
          </article>

          <article>
            <p>Vendas:</p>
            <b>{store?.amountSold}</b>
          </article>

          {/* <article>
            <p>Criada em:</p>
            <b>12/11/2022</b>
          </article> */}
        </div>
      </StyledSection>

      <StyledActions>
        <Button
          onClick={() => setIsFormMode({ type: "EDIT-INFO", isActive: true })}
        >
          Editar
        </Button>
        <Button feature="LINK" onClick={deleteStoreHandler} isLoad={isLoading}>
          <b>DELETAR</b>LOJA
        </Button>
      </StyledActions>
    </Collapsible>
  );
};

export default StoreSection;
