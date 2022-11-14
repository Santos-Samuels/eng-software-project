import ProductCard from "../ProductCard";
import { v4 as uuidv4 } from "uuid";
import { StyledDiv } from "./styles";
import React from "react";

const FAKE_PRODUCTS: IProduct[] = [
  {
    id: uuidv4(),
    image: "https://www.embrapa.br/bme_images/o/135040040o.jpg",
    title: "Fake Product Name",
    price: 15.79,
    promotionalPrice: 12.78,
    stock: 10,
    description: "Fake Description",
    category: "nonyet",
    type: "nonyet",
    amountSold: 4,
    stars: 2.8,
  },
  {
    id: uuidv4(),
    image: "https://www.embrapa.br/bme_images/o/135040040o.jpg",
    title: "Fake Product Name",
    price: 15.79,
    promotionalPrice: 12.78,
    stock: 10,
    description: "Fake Description",
    category: "nonyet",
    type: "nonyet",
    amountSold: 4,
    stars: 2.8,
  },
  {
    id: uuidv4(),
    image: "https://www.embrapa.br/bme_images/o/135040040o.jpg",
    title: "Fake Product Name",
    price: 15.79,
    promotionalPrice: 12.78,
    stock: 10,
    description: "Fake Description",
    category: "nonyet",
    type: "nonyet",
    amountSold: 4,
    stars: 2.8,
  },
  {
    id: uuidv4(),
    image: "https://www.embrapa.br/bme_images/o/135040040o.jpg",
    title: "Fake Product Name",
    price: 15.79,
    promotionalPrice: 12.78,
    stock: 10,
    description: "Fake Description",
    category: "nonyet",
    type: "nonyet",
    amountSold: 4,
    stars: 2.8,
  },
  {
    id: uuidv4(),
    image: "https://www.embrapa.br/bme_images/o/135040040o.jpg",
    title: "Fake Product Name",
    price: 15.79,
    promotionalPrice: 12.78,
    stock: 10,
    description: "Fake Description",
    category: "nonyet",
    type: "nonyet",
    amountSold: 4,
    stars: 2.8,
  },
  {
    id: uuidv4(),
    image: "https://www.embrapa.br/bme_images/o/135040040o.jpg",
    title: "Fake Product Name",
    price: 15.79,
    promotionalPrice: 12.78,
    stock: 10,
    description: "Fake Description",
    category: "nonyet",
    type: "nonyet",
    amountSold: 4,
    stars: 2.8,
  },
  {
    id: uuidv4(),
    image: "https://www.embrapa.br/bme_images/o/135040040o.jpg",
    title: "Fake Product Name",
    price: 15.79,
    promotionalPrice: 12.78,
    stock: 10,
    description: "Fake Description",
    category: "nonyet",
    type: "nonyet",
    amountSold: 4,
    stars: 2.8,
  },
  {
    id: uuidv4(),
    image: "https://www.embrapa.br/bme_images/o/135040040o.jpg",
    title: "Fake Product Name",
    price: 15.79,
    promotionalPrice: 12.78,
    stock: 10,
    description: "Fake Description",
    category: "nonyet",
    type: "nonyet",
    amountSold: 4,
    stars: 2.8,
  },
  {
    id: uuidv4(),
    image: "https://www.embrapa.br/bme_images/o/135040040o.jpg",
    title: "Fake Product Name",
    price: 15.79,
    promotionalPrice: 12.78,
    stock: 10,
    description: "Fake Description",
    category: "nonyet",
    type: "nonyet",
    amountSold: 4,
    stars: 2.8,
  },
  {
    id: uuidv4(),
    image: "https://www.embrapa.br/bme_images/o/135040040o.jpg",
    title: "Fake Product Name",
    price: 15.79,
    promotionalPrice: 12.78,
    stock: 10,
    description: "Fake Description",
    category: "nonyet",
    type: "nonyet",
    amountSold: 4,
    stars: 2.8,
  },
  {
    id: uuidv4(),
    image: "https://www.embrapa.br/bme_images/o/135040040o.jpg",
    title: "Fake Product Name",
    price: 15.79,
    promotionalPrice: 12.78,
    stock: 10,
    description: "Fake Description",
    category: "nonyet",
    type: "nonyet",
    amountSold: 1,
    stars: 2.8,
  },
  {
    id: uuidv4(),
    image: "https://www.embrapa.br/bme_images/o/135040040o.jpg",
    title: "Fake Product Name",
    price: 15.79,
    promotionalPrice: 12.78,
    stock: 10,
    description: "Fake Description",
    category: "nonyet",
    type: "nonyet",
    amountSold: 3,
    stars: 4,
  },
  {
    id: uuidv4(),
    image: "https://www.embrapa.br/bme_images/o/135040040o.jpg",
    title: "Fake Product Name",
    price: 15.79,
    promotionalPrice: 12.78,
    stock: 10,
    description: "Fake Description",
    category: "nonyet",
    type: "nonyet",
    amountSold: 7,
    stars: 1,
  },
  {
    id: uuidv4(),
    image: "https://www.embrapa.br/bme_images/o/135040040o.jpg",
    title: "Fake Product Name",
    price: 15.79,
    promotionalPrice: 12.78,
    stock: 10,
    description: "Fake Description",
    category: "nonyet",
    type: "nonyet",
    amountSold: 4,
    stars: 0,
  },
];

const ProductList: React.FC = () => {
  return (
    <StyledDiv>
      {FAKE_PRODUCTS.map((el) => (
        <ProductCard
          key={el.id}
          image={el.image}
          promotionalPrice={el.promotionalPrice}
          title={el.title}
          price={el.price}
          amountSold={el.amountSold}
          stars={el.stars}
        />
      ))}
    </StyledDiv>
  );
};

export default ProductList;
