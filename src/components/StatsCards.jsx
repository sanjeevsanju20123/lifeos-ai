import { motion } from "framer-motion";
import { FaTasks, FaCheckCircle, FaClock, FaChartLine } from "react-icons/fa";
import "../styles/StatsCards.css";

function StatsCards({
  totalTasks,
  completedTasks,
  remainingTasks,
  progress,
}) {
  const cards = [
    {
      title: "Total Tasks",
      value: totalTasks,
      icon: <FaTasks />,
    },
    {
      title: "Completed",
      value: completedTasks,
      icon: <FaCheckCircle />,
    },
    {
      title: "Remaining",
      value: remainingTasks,
      icon: <FaClock />,
    },
    {
      title: "Progress",
      value: `${progress}%`,
      icon: <FaChartLine />,
    },
  ];

  return (
    <div className="stats-grid">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          className="stat-card"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.1,
            duration: 0.4,
          }}
          whileHover={{
            scale: 1.04,
            y: -5,
          }}
        >
          <div className="stat-icon">{card.icon}</div>

          <h2>{card.value}</h2>

          <p>{card.title}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default StatsCards;