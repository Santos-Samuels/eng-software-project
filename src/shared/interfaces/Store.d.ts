interface IStoreForm {
  file: FileList;
  name: string;
}

interface IStore {
  id: string
  name: string;
  idUser: string
  amountRates: number;
  amountSold: number;
  imageURL: string;
  products: IProduct[]
}