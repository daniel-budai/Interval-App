import React from "react";

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="flex items-center justify-between w-full p-4">
      {children}
      <span className="text-sm text-gray-500">interval</span>
      <div className="w-6"></div>
    </header>
  );
};

export default Header;
