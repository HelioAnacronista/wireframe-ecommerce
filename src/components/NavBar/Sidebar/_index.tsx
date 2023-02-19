import React, { useEffect, useRef, useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [clickedOutside, setClickedOutside] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setClickedOutside(true);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={sidebarRef}
      className={`text-white absolute inset-y-0 left-0 z-50 w-64 bg-mainColor-800 p-4 transition-all ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div>
        <h2 className="mb-4 text-lg font-bold text-white-900">
          <a href="/">Sidebar</a>
        </h2>
        <ul>
          <li className="mb-2">
            <a
              href="productdetail"
              className="text-white-900 hover:text-mainColor-200"
            >
              productdetail
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white-900 hover:text-mainColor-200">
              Link 2
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white-900 hover:text-mainColor-200">
              Link 3
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
