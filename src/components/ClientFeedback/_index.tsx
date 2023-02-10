import { MdStar } from "react-icons/md";
import ProductReview from "./ProductReview";

function ClientFeedback() {
  return (
    <div className="container my-10">
      <div>
        <h2 className="inline-block rounded-xl bg-mainColor-100 px-2 font-semibold">
          João
        </h2>
      </div>
      <div className="flex">
        <div>
          <p className="text-mainColor-400">04/04/22</p>
        </div>
        <div className="ml-1 flex text-mainColor-700">
          <MdStar size={20} />
          <MdStar size={20} />
          <MdStar size={20} />
          <MdStar size={20} />
          <MdStar size={20} />
        </div>
      </div>

      <ProductReview reviewData="Produto maravilhoso! Surpreendeu minhas expectativas, brasileiro, 100% original, veio tudo certinho, sem escoriações. Só trocaria a transportadora Sequoia que mente nas atualizações de rastreio, como por exemplo colocou que fez tentativas de entrega na minha casa, sendo que eu estava em casa e as tentativas não foram realizadas. Foi desgastante e estressante, mas o produto é perfeito e o atendimento da Ponto também." />

      <div className="flex">
        <div className="mx-2">
          <img src="/images/photoclient.svg" alt="" />
        </div>
        <div className="mx-2">
          <img
            src="/images/morephotoclient.svg"
            width={136}
            height={90}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ClientFeedback;
