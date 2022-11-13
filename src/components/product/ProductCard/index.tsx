import Stars from "@src/components/ui/Stars";
import { StyledArticle } from "./styles";


const ProductCard: React.FC<IProductCard> = ({
  image,
  title,
  price,
  promotionalPrice,
  amountSold,
  stars,
  previewMode
}) => {
  return (
    <StyledArticle>
      <img src={image} alt="Imagem de produto" />
      <p>{title}</p>

      <div>
        {promotionalPrice && <p>R$ {price.toFixed(2)}</p>}
        <h1>R$ {promotionalPrice ? promotionalPrice.toFixed(2) : price.toFixed(2)}</h1>
      </div>

      <section>
        <Stars starsValue={stars} starsSize={12} />
        <span>{amountSold} {previewMode ? "restantes" : "vendidos"}</span>
      </section>
    </StyledArticle>
  );
};

export default ProductCard;
