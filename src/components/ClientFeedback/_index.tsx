import { MdStar } from "react-icons/md";
import ProductReview from "./ProductReview";

export type ClientFeedbackProps = {
  id?: number;
  name: string;
  comment: string;
  stars: number;
  img?: string;
};

function ClientFeedback({
  id,
  name,
  comment,
  stars,
  img,
}: ClientFeedbackProps) {
  return (
    <div className="container my-10">
      <div>
        <h2 className="inline-block rounded-xl bg-mainColor-100 px-2 font-semibold">
          {name}
        </h2>
      </div>
      <div className="flex">
        <div>
          <p className="text-mainColor-400">04/04/22</p>
        </div>
        <div className="ml-1 flex text-mainColor-700">
          {[...Array(stars)].map((_, index) => (
            <MdStar key={index} size={20} />
          ))}
        </div>
      </div>

      <ProductReview reviewData={comment} />

      <div className="flex">
        <div className="mx-2">
          <img src={img} alt="" />
        </div>
        <div className="mx-2">
          <img
            src="/images/morephotoclient.svg"
            width={136}
            height={90}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ClientFeedback;
