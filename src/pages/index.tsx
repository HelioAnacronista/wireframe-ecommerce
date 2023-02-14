import CardProduct from "@/components/CardProductHome/_index";
import Carousel from "@/components/Carousel/_index";
import ProductCategoryCarousel from "@/components/ProductCategoryCarousel/_index";
import RegisterEmail from "@/components/RegisterEmail/_index";

const products = [
  { id: 1, name: "Product 1", price: 10.0, discountedPrice: 8.0 },
  { id: 2, name: "Product 2", price: 20.0, discountedPrice: 16.0 },
  { id: 3, name: "Product 3", price: 15.0, discountedPrice: 12.0 },
  { id: 4, name: "Product 3", price: 15.0, discountedPrice: 12.0 },
  { id: 5, name: "Product 3", price: 15.0, discountedPrice: 12.0 },
  // adicione mais produtos aqui, se necessário
];

export default function Home() {
  return (
    <>
      <Carousel />

      <div className="container mt-10 rounded border-[2px] border-mainColor-200 p-10">
        {products.map((product) => (
          <CardProduct
            key={product.id}
            name={product.name}
            price={product.price}
            discountedPrice={product.discountedPrice}
          />
        ))}
      </div>

      <div className="my-10">
        <RegisterEmail />
      </div>

      <div className="my-14">
        <div className="container">
          <h1 className="text-2xl font-bold text-mainColor-900">
            Produtos mais comprados por categoria
          </h1>
        </div>
        <div className="my-2">
          <ProductCategoryCarousel title="Produtos..." />
          <ProductCategoryCarousel title="Produtos que baixaram de preço" />
          <ProductCategoryCarousel title="Produtos mais comprados por categoria" />
        </div>
      </div>
    </>
  );
}
