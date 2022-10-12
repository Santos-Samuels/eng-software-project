import { useParams } from "react-router-dom";

const ProductPage: React.FC = () => {
  const { id } = useParams();
  return (
    <>
      <h1>PRODUCT ID PAGE</h1>
      <p>Id do produto: {id}</p>
    </>
  );
};

export default ProductPage;
