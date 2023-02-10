import { MdOutlineExpandMore } from "react-icons/md";

function ProductInfo() {
  return (
    <>
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
    </>
  );
}

export default ProductInfo;
