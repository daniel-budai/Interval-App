import React, { createContext, useState, useContext } from "react";
import { TimerSettings, TimerContextType } from "../types/timer";

export const TimerContext = createContext<TimerContextType | undefined>(
  undefined
);

export const useTimerContext = () => {
  const context = useContext(TimerContext);
  if (context === undefined) {
    throw new Error("useTimerContext must be used within a TimerProvider");
  }
  return context;
};

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [timerSettings, setTimerSettings] = useState<TimerSettings>({
    duration: 10 * 60,
    isInterval: false,
    hasBreak: false,
  });
  const [isRunning, setIsRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(timerSettings.duration);
  const [isBreak, setIsBreak] = useState(false);

  return (
    <TimerContext.Provider
      value={{
        timerSettings,
        setTimerSettings,
        isRunning,
        setIsRunning,
        currentTime,
        setCurrentTime,
        isBreak,
        setIsBreak,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
