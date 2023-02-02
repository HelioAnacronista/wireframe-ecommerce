import NavBar from "../NavBar/_index";
import AccessAccount from "./AccessAccount";
import Cart from "./Cart";
import IconCompany from "./IconCompon";
import ListFavorites from "./ListFavorites";
import Search from "./Search";

export function HeaderClient() {
  return (
    <>
      <header className="h-[122px] bg-[#5F5C6B] pt-7">
        <div className="container flex items-center justify-center">
          <IconCompany />

          <Search />

          <AccessAccount />

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
