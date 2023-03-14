import { htmlDTO } from "@/models/productinfo";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { ModelHTML } from "../TypesModels/ModelHTML";
import { ModelIMG } from "../TypesModels/ModelIMG";

type ProductInfoProps = {
  ProductDescription?: htmlDTO;
  Characteristics?: htmlDTO;
  TechnicalSpecifications?: htmlDTO;
  Dimensions?: htmlDTO;
  Contact?: htmlDTO;
};

function ProductInfo({
  ProductDescription,
  Characteristics,
  TechnicalSpecifications,
  Dimensions,
  Contact,
}: ProductInfoProps) {
  const [showModal, setShowModal] = useState({
    ProductDescription: false,
    Characteristics: false,
    TechnicalSpecifications: false,
    Dimensions: false,
    Contact: false,
  });

  return (
    <>
      <div className="my-1 mt-10  rounded border-[1px] border-mainColor-200 p-2">
        <div className="flex justify-between">
          <div>
            <h2 className="font-medium">Descrição do produto</h2>
          </div>
          <div
            onClick={() =>
              setShowModal({
                ...showModal,
                ProductDescription: !showModal.ProductDescription,
              })
            }
          >
            <BiPlus size={28} />
          </div>
        </div>

        <div>
          {showModal.ProductDescription &&
          typeof ProductDescription === "string" ? (
            <ModelIMG img={ProductDescription} />
          ) : (
            <ModelHTML description="" title="" />
          )}
        </div>
      </div>

      <div className="my-1 mt-10  rounded border-[1px] border-mainColor-200 p-2">
        <div className="flex justify-between">
          <div>
            <h2 className="font-medium">Características</h2>
          </div>
          <div
            onClick={() =>
              setShowModal({
                ...showModal,
                Characteristics: !showModal.Characteristics,
              })
            }
          >
            <BiPlus size={28} />
          </div>
        </div>
        <div>
          {showModal.Characteristics && typeof Characteristics === "string" ? (
            <ModelIMG img={Characteristics} />
          ) : (
            showModal.Characteristics && (
              <ModelHTML
                description={Characteristics?.description}
                title={Characteristics?.title}
              />
            )
          )}
        </div>
      </div>

      <div className="my-1 mt-10  rounded border-[1px] border-mainColor-200 p-2">
        <div className="flex justify-between">
          <div>
            <h2 className="font-medium">Especificações Técnicas</h2>
          </div>
          <div
            onClick={() =>
              setShowModal({
                ...showModal,
                TechnicalSpecifications: !showModal.TechnicalSpecifications,
              })
            }
          >
            <BiPlus size={28} />
          </div>
        </div>
        <div>
          {showModal.TechnicalSpecifications &&
          typeof TechnicalSpecifications === "string" ? (
            <ModelIMG img={TechnicalSpecifications} />
          ) : (
            showModal.TechnicalSpecifications && (
              <ModelHTML
                description={TechnicalSpecifications?.description}
                title={TechnicalSpecifications?.title}
              />
            )
          )}
        </div>
      </div>

      <div className="my-1 mt-10  rounded border-[1px] border-mainColor-200 p-2">
        <div className="flex justify-between">
          <div>
            <h2 className="font-medium">Dimensões</h2>
          </div>
          <div
            onClick={() =>
              setShowModal({ ...showModal, Dimensions: !showModal.Dimensions })
            }
          >
            <BiPlus size={28} />
          </div>
        </div>
        <div>
          {showModal.Dimensions && typeof Dimensions === "string" ? (
            <ModelIMG img={Dimensions} />
          ) : (
            showModal.Dimensions && (
              <ModelHTML
                description={Dimensions?.description}
                title={Dimensions?.title}
              />
            )
          )}
        </div>
      </div>

      <div className="my-1 mt-10  rounded border-[1px] border-mainColor-200 p-2">
        <div className="flex justify-between">
          <div>
            <h2 className="font-medium">Contato</h2>
          </div>
          <div
            onClick={() =>
              setShowModal({ ...showModal, Contact: !showModal.Contact })
            }
          >
            <BiPlus size={28} />
          </div>
        </div>
        <div>
          {showModal.Contact && typeof Contact === "string" ? (
            <ModelIMG img={Contact} />
          ) : (
            showModal.Contact && (
              <ModelHTML
                description={Contact?.description}
                title={Contact?.title}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
