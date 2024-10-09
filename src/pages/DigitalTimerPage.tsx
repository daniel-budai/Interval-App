import { DigitalTimer } from "../components/DigitalTimer";
import { Button } from "../components/ui/button";
import Header from "../components/Header";
import { Menu } from "lucide-react";

const DigitalTimerPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      <Header>
        <button className="p-1">
          <Menu size={24} color="black" />
        </button>
      </Header>
      <div className="flex-1 flex items-center justify-center">
        <DigitalTimer />
      </div>
      <div className="absolute bottom-16 left-0 right-0 flex justify-center">
        <Button variant="abortTimer">ABORT TIMER</Button>
      </div>
    </div>
  );
};

export default DigitalTimerPage;
