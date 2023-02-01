import NavBar from "../NavBar/_index";
import AccessAccount from "./AccessAccount";
import Cart from "./Cart";
import IconCompany from "./IconCompon";
import ListFavorites from "./ListFavorites";
import Search from "./Search";

export function HeaderClient() {
  return (
    <>      
    <header className="pt-7 bg-[#5F5C6B] h-[122px]">
      <div className="container mx-auto flex">
      <IconCompany />

      <Search />

      <AccessAccount />

      <div className='flex'>
        <ListFavorites />
        <Cart />
      </div>
      </div>
    </header>
  <NavBar />
  </>
  );
}

