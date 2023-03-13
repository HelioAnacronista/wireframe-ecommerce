import { CategoryDTO } from "./category";
import { ProductInfosDTO } from "./productinfo";

export type ProductDTO = {
  id: number;
  name: string;
  productInfo?: ProductInfosDTO;
  description: string;
  price: number;
  imgUrl: string;
  categories: CategoryDTO[];
};
