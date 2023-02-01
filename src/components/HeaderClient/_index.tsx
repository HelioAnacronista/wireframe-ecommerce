import AccessAccount from "./AccessAccount";
import Cart from "./Cart";
import IconCompany from "./IconCompon";
import ListFavorites from "./ListFavorites";
import Search from "./Search";

export function HeaderClient() {
  return (      
  <header className="pt-4 flex bg-mainColor-900 h-[162px]">
    <IconCompany />

    <Search />

    <AccessAccount />

    <div className='flex'>
      <ListFavorites />
      <Cart />
    </div>

  </header>
  );
}

