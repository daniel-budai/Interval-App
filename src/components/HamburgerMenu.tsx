import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleMenu} className="fixed top-4 left-4 z-50 p-2">
        <Menu size={24} color="black" />
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-200 z-40 flex flex-col items-center justify-center">
          <nav>
            <ul className="space-y-6 text-center">
              <li>
                <Link
                  to="/"
                  className="text-2xl text-white hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/set-timer"
                  className="text-2xl text-white hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Set Timer
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-2xl text-white hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Menu
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
