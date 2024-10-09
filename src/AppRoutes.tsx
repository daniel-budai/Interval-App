import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
import SetTimerPage from "./pages/SetTimerPage";
import AnalogTimerPage from "./pages/AnalogTimerPage";
import DigitalTimerPage from "./pages/DigitalTimerPage";
import HamburgerMenu from "./components/HamburgerMenu";
import AlarmPage from "./pages/AlarmPage";
import BreakPage from "./pages/BreakPage";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-gray-100">
        <HamburgerMenu />
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/set-timer" element={<SetTimerPage />} />
          <Route path="/analog-timer" element={<AnalogTimerPage />} />
          <Route path="/digital-timer" element={<DigitalTimerPage />} />
          <Route path="/alarm" element={<AlarmPage />} />
          <Route path="/break" element={<BreakPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
