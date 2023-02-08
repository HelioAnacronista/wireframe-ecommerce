import { MdStar } from "react-icons/md";

function Top() {
  return (
    <div className="absolute inset-x-0 top-20 text-center">
      <div
        className="
        ml-20 mr-28  flex items-center justify-center
        rounded-full border-2 border-mainColor-50 
        p-2 
        text-center text-mainColor-50"
      >
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
