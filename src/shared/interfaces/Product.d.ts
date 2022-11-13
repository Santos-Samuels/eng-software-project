interface IProductForm {
  file?: File | FormData;
  title: string;
  price: number;
  promotionalPrice: number;
  stock: number;
  description: string;
  category: string;
  type: string;
};

interface IProduct {
  image: string;
  title: string;
  price: number;
  promotionalPrice?: number;
  stock: number;
  description: string;
  category: string;
  type: string;
  amountSold: number;
  stars: number;
};

interface IProductCard {
  image: string;
  title: string;
  price: number;
  promotionalPrice?: number;
  amountSold: number;
  stars: number;
  previewMode?: boolean;
};