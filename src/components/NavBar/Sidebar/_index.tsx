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
      className={`text-white fixed inset-y-0 left-0 w-64 bg-mainColor-400 p-4 transition-all ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div>
        <h2 className="mb-4 text-lg font-bold">Sidebar</h2>
        <ul>
          <li className="mb-2">
            <a href="#" className="text-gray-400 hover:text-white">
              Link 1
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-400 hover:text-white">
              Link 2
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-400 hover:text-white">
              Link 3
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
