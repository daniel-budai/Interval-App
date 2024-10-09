import { Button } from "./ui/button";

export function DigitalTimer() {
  return (
    <div className="w-64">
      <div className="relative w-full pb-[100%] flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold">7:32</span>
        </div>
      </div>
      <Button
        variant="outline"
        className="w-full mt-4 text-red-500 border-red-500 hover:bg-red-50"
      >
        ABORT TIMER
      </Button>
    </div>
  );
}
