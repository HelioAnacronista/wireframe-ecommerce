interface CardProductProps {
  img: string,
  name: string,
  price: string,
  rating: number,
  description: string,
  category: string,
  id: string,
}

function CardProduct() {
  return (
    <div className="border-indigo-600 container mt-5 font-sans">
      <div className="flex justify-center">
        <img src="/images/produto-img.svg" alt="" />
      </div>

      <div className="">
        <div className="flex justify-center">
          <h2>Notebook Apple MacBook</h2>
        </div>
        <div className="flex justify-center">
          <s>De R$99.55</s>
        </div>
        <div className="flex justify-center rounded-sm bg-white-900 shadow-lg">
          <p className="text-2xl font-bold text-[#4E4B59]">Por R$ 90.50</p>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
