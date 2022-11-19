interface IProductForm {
  file?: FileList;
  title: string;
  price: number;
  promotionalPrice: number;
  stock: number;
  description: string;
  category: string;
  type: string;
};

interface IProduct {
  id: string;
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