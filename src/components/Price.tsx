type PriceProps = {
  price: number;
  className?: string;
};

function Price({ price, className }: PriceProps) {
  return (
    <div>
      <p className={`${className}`}>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price)}
      </p>
    </div>
  );
}

export default Price;
