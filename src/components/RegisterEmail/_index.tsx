import BottomPlus from "./BottomPlus";
import { FromPlus } from "./FromPlus";
import { MiddlePlus } from "./MiddlePlus";

function RegisterEmail() {
  return (
    <div className="bg-gradient-to-b from-mainColor-400">
      <div className="flex items-center justify-center pt-10">
        <img src="/images/phone.svg" alt="" />
      </div>

      <FromPlus />
      <MiddlePlus />

      <div className="flex items-center justify-center">
        <BottomPlus />
      </div>
    </div>
  );
}

export default RegisterEmail;
