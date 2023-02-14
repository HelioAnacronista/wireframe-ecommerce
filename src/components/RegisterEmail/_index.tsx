import { useEffect, useState } from "react";
import Loader from "../Loader";

import BottomPlus from "./BottomPlus";
import { FromPlus } from "./FromPlus";
import { MiddlePlus } from "./MiddlePlus";

function RegisterEmail() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000); // set the timeout duration in milliseconds

    return () => clearTimeout(timeout);
  }, []); // empty array as second argument means this effect only runs once

  return (
    <>
      {loading ? (
        <div className="container flex items-center justify-center">
          <Loader />
        </div>
      ) : (
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
      )}
    </>
  );
}

export default RegisterEmail;
