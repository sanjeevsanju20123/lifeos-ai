import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaCalendarAlt,
  FaCheckSquare,
  FaSmile,
  FaWallet,
  FaHeart,
  FaUsers,
  FaCog,
  FaRobot,
} from "react-icons/fa";

import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>🚀 LifeOS AI</h2>

      <nav>
        <NavLink to="/" end>
          <FaHome /> Dashboard
        </NavLink>

        <NavLink to="/planner">
          <FaCalendarAlt /> Planner
        </NavLink>

        <NavLink to="/habits">
          <FaCheckSquare /> Habits
        </NavLink>

        <NavLink to="/mood">
          <FaSmile /> Mood
        </NavLink>

        <NavLink to="/finance">
          <FaWallet /> Finance
        </NavLink>

        <NavLink to="/health">
          <FaHeart /> Health
        </NavLink>

        <NavLink to="/team">
          <FaUsers /> Team
        </NavLink>

        <NavLink to="/ares">
          <FaRobot /> ARES
        </NavLink>

        <NavLink to="/settings">
          <FaCog /> Settings
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;