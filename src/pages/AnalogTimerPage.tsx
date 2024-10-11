import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "../components/ui/button";
import Header from "../components/Header";
import { AnalogTimer } from "../components/AnalogTimer";
import { useTimer } from "../hooks/useTimer";

const AnalogTimerPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const timerSettings = location.state?.timerSettings || {
    duration: 10 * 60,
    isInterval: false,
    hasBreak: false,
  };
  const { setIsRunning, currentTime } = useTimer(timerSettings);

  useEffect(() => {
    setIsRunning(true);
  }, [setIsRunning]);

  const handleAbort = () => {
    setIsRunning(false);
    navigate("/set-timer");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      <Header>
        <button className="p-1">
          <Menu size={24} color="black" />
        </button>
      </Header>
      <div className="flex-1 flex items-center justify-center">
        <AnalogTimer time={currentTime} />
      </div>
      <div className="absolute bottom-16 left-0 right-0 flex justify-center">
        <Button variant="abortTimer" onClick={handleAbort}>
          ABORT TIMER
        </Button>
      </div>
    </div>
  );
};

export default AnalogTimerPage;
