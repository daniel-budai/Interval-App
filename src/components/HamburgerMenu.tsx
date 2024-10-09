import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  if (!isOpen) {
    return (
      <button onClick={toggleMenu} className="fixed top-4 left-4 z-50 p-1">
        <Menu size={24} color="black" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-gray-200 z-50 flex flex-col items-center justify-center">
      <nav>
        <ul className="space-y-6 text-center">
          <li>
            <Link
              to="/"
              className="text-2xl text-gray-800 hover:text-gray-600"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/set-timer"
              className="text-2xl text-gray-800 hover:text-gray-600"
              onClick={toggleMenu}
            >
              Set Timer
            </Link>
          </li>
          <li>
            <Link
              to="/analog-timer"
              className="text-2xl text-gray-800 hover:text-gray-600"
              onClick={toggleMenu}
            >
              Analog Timer
            </Link>
          </li>
          <li>
            <Link
              to="/digital-timer"
              className="text-2xl text-gray-800 hover:text-gray-600"
              onClick={toggleMenu}
            >
              Digital Timer
            </Link>
          </li>
          <li>
            <Link
              to="/alarm"
              className="text-2xl text-gray-800 hover:text-gray-600"
              onClick={toggleMenu}
            >
              Alarm
            </Link>
          </li>
          <li>
            <Link
              to="/break"
              className="text-2xl text-gray-800 hover:text-gray-600"
              onClick={toggleMenu}
            >
              Break
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
