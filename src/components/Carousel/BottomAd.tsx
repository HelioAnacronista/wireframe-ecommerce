import { ReactNode } from "react";
import { MdNavigateNext } from "react-icons/md";

interface BottomProps {
  children: ReactNode;
}
//
function Bottom({ children }: BottomProps) {
  return (
    <>
      <div
        className="
        absolute h-[160px] w-[340px] items-center justify-center 
        rounded-lg bg-white-900 p-5 pt-8
        font-semibold
        text-mainColor-700
        shadow-md"
      >
        <div className="absolute inset-x-0 top-3 flex items-center justify-center">
          {children}
        </div>
        <div className="mb-3 h-[52px] w-[292px] items-center justify-center rounded-md bg-[#F6F6F8] pt-2 text-center text-[#5F5C6B]">
          Booking now $99
        </div>
        <div className="flex h-[52px] w-[292px] items-center justify-center rounded-md bg-[#5F5C6B] text-center text-white-900">
          mais opções
          <MdNavigateNext size={30} />
        </div>
      </div>
    </>
  );
}

export default Bottom;
