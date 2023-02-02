import MenuItems from "./MenuItems";

function NavBar() {
  return (
    <>
      <nav className="h-[40px] bg-[#F1F0F5]">
        <div className="container mx-auto flex h-full items-center justify-center">
          <MenuItems />
          <MenuItems />
          <MenuItems />
          <MenuItems />
          <MenuItems />
          <MenuItems />
        </div>
      </nav>
      <div className="h-[8px] bg-[#5F5C6B]"></div>
    </>
  );
}

export default NavBar;
