export interface TimerSettings {
  duration: number;
  isInterval: boolean;
  hasBreak: boolean;
}

export interface TimerContextType {
  timerSettings: TimerSettings;
  setTimerSettings: React.Dispatch<React.SetStateAction<TimerSettings>>;
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  currentTime: number;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  isBreak: boolean;
  setIsBreak: React.Dispatch<React.SetStateAction<boolean>>;
}
