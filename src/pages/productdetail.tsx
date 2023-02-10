import CardProduct from "@/components/CardProduct/_index";
import ClientFeedback from "@/components/ClientFeedback/_index";
import ProductCategoryCarousel from "@/components/ProductCategoryCarousel/_index";
import { MdOutlineExpandMore, MdStar } from "react-icons/md";

function productdetail() {
  return (
    <>
      <div>
        <CardProduct
          image="/images/produto-img.svg"
          price="R$ 2190.00"
          title="Smart TV"
          key={1}
          description="Notebook Apple MacBook Pro 13 com M2 da Apple, 8 CPU, 10 GPU, 8GB RAM, 256GB SSD - Cinza-espacial"
          categoria={["domain.com.br", "Informática", "Notebook"]}
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

        <div className="my-10">
          <ClientFeedback />
          <ClientFeedback />
        </div>
        <div>
          <button className="h-[55px] w-[250px] rounded-3xl bg-mainColor-900 text-white-900">
            Ver mais avaliações
          </button>
        </div>
      </div>
    </>
  );
}

export default productdetail;
