import CardProduct from "@/components/CardProductHome/_index";
import Carousel from "@/components/Carousel/_index";
import ProductCategoryCarousel from "@/components/ProductCategoryCarousel/_index";
import RegisterEmail from "@/components/RegisterEmail/_index";
import { ProductDTO } from "@/models/product";
import { useEffect, useState } from "react";
import * as ProductServices from "../services/product-services";

export default function Home() {
  
  const [productList, setProductList] = useState<ProductDTO[]>();

  useEffect(() => {
    const getProduct = ProductServices.findAll();
    setProductList(getProduct);
  }, []);

  return (
    <>
      <Carousel />

      <div className="container mt-10 rounded border-[2px] border-mainColor-200 p-10">
        {productList?.map((product) => (
          <CardProduct
            id={product.id}
            key={product.id}
            imgUrl={product.imgUrl}
            name={product.name}
            price={product.price}
            discountedPrice={product.price - 10}
          />
        ))}
      </div>

      <div className="my-10">
        <RegisterEmail />
      </div>

      <div className="my-14">
        <div className="container">
          <h1 className="text-2xl font-bold text-mainColor-900">
            Produtos mais comprados por categoria
          </h1>
        </div>
        <div className="my-2">
          <ProductCategoryCarousel title="Produtos..." />
          <ProductCategoryCarousel title="Produtos que baixaram de preço" />
          <ProductCategoryCarousel title="Produtos mais comprados por categoria" />
        </div>
      </div>
    </>
  );
}
