import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Checkbox } from "../components/ui/checkbox";
import { Button } from "../components/ui/button";

const SetTimerPage: React.FC = () => {
  const [minutes, setMinutes] = useState(10);
  const [intervals, setIntervals] = useState(false);
  const [fiveMinBreak, setFiveMinBreak] = useState(false);

  const decreaseTime = () => setMinutes((prev) => Math.max(1, prev - 1));
  const increaseTime = () => setMinutes((prev) => prev + 1);

  return (
    <div className="flex flex-col h-screen bg-gray-200 px-4">
      <div className="flex-1 flex flex-col justify-end">
        <div className="flex items-center justify-center mb-20">
          <button onClick={decreaseTime} className="text-4xl mr-4">
            <ChevronLeft />
          </button>
          <div className="text-center">
            <span className="font-pt-sans text-[80px] font-bold leading-[103.52px] tracking-[0.1em] text-center">
              {minutes}
            </span>
            <p className="text-sm text-gray-600">minutes</p>
          </div>
          <button onClick={increaseTime} className="text-4xl ml-4">
            <ChevronRight />
          </button>
        </div>
        <div className="w-full max-w-xs mx-auto space-y-6 mb-16">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Checkbox
                id="intervals"
                checked={intervals}
                onCheckedChange={(checked) => setIntervals(checked as boolean)}
                className="w-6 h-6"
              />
              <label htmlFor="intervals" className="text-lg">
                intervals
              </label>
            </div>
            <div className="flex items-center space-x-4">
              <Checkbox
                id="fiveMinBreak"
                checked={fiveMinBreak}
                onCheckedChange={(checked) =>
                  setFiveMinBreak(checked as boolean)
                }
                className="w-6 h-6"
              />
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
