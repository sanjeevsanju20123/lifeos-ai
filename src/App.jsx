import "./App.css";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Planner from "./pages/Planner";
import Habits from "./pages/Habits";
import Mood from "./pages/Mood";
import Finance from "./pages/Finance";
import Health from "./pages/Health";
import Ares from "./pages/Ares";
import Calendar from "./pages/Calendar";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/habits" element={<Habits />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/mood" element={<Mood />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/health" element={<Health />} />
          <Route path="/ares" element={<Ares />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;