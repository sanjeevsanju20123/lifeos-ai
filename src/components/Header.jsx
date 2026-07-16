import { motion } from "framer-motion";
import "../styles/Header.css";

function Header() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";
  let emoji = "🌙";

  if (hour < 12) {
    greeting = "Good Morning";
    emoji = "☀️";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
    emoji = "🌤";
  }

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="header">
      <div>
        <h1>
          {emoji} {greeting}, Sanjeev
        </h1>

        <p>{today}</p>
      </div>
    </div>
  );
}

export default Header;