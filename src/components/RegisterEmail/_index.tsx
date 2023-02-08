function RegisterEmail() {
  return (
    <div className="bg-gradient-to-b from-mainColor-400">
      <div className="flex items-center justify-center pt-10">
        <img src="/images/phone.svg" alt="" />
      </div>
      <div className="bg-white-900 py-5 pt-10">
        <div>
          <h2>Cadastre-se para receber nossas ofertas!</h2>
        </div>
        <div className="mb-2  w-[340px] rounded-md bg-mainColor-100 p-1 focus-within:shadow-sm">
          <div>
            <label
              htmlFor=""
              className="ml-5 text-sm font-light text-trout-700"
            >
              Nome completo
            </label>
          </div>
          <input
            className="
          focus:boder-1 ml-5 w-[300px]
          bg-mainColor-100
         text-sm
          focus:border-mainColor-600
          focus:outline-none
          focus:ring-mainColor-400
          "
            type="text"
          />
        </div>
        <div className="w-[340px] rounded-md bg-mainColor-100  p-1 focus-within:shadow-sm">
          <div>
            <label
              htmlFor=""
              className=" ml-5 text-sm font-light text-trout-700"
            >
              Endereço de e-mail
            </label>
          </div>
          <input
            className="
            focus:ring- focus:boder-1 ml-5
            w-[300px]
           bg-mainColor-100
            text-sm
            focus:border-mainColor-600
            focus:outline-none
            "
            type="text"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className=" my-3 h-[50px] w-[210px] rounded-md
        bg-mainColor-900 font-bold text-white-900"
          >
            Cadastrar
          </button>
        </div>
      </div>

      {/* vatagens etc.. */}

      <div>
        <div className="flex items-center justify-center">
          <img src="/images/point.svg" alt="" />
        </div>
        <div className="my-2 flex">
          <div>
            <img src="/images/comment.svg " alt="" />
          </div>
          <div>
            <div className="w-20">
              <img src="/images/Share.svg" alt="" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-mainColor-800">
                Compartilhe os produtos com os melhores preço preços
              </h2>
            </div>
            <div>
              <p className="text-mainColor-400">
                Compartilhando chances de ganhar cupom ainda maior
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* vatagens etc.. */}
      <div></div>
    </div>
  );
}

export default RegisterEmail;
