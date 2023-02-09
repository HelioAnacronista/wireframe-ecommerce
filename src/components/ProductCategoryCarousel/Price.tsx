type PriceProps = {
  price: number;
};

function Price({ price }: PriceProps) {
  return (
    <div>
      <p className="text-2xl font-bold text-mainColor-900 lg:text-lg">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price)}
      </p>
    </div>
  );
}

export default Price;
