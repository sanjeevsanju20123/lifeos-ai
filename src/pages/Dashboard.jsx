import { useState, useEffect } from "react";
import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";
import "../styles/Dashboard.css";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  const today = new Date().toISOString().split("T")[0];

  const todaysTasks = tasks.filter(
    (task) => task.dueDate === today
  );

  const completedToday = todaysTasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="dashboard">
      <Header />

      <div className="cards">
        <DashboardCard
          title="Habits"
          value="5 / 8"
          icon="✅"
          color="#22c55e"
        />

        <DashboardCard
          title="Mood"
          value="😊 Happy"
          icon="😊"
          color="#3b82f6"
        />

        <DashboardCard
          title="Finance"
          value="₹12,450"
          icon="💰"
          color="#f59e0b"
        />

        <DashboardCard
          title="Health"
          value="7 hrs Sleep"
          icon="❤️"
          color="#ef4444"
        />
      </div>

      <div className="today-section">
        <h2>📅 Today's Tasks</h2>

        {todaysTasks.length === 0 ? (
          <p>No tasks for today.</p>
        ) : (
          <ul>
            {todaysTasks.map((task) => (
              <li key={task.id}>
                {task.completed ? "✅" : "⬜"} {task.text}
              </li>
            ))}
          </ul>
        )}

        <p>
          Completed: {completedToday} / {todaysTasks.length}
        </p>
      </div>
    </div>
  );
}

export default Dashboard;