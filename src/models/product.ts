import { CategoryDTO } from "./category";
import { ProductInfosDTO } from "./productinfo";

export type clientProductDTO = {
  id: number;
  name: string;
  comment: string;
  stars: number;
  img: string;
};

export type ProductDTO = {
  id: number;
  name: string;
  productInfo?: ProductInfosDTO;
  description: string;
  price: number;
  imgUrl: string;
  categories: CategoryDTO[];
  clients?: clientProductDTO[];
};
