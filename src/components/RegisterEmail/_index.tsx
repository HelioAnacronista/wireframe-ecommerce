import BottomPlus from "./BottomPlus";
import { FromPlus } from "./FromPlus";
import { MiddlePlus } from "./MiddlePlus";

function RegisterEmail() {
  return (
    <div className="bg-gradient-to-b from-mainColor-400">
      <div className="flex items-center justify-center pt-10">
        <img src="/images/phone.svg" alt="" />
      </div>
      <div className="">
        <FromPlus />
      </div>

      {/* vatagens etc.. */}
      <MiddlePlus />
      {/* vatagens etc.. */}
      <div className="flex items-center justify-center">
        <BottomPlus />
      </div>

      <br />
      <br />
      <br />
      <p>area de testes</p>

      <br />
      <br />
      <br />
    </div>
  );
}

export default RegisterEmail;
