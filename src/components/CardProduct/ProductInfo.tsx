import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import Modal from "./Modal/_index";

interface ProductInfoProps {
  img: any;
}

function ProductInfo({ img }: ProductInfoProps) {
  const [showModal, setShowModal] = useState(false);

  const iShowModal: boolean = false;

  return (
    <>
      <div className="my-1 mt-10  rounded border-[1px] border-mainColor-200 p-2">
        <div className="flex justify-between">
          <div>
            <h2 className="font-medium">Descrição do produto</h2>
          </div>
          <div onClick={() => setShowModal((iShowModal) => !iShowModal)}>
            <BiPlus size={28} />
          </div>
        </div>
        <div>{showModal && <Modal img={img} />}</div>
      </div>

      <div className="my-1 flex justify-between rounded border-[1px] border-mainColor-200 p-2">
        <div>
          <h2 className="font-medium">Características</h2>
        </div>
        <div>
          <BiPlus />
        </div>
      </div>

      <div className="my-1 flex justify-between rounded border-[1px] border-mainColor-200 p-2">
        <div>
          <h2 className="font-medium">Especificações Técnicas</h2>
        </div>
        <div>
          <BiPlus />
        </div>
      </div>

      <div className="my-1 flex justify-between rounded border-[1px] border-mainColor-200 p-2">
        <div>
          <h2 className="font-medium">Dimensões</h2>
        </div>
        <div>
          <BiPlus />
        </div>
      </div>

      <div className="my-1 flex justify-between rounded border-[1px] border-mainColor-200 p-2">
        <div>
          <h2 className="font-medium">Contato</h2>
        </div>
        <div>
          <BiPlus />
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
