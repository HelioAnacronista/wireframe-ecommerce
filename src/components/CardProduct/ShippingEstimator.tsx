function ShippingEstimator() {
  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="font-semibold text-mainColor-600">
          Calcule o frete e prazo de entrega
        </h1>
      </div>
      <div className="my-1 flex items-center justify-center">
        <div className="w-[290px] rounded-lg border-[1px] border-mainColor-200 p-1">
          <input
            className="
          focus:boder-1
          focus:border-mainColor-600
          focus:outline-none
          focus:ring-mainColor-400
          "
            type="text"
            placeholder="Digite seu o CEP"
          />
        </div>
      </div>
      <div className="my-2 flex justify-center">
        <button className="h-[40px] w-[100px] rounded-[0.5rem] bg-mainColor-900 text-white-900">
          Consultar
        </button>
      </div>
    </>
  );
}

export default ShippingEstimator;
