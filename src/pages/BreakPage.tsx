import React from "react";
import { Button } from "../components/ui/button";
import AnimatedGradient from "../components/GradientBackground";

const BreakPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-[#222222] relative overflow-hidden px-4 py-8">
      <div className="absolute top-4 left-4 z-20">
        {/* Hamburger menu button */}
      </div>

      <div className="flex-1"></div>

      <div className="relative flex flex-col items-center w-full max-w-[400px]">
        <AnimatedGradient />
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-[132px] h-[132px] rounded-full flex items-center justify-center mb-6">
            <img
              src="../src/assets/icons/pause-icon.png"
              alt="Pause"
              className="w-18 h-18 translate-y-1"
            />
          </div>
          <h1 className="font-['PT_Sans'] text-[36px] font-bold leading-[46.58px] tracking-[0.1em] text-center text-white mt-20 mb-5">
            Pause & breath
          </h1>
          <p className="font-['PT_Sans'] text-[24px] font-normal leading-[31.06px] tracking-[0.1em] text-center text-custom-white mb-8">
            3:37
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-end justify-center w-full mt-8 ">
        <Button
          variant="outline"
          className="relative z-10 bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors px-8 py-2 w-full max-w-xs"
        >
          NO PAUSE, GO NOW!
        </Button>
      </div>
    </div>
  );
};

export default BreakPage;
