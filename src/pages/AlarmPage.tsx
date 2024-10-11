import React from "react";
import { Button } from "../components/ui/button";
import AnimatedGradient from "../components/GradientBackground";
import { useNavigate } from "react-router-dom";
import { useTimer } from "../hooks/useTimer"; // Update this import

const AlarmPage: React.FC = () => {
  const navigate = useNavigate();
  const { setIsRunning } = useTimer({
    duration: 10 * 60, // Default 10 minutes
    isInterval: false,
    hasBreak: false,
  });

  const handleSetNewTimer = () => {
    setIsRunning(false);
    navigate("/set-timer");
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-[#222222] relative overflow-hidden px-4 py-8">
      <div className="absolute top-4 left-4 z-20">
        {/* Hamburger menu button */}
      </div>

      <div className="flex-1"></div>

      <div className="relative flex flex-col items-center w-full max-w-[400px]">
        <AnimatedGradient />
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-[132px] h-[132px] rounded-full  flex items-center justify-center mb-6">
            <img
              src="../src/assets/icons/bell-icon.png"
              alt="Bell"
              className="w-20 h-20 translate-y-2"
            />
          </div>
          <h1 className="text-white text-4xl font-bold mt-10 tracking-[0.2em]">
            Times up!
          </h1>
        </div>
      </div>

      <div className="flex-1 flex items-end justify-center w-full mt-8">
        <Button
          variant="outline"
          className="relative z-10 bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors px-8 py-2 w-full max-w-xs"
          onClick={handleSetNewTimer}
        >
          SET NEW TIMER
        </Button>
      </div>
    </div>
  );
};

export default AlarmPage;
