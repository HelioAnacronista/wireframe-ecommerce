import CardProduct from "@/components/CardProduct/_index";
import ClientFeedback from "@/components/ClientFeedback/_index";
import ProductCategoryCarousel from "@/components/ProductCategoryCarousel/_index";
import { ProductDTO } from "@/models/product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdOutlineExpandMore, MdStar } from "react-icons/md";
import * as ProductServices from "../../services/product-services";

function productdetail() {
  //variavel produto
  const [product, setproduct] = useState<ProductDTO>();

  //quantidade de avaloes que serar mostrado para o usuario
  const [numAvaliacoes, setNumAvaliacoes] = useState(2);

  //mostrar todos as avaliaçoes
  const handleClick = () => {
    setNumAvaliacoes(product?.clients?.length || 20);
  };

  //captura a id do produto
  const router = useRouter();
  const { id } = router.query;

  //set o usestate do product
  useEffect(() => {
    if (id) {
      let product = ProductServices.findById(Number(id));
      setproduct(product);
    }
  }, [id]);

  //testando qual serar definido
  let imgProductsbyId: string = product?.imgUrl || "images/MacbookPro.jpg";

  let imgProducts: string[] = [imgProductsbyId, "images/mac.jpg"];

  return (
    <>
      <div>
        <CardProduct
          img={product?.imgUrl}
          images={imgProducts}
          price={product?.price}
          title={product?.name}
          key={product?.id}
          description={product?.description}
          categoria={["domain.com.br", "Informática", "Notebook"]}
          productInfo={product?.productInfo}
          idProduct={Number(id)}
        />
      </div>

      <div className="my-14">
        <div className="container">
          <h1 className="text-2xl font-bold text-mainColor-900">
            Produtos patrocinados
          </h1>
        </div>
        <ProductCategoryCarousel />
      </div>

      <div className="container mb-96">
        <div>
          <h1 className="text-xl font-bold text-mainColor-600">
            Avaliações de Clientes
          </h1>
        </div>

        <div className="container flex   justify-between text-mainColor-600">
          <div>
            <h1 className="text-2xl font-bold">5.0</h1>
            <div className="left- absolute text-xs ">(63 avaliações)</div>
          </div>
          <div className="flex">
            <MdStar size={20} />
            <MdStar size={20} />
            <MdStar size={20} />
            <MdStar size={20} />
            <MdStar size={20} />
            <div>
              <MdOutlineExpandMore />
            </div>
          </div>
          <div className="sm:hidden">
            <h4>100% dos clientes recomendam esse produto</h4>
          </div>
          <div>
            <p>Ordenar por</p>
          </div>
          <div>
            <button>Data</button>
            <div>
              <MdOutlineExpandMore />
            </div>
          </div>
        </div>

        <div>
          <div className="my-10">
            {product?.clients?.slice(0, numAvaliacoes).map((c, index) => (
              <ClientFeedback
                key={index}
                name={c.name}
                comment={c.comment}
                stars={c.stars}
                img={c.img}
              />
            ))}
          </div>
          {numAvaliacoes < 4 && (
            <div className="flex items-center justify-center">
              <button
                className="h-[55px] w-[250px] rounded-3xl bg-mainColor-900 text-white-900"
                onClick={handleClick}
              >
                Ver mais avaliações
              </button>
            </div>
          )}
        </div>

        <div className="mt-10">
          <div className="container">
            <h1 className="text-2xl font-bold text-mainColor-900">
              Produtos {"{...}"}
            </h1>
          </div>
          <ProductCategoryCarousel />
        </div>
      </div>
    </>
  );
}

export default productdetail;
