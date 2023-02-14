import Price from "../Price";

interface CardProductHomeProps {
  name: string;
  price: number;
  discountedPrice: number;
}

function CardProductHome({
  name,
  price,
  discountedPrice,
}: CardProductHomeProps) {
  return (
    <div className="border-indigo-600 container mt-5 font-sans">
      <div className="flex justify-center">
        <img src="/images/produto-img.svg" alt="" />
      </div>

      <div className="">
        <div className="flex justify-center">
          <h2>{name}</h2>
        </div>
        <div className="flex justify-center">
          <s className="flex">
            <Price beforeName="De " price={Number(discountedPrice)} />
          </s>
        </div>
        <div className="flex justify-center rounded-sm bg-mainColor-50 shadow-sm">
          <p className="text-2xl font-bold text-[#4E4B59]">
            <Price price={Number(price)} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardProductHome;
