import React from "react";
import { AnalogTimer } from "../components/AnalogTimer";
import Header from "../components/Header";
import { Menu } from "lucide-react";

const AnalogTimerPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header>
        <button className="p-1">
          <Menu size={24} color="black" />
        </button>
      </Header>
      <div className="flex-1 flex items-center justify-center">
        <AnalogTimer />
      </div>
    </div>
  );
};

export default AnalogTimerPage;
