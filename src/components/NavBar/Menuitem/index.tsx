import { useEffect, useState } from "react";

interface DropdownComponentProps {
  title?: string;
  subTitle: string[];
  icon?: React.ReactElement;
  className?: string;
  subClassName?: string;
}

function Menuitems({
  title,
  subTitle,
  icon,
  className,
  subClassName,
}: DropdownComponentProps) {
  const [titleSub, setTitleSub] = useState<String[]>(subTitle);

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

  console.log(dropdownOpen);
  return (
    <div className="relative" id="dropdown">
      <button
        className={`
            mx-1
            bg-none
            px-4
            py-1 font-semibold
            text-[#5F5C6B] transition duration-300 hover:bg-[#E1E0E7] focus:outline-none
            ${className}
          `}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {title} {icon}
      </button>
      {dropdownOpen && (
        <div
          className={`
        w- absolute left-0 z-50 mt-2 rounded-md bg-[#E1E0E7]
        ${subClassName}
        `}
        >
          {titleSub.map((x) => (
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-[#F6F6F8]"
            >
              {x}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Menuitems;
