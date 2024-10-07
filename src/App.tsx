import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
import SetTimerPage from "./pages/SetTimerPage";
import HamburgerMenu from "./components/HamburgerMenu";

function App() {
  return (
    <Router>
      <div className="relative">
        <HamburgerMenu />
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/set-timer" element={<SetTimerPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
