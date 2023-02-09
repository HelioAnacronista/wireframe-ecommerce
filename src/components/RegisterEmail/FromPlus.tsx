import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type CreateUserFormData = {
  name: string;
  email: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
});

export function FromPlus() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema),
  });

  return (
    <>
      <div className="bg-white-900 py-5 pt-10">
        <div className="my-2 flex items-center justify-center">
          <h2>Cadastre-se para receber nossas ofertas!</h2>
        </div>
        <div className="flex items-center justify-center">
          <div className=" mb-2  w-[340px] rounded-md bg-mainColor-100 p-1 focus-within:shadow-sm">
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
        </div>

        <div className="flex items-center justify-center">
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
    </>
  );
}
