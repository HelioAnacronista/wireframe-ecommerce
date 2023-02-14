type PriceProps = {
  price: number;
  className?: string;
  beforeName?: string;
  afterName?: string;
};

function Price({ beforeName, price, className, afterName }: PriceProps) {
  return (
    <div>
      <p className={`${className}`}>
        {beforeName}
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price)}
        {afterName}
      </p>
    </div>
  );
}

export default Price;
