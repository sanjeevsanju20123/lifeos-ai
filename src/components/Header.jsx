import { motion } from "framer-motion";
import { FaTasks } from "react-icons/fa";
import "../styles/Header.css";

function Header() {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="header-left">
        <h1>
          <FaTasks className="header-icon" />
          LifeOS Planner
        </h1>

        <p>Your Personal Productivity Dashboard</p>
      </div>
    </motion.header>
  );
}

export default Header;