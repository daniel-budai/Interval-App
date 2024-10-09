import React from "react";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { Checkbox } from "../components/ui/checkbox";
import { Button } from "../components/ui/button";

const SetTimerPage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-200 px-4">
      <div className="absolute top-4 left-4">
        <button className="p-1">
          <Menu size={24} color="black" />
        </button>
      </div>
      <div className="flex-1 flex flex-col justify-end">
        <div className="flex items-center justify-center mb-20">
          <button className="text-4xl mr-4">
            <ChevronLeft />
          </button>
          <div className="text-center">
            <span className="font-pt-sans text-[80px] font-bold leading-[103.52px] tracking-[0.1em] text-center">
              10
            </span>
            <p className="text-sm text-gray-600">minutes</p>
          </div>
          <button className="text-4xl ml-4">
            <ChevronRight />
          </button>
        </div>
        <div className="w-full max-w-xs mx-auto space-y-6 mb-16">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Checkbox id="intervals" className="w-6 h-6" />
              <label htmlFor="intervals" className="text-lg">
                intervals
              </label>
            </div>
            <div className="flex items-center space-x-4">
              <Checkbox id="fiveMinBreak" className="w-6 h-6" />
              <label htmlFor="fiveMinBreak" className="text-lg">
                5 min break / interval
              </label>
            </div>
          </div>
          <Button className="w-full text-lg py-3">START TIMER</Button>
        </div>
      </div>
    </div>
  );
};

export default SetTimerPage;
