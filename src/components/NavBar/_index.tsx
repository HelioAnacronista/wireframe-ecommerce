import { useState } from "react";
import { MdMenu } from "react-icons/md";
import Menuitems from "./Menuitem";
import Sidebar from "./Sidebar/_index";

const subTitleData: string[] = ["test 01", "test 02", "test 03"];

function NavBar(): JSX.Element {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleCloseSidebar = (): void => {
    setShowSideBar(false);
  };

  return (
    <>
      <nav className="h-[40px] bg-[#F1F0F5]">
        <div className="container mx-auto flex h-full items-center justify-center sm:hidden">
          <Menuitems title={"Item menu 01"} subTitle={subTitleData} />
          <Menuitems title={"Item menu 02"} subTitle={subTitleData} />
          <Menuitems title={"Item menu 03"} subTitle={subTitleData} />
          <Menuitems title={"Item menu 04"} subTitle={subTitleData} />
          <Menuitems title={"Item menu 05"} subTitle={subTitleData} />
          <Menuitems title={"Item menu 06"} subTitle={subTitleData} />
        </div>

        <div
          onClick={() => setShowSideBar(true)}
          className="flex cursor-pointer items-center justify-center p-1"
        >
          <MdMenu size={34} />
          <Sidebar isOpen={showSideBar} />
        </div>
      </nav>
      {showSideBar && (
        <div
          className="fixed top-0 bottom-0 right-0 left-0"
          onClick={handleCloseSidebar}
        ></div>
      )}
      <div className="h-[8px] bg-[#5F5C6B]">1</div>
    </>
  );
}

export default NavBar;
