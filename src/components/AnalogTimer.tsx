import React from "react";

interface AnalogTimerProps {
  time: number;
}

export const AnalogTimer: React.FC<AnalogTimerProps> = ({ time }) => {
  const seconds = time % 60;
  const secondAngle = 360 - (seconds / 60) * 360;

  return (
    <div className="w-64">
      <div className="relative w-full pb-[100%]">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          {/* Clock face */}
          {[...Array(60)].map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="2"
              x2="50"
              y2="4"
              transform={`rotate(${i * 6} 50 50)`}
              stroke="currentColor"
              strokeWidth="0.75"
              className="text-black"
            />
          ))}
          {/* Second hand */}
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="10"
            transform={`rotate(${secondAngle} 50 50)`}
            stroke="currentColor"
            strokeWidth="1"
            className="text-black"
          />
        </svg>
      </div>
    </div>
  );
};
