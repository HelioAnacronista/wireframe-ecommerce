import { useState } from "react";

type ProductReviewProps = {
  reviewData: string;
};

function ProductReview({ reviewData }: ProductReviewProps) {
  const [showMore, setShowMore] = useState(false);
  const [review, setReview] = useState(reviewData || "null");
  const [truncatedReview, setTruncatedReview] = useState(
    review.substring(0, 100) + "..."
  );

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <p style={{ maxHeight: showMore ? "100%" : "50px", overflow: "hidden" }}>
        {showMore ? review : truncatedReview}
      </p>
      {review.length > 100 && (
        <button
          className="font-bold text-blue-violet-500 hover:text-blue-violet-400"
          onClick={handleClick}
        >
          {showMore ? "Mostrar Menos..." : "Mostrar Mais..."}
        </button>
      )}
    </div>
  );
}

export default ProductReview;
