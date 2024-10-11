import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { useTimer } from "../hooks/useTimer";
import { Checkbox } from "../components/ui/checkbox";
import { Button } from "../components/ui/button";

const SetTimerPage: React.FC = () => {
  const navigate = useNavigate();
  const { timerSettings, updateTimerSettings } = useTimer({
    duration: 10 * 60,
    isInterval: false,
    hasBreak: false,
  });

  const handleDurationChange = (increment: boolean) => {
    const newDuration = Math.max(
      60,
      timerSettings.duration + (increment ? 60 : -60)
    );
    updateTimerSettings({ duration: newDuration });
  };

  const handleFiveMinBreakChange = (checked: boolean) => {
    updateTimerSettings({ hasBreak: checked });
  };

  const handleStartTimer = () => {
    navigate(timerSettings.isInterval ? "/analog-timer" : "/digital-timer", {
      state: { timerSettings },
    });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-200 px-4">
      <div className="absolute top-4 left-4">
        <button className="p-1">
          <Menu size={24} color="black" />
        </button>
      </div>
      <div className="flex-1 flex flex-col justify-end">
        <div className="flex items-center justify-center mb-20">
          <button
            className="text-4xl mr-4"
            onClick={() => handleDurationChange(false)}
          >
            <ChevronLeft />
          </button>
          <div className="text-center">
            <span className="font-pt-sans text-[80px] font-bold leading-[103.52px] tracking-[0.1em] text-center">
              {Math.floor(timerSettings.duration / 60)}
            </span>
            <p className="text-sm text-gray-600">minutes</p>
          </div>
          <button
            className="text-4xl ml-4"
            onClick={() => handleDurationChange(true)}
          >
            <ChevronRight />
          </button>
        </div>
        <div className="w-full max-w-xs mx-auto space-y-6 mb-16">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Checkbox
                id="intervals"
                checked={timerSettings.isInterval}
                onCheckedChange={(checked) =>
                  updateTimerSettings({
                    isInterval: checked === true,
                  })
                }
              />
              <label htmlFor="intervals" className="text-lg">
                intervals
              </label>
            </div>
            <div className="flex items-center space-x-4">
              <Checkbox
                id="fiveMinBreak"
                checked={timerSettings.hasBreak}
                onCheckedChange={handleFiveMinBreakChange}
              />
              <label htmlFor="fiveMinBreak" className="text-lg">
                5 min break
              </label>
            </div>
            <Button onClick={handleStartTimer} variant="timerStart">
              START TIMER
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetTimerPage;
