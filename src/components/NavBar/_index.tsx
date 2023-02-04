import Menuitems from "./Menuitem";

import { MdMenu } from "react-icons/md";

const subTitleData: string[] = ["test 01", "test 02", "test 03"];

function NavBar() {
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
        <div>
          <div className=" flex items-center justify-center p-1">
            <MdMenu size={34} />
          </div>
        </div>
      </nav>
      <div className="h-[8px] bg-[#5F5C6B]"></div>
    </>
  );
}

export default NavBar;
