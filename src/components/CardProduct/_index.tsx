type Props = {
  title: string;
  price: string;
  description: string;
  image: string;
  categoria: string[];
};

import { MdNavigateNext, MdOutlineExpandMore } from "react-icons/md";

function CardProduct({ title, price, description, image, categoria }: Props) {
  return (
    <div>
      <div className="flex items-center">
        {categoria.map((item, index) => {
          return (
            <div className="flex items-center text-sm" key={index}>
              {item} <MdNavigateNext />
            </div>
          );
        })}
      </div>
      <div className="mt-5 flex items-center justify-center">
        <img src={image} width={"70%"} height={"70%"} />
      </div>

      <div>
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div>
          <h3>{price}</h3>
        </div>
      </div>

      <div>
        <div>
          <img src="/images/cartao.svg" alt="" />
        </div>
        <div>
          <div>
            <img src="/images/icone-pix.svg" alt="" />
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1>Calcule o frete e prazo de entrega</h1>
        </div>
        <div>
          <input placeholder="Digite seu o CEP" />
        </div>
        <div>
          <button className="bg-mainColor-900 text-white-900">Consultar</button>
        </div>
      </div>

      <div>
        <div className="flex justify-between rounded border-[1px] border-mainColor-200">
          <div>
            <h2 className="font-medium">Descrição do produto</h2>
          </div>
          <div>
            <MdOutlineExpandMore />
          </div>
        </div>

        <div className="flex justify-between rounded border-[1px] border-mainColor-200">
          <div>
            <h2 className="font-medium">Características</h2>
          </div>
          <div>
            <MdOutlineExpandMore />
          </div>
        </div>

        <div className="flex justify-between rounded border-[1px] border-mainColor-200">
          <div>
            <h2 className="font-medium">Especificações Técnicas</h2>
          </div>
          <div>
            <MdOutlineExpandMore />
          </div>
        </div>

        <div className="flex justify-between rounded border-[1px] border-mainColor-200">
          <div>
            <h2 className="font-medium">Dimensões</h2>
          </div>
          <div>
            <MdOutlineExpandMore />
          </div>
        </div>

        <div className="flex justify-between rounded border-[1px] border-mainColor-200">
          <div>
            <h2 className="font-medium">Contato</h2>
          </div>
          <div>
            <MdOutlineExpandMore />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
