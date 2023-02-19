import { useState } from "react";
import NavBar from "../NavBar/_index";
import Search from "../Search/Search";
import AccessAccount from "./AccessAccount";
import Cart from "./Cart";

import IconCompany from "./IconCompany";
import ListFavorites from "./ListFavorites";

export function HeaderClient() {
  const [showSearch, setShowSearch] = useState(false);

  const pathImg: string = "/images/companyname.svg";

  return (
    <>
      <header className="h-[122px]  bg-[#5F5C6B] pt-7 ">
        <div className="container">
          <div
            className={`
            ${showSearch ? " justify-center" : "justify-between"}
            flex items-center

            `}
          >
            {!showSearch ? <IconCompany img={pathImg} /> : null}
            <Search showSearch={showSearch} setShowSearch={setShowSearch} />
            <AccessAccount />
          </div>

          <div className="flex">
            <ListFavorites />
            <Cart />
          </div>
        </div>
      </header>
      <NavBar />
    </>
  );
}
