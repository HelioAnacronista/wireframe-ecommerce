import { MdSearch } from "react-icons/md";

interface searchProps {
  showSearch: any;
  setShowSearch: any;
}

function Search({ showSearch, setShowSearch }: searchProps) {
  return (
    <>
      <div
        className="mr-2 flex h-[48px] w-[578px] rounded-full bg-[#FFFFFF] p-2 sm:hidden
    xl:flex"
      >
        <input
          type="text"
          value=""
          alt=""
          placeholder="As melhores ofertas estão aqui"
          className="w-full focus:outline-none focus:ring-0
      focus:ring-[#fff]"
        />

        <MdSearch size={40} className="h-8 cursor-pointer text-mainColor-500" />
      </div>

      <div className="relative xl:hidden">
        <button
          className={`"flex focus:outline-none" items-center ${
            showSearch ? "hidden" : null
          }`}
          onClick={() => setShowSearch(!showSearch)}
        >
          <MdSearch size={50} className="sm:text-mainColor-50" />
        </button>
        {showSearch && (
          <div
            className="flex items-center rounded-full bg-mainColor-50 p-1
            "
          >
            <input
              className="
              h-full
              w-full
              rounded-full
              border-0 
              bg-mainColor-50 
              pl-1 text-sm 
              focus:focus:outline-none
              focus:ring-0
            "
            />

            <button className="" onClick={() => setShowSearch(!showSearch)}>
              <MdSearch size={40} className="h-8 text-mainColor-500" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Search;
