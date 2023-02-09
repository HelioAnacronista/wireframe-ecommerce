import CardProduct from "@/components/CardProduct/_index";
import Carousel from "@/components/Carousel/_index";
import ProductCategoryCarousel from "@/components/ProductCategoryCarousel/_index";
import RegisterEmail from "@/components/RegisterEmail/_index";

export default function Home() {
  return (
    <>
      <Carousel />
      <div className="container mt-10 rounded border-[2px] border-mainColor-200 p-10">
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>

      <div>
        <RegisterEmail />
      </div>

      <div className="my-14">
        <div className="container">
          <h1 className="text-2xl font-bold text-mainColor-900">
            Produtos mais comprados por categoria
          </h1>
        </div>
        <ProductCategoryCarousel />
      </div>

      <div className="my-14">
        <div className="container">
          <h1 className="text-2xl font-bold text-mainColor-900">
            Produtos que baixaram de preço
          </h1>
        </div>
        <ProductCategoryCarousel />
      </div>

      <div className="my-14">
        <div className="container">
          <h1 className="text-2xl font-bold text-mainColor-900">
            Produtos mais comprados por categoria
          </h1>
        </div>
        <ProductCategoryCarousel />
      </div>
    </>
  );
}
