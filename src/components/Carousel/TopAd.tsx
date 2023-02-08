import { MdNavigateNext, MdStar } from "react-icons/md";

function Top() {
  return (
    <div className="absolute inset-x-0 top-20 text-center">
      <div className="flex items-center justify-center text-center text-mainColor-50">
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStar />
      </div>
    </div>
  );
}

export default Top;
