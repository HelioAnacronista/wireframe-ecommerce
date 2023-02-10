import CardProduct from "@/components/CardProduct/_index";
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

      <div>
        <h1>Avaliações de Clientes</h1>
        <div className="flex">
          <div>
            <h1>5.0</h1>
            <div className="absolute">(63 avaliações)</div>
          </div>
          <div className="flex">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <div>
              <MdOutlineExpandMore />
            </div>
          </div>
          <div>
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

          <div className="mt-10">
            <div>
              <h1>João</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default productdetail;
