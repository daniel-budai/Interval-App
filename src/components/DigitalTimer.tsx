interface DigitalTimerProps {
  time: number;
}

export function DigitalTimer({ time }: DigitalTimerProps) {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");

  return (
    <div className="w-64">
      <div className="relative w-full pb-[100%] flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold">{`${minutes}:${seconds}`}</span>
        </div>
      </div>
    </div>
  );
}
