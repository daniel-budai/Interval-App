import React from "react";
import { useNavigate } from "react-router-dom";

const LoadingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/set-timer");
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col items-center justify-center h-screen bg-black cursor-pointer"
    >
      <img
        src="/src/assets/icons/interval-logo.png"
        alt="Interval Logo"
        className="mb-4"
      />
      <p className="text-white text-center font-pt-sans text-sm tracking-widest">
        For all your timing needs
      </p>
    </div>
  );
};

export default LoadingPage;
