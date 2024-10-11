import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TimerSettings } from "../types/timer";

export const useTimer = (initialSettings: TimerSettings) => {
  const [timerSettings, setTimerSettings] =
    useState<TimerSettings>(initialSettings);
  const [isRunning, setIsRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(initialSettings.duration);
  const [isBreak, setIsBreak] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && currentTime > 0) {
      interval = setInterval(() => {
        setCurrentTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (currentTime === 0) {
      if (timerSettings.hasBreak && !isBreak) {
        setIsBreak(true);
        setCurrentTime(5 * 60); // 5 minutes break
        navigate("/break");
      } else {
        navigate("/alarm");
      }
    }
    return () => clearInterval(interval);
  }, [isRunning, currentTime, timerSettings.hasBreak, isBreak, navigate]);

  const startTimer = useCallback(() => setIsRunning(true), []);
  const pauseTimer = useCallback(() => setIsRunning(false), []);
  const resetTimer = useCallback(() => {
    setCurrentTime(timerSettings.duration);
    setIsRunning(false);
    setIsBreak(false);
  }, [timerSettings.duration]);

  const updateTimerSettings = useCallback(
    (newSettings: Partial<TimerSettings>) => {
      setTimerSettings((prev) => ({ ...prev, ...newSettings }));
    },
    []
  );

  return {
    timerSettings,
    setTimerSettings,
    isRunning,
    setIsRunning,
    currentTime,
    setCurrentTime,
    isBreak,
    setIsBreak,
    startTimer,
    pauseTimer,
    resetTimer,
    updateTimerSettings,
  };
};
