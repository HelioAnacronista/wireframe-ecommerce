type Props = {
  title: string;
  price: string;
  description: string;
  image: string;
  categoria: string[];
};

import { MdNavigateNext } from "react-icons/md";
import Price from "../Price";
import ProductInfo from "./ProductInfo";
import ShippingEstimator from "./ShippingEstimator";

function CardProduct({ title, price, description, image, categoria }: Props) {
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
      <div className="mt-1 flex items-center justify-center">
        <img src={image} width={"70%"} height={"70%"} />
      </div>

      <div className="text-center text-mainColor-800">
        <div>
          <h1 className="font-semibold">{title}</h1>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div className="my-2">
          <Price className="text-xl font-bold" price={2190.0} />
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
            <Price className="text-xl font-bold" price={2190.0} />
          </div>
        </div>
        <div>
          <p>ou até 10x de R$219.00 sem juros no Cartão de Crédito</p>
        </div>

        <div className="mt-4 flex">
          <div>
            <div>
              <img src="/images/icone-pix.svg" alt="" />
            </div>
            <div>
              <Price className="text-xl font-bold" price={2190.0} />
            </div>
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
        <ProductInfo />
      </div>
    </div>
  );
}

export default CardProduct;
