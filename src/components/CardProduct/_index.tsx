type Props = {
  title: string;
  price: string;
  description: string;
  images: string[];
  img?: string;
  categoria: string[];
};

import { ProductInfosDTO } from "@/models/productinfo";
import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import Price from "../Price";
import Page from "../ProductCategoryCarousel/Page";
import ProductInfo from "./ProductInfo";
import ShippingEstimator from "./ShippingEstimator";

interface CardProductProps {
  title?: string;
  price?: number;
  description?: string;
  images: string[];
  img?: string;
  categoria: string[];
  productInfo?: ProductInfosDTO;
}

function CardProduct({
  title,
  price,
  description,
  images,
  img,
  categoria,
  productInfo,
}: CardProductProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 0 && newPage <= 2) {
      // aqui estamos limitando o número máximo de páginas em 3
      setCurrentPage(newPage);
    }
    if (newPage == 3) {
      setCurrentPage(0);
    }
  };

  function TenX(value: any) {
    return value / 10;
  }

  return (
    <div className="container">
      <div className="mt-4 flex items-center">
        {categoria.map((item, index) => {
          return (
            <div className="flex items-center text-sm" key={index}>
              {item} <MdNavigateNext />
            </div>
          );
        })}
      </div>

      <div>
        <div className="mt-1 flex items-center justify-center">
          <div className="mt-1 flex items-center justify-center">
            <img
              onClick={() => {
                handlePageChange(currentPage + 1);
              }}
              src={images[currentPage]}
              width={"70%"}
              height={"70%"}
            />
          </div>
        </div>
        <div
          onClick={() => {
            handlePageChange(currentPage + 1);
          }}
          className="my-2 flex items-center justify-center"
        >
          <Page page={currentPage} totalPages={images.length} />
        </div>
      </div>

      <div className="text-center text-mainColor-800">
        <div>
          <h1 className="font-semibold">{title}</h1>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div className="my-2">
          <Price className="text-xl font-bold" price={Number(price)} />
        </div>
        <div>
          <button className="h-[50px] w-[140px] rounded-[0.5rem] bg-mainColor-900 text-white-900">
            COMPRAR
          </button>
        </div>
      </div>

      <div>
        <div className="mt-5 flex">
          <div>
            <img src="/images/cartao.svg" alt="" />
          </div>
          <div>
            <Price className="text-xl font-bold" price={Number(price)} />
          </div>
        </div>
        <div className="flex">
          <Price
            beforeName="por até 10x de "
            afterName=" sem juros no Cartão de Crédito "
            price={Number(TenX(price))}
          />
        </div>

        <div className="mt-4 flex">
          <div>
            <img src="/images/icone-pix.svg" alt="" />
          </div>
          <div>
            <Price className="text-xl font-bold" price={Number(price)} />
          </div>
        </div>
        <div>
          <p>Exclusivo Pix</p>
        </div>
      </div>

      <div className="mt-10">
        <ShippingEstimator />
      </div>

      <div>
        <ProductInfo img={productInfo?.ProductDescription} />
      </div>
    </div>
  );
}

export default CardProduct;
