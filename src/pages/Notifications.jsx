import { useState, useEffect } from "react";
import Header from "../components/Header";
import "../styles/Notifications.css";

function Notifications() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  setTasks(savedTasks);
}, []);

const highPriority = tasks.filter(
  (task) => task.priority === "High" && !task.completed
);

const today = new Date().toISOString().split("T")[0];

const dueToday = tasks.filter(
  (task) =>
    task.dueDate === today &&
    !task.completed
);

const overdue = tasks.filter(
  (task) =>
    task.dueDate &&
    task.dueDate < today &&
    !task.completed
);

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const tomorrowString = tomorrow.toISOString().split("T")[0];

const dueTomorrow = tasks.filter(
  (task) =>
    task.dueDate === tomorrowString &&
    !task.completed
);

  return (
    <>
      <Header />

      <div className="notifications-page">
        <h1>🔔 Notifications</h1>

        <div className="notification-section">
  <h2>🔴 High Priority ({highPriority.length})</h2>

  {highPriority.length === 0 ? (
    <p>No high priority tasks.</p>
  ) : (
    <ul>
      {highPriority.map((task) => (
        <li key={task.id}>
          {task.text}
        </li>
      ))}
    </ul>
  )}

  <h2>📆 Due Tomorrow ({dueTomorrow.length})</h2>

{dueTomorrow.length === 0 ? (
  <p>No tasks due tomorrow.</p>
) : (
  <ul>
    {dueTomorrow.map((task) => (
      <li key={task.id}>
        {task.text}
      </li>
    ))}
  </ul>
)}

  <h2>📅 Due Today ({dueToday.length})</h2>

{dueToday.length === 0 ? (
  <p>No tasks due today.</p>
) : (
  <ul>
    {dueToday.map((task) => (
      <li key={task.id}>
        {task.text}
      </li>
    ))}
  </ul>
)}

<h2>⚠️ Overdue ({overdue.length})</h2>

{overdue.length === 0 ? (
  <p>No overdue tasks.</p>
) : (
  <ul>
    {overdue.map((task) => (
      <li key={task.id}>
        {task.text}
      </li>
    ))}
  </ul>
)}

</div>
      </div>
    </>
  );
}

export default Notifications;