import { useState, useEffect } from "react";

interface DropdownComponentProps {
  title: string;
  subTitle: string;
}

function DropdownComponent({ title, subTitle }: DropdownComponentProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target instanceof Node)) {
        return;
      }
      const dropdown = document.getElementById("dropdown");
      if (dropdown && !dropdown.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" id="dropdown">
      <button
        className="
        mx-1
        bg-none
        px-8
        py-1 font-semibold
        text-[#5F5C6B] transition duration-300 hover:bg-[#E1E0E7] focus:outline-none "
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {title}
      </button>
      {dropdownOpen && (
        <div className="absolute left-0 z-50 mt-2 w-48 rounded-md bg-[#E1E0E7]">
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm hover:bg-[#E1E0E7]"
          >
            {subTitle || "subTitle"}
          </a>
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm hover:bg-[#E1E0E7]"
          >
            Action 2
          </a>
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm hover:bg-[#E1E0E7]"
          >
            Action 3
          </a>
        </div>
      )}
    </div>
  );
}

export default DropdownComponent;
