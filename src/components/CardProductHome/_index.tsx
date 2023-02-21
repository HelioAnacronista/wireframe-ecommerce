import { useEffect, useState } from "react";
import Loader from "../Loader";
import Price from "../Price";

interface CardProductHomeProps {
  imgUrl: string;
  name: string;
  price: number;
  discountedPrice: number;
}

function CardProductHome({
  name,
  price,
  discountedPrice,
  imgUrl,
}: CardProductHomeProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000); // set the timeout duration in milliseconds

    return () => clearTimeout(timeout);
  }, []); // empty array as second argument means this effect only runs once

  return (
    <>
      {loading ? (
        <div className="container flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="border-indigo-600 container mt-5 font-sans">
          <div className="flex justify-center">
            <img src={imgUrl ? imgUrl : "/images/produto-img.svg"} alt="" />
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
      )}
    </>
  );
}

export default CardProductHome;
