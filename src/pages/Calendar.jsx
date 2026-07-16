import { useState, useEffect } from "react";
import Header from "../components/Header";
import "../styles/Calendar.css";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const [selectedDay, setSelectedDay] = useState(null);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
    setTasks(JSON.parse(savedTasks));
  }
}, []);

const toggleTask = (id) => {
  const updatedTasks = tasks.map((task) =>
    task.id === id
      ? { ...task, completed: !task.completed }
      : task
  );

  setTasks(updatedTasks);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};

  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();

  const firstDay = new Date(year, currentDate.getMonth(), 1).getDay();

  const previousMonth = () => {
    setCurrentDate(new Date(year, currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, currentDate.getMonth() + 1, 1));
  };

  const today = new Date();
  const selectedTasks = tasks.filter((task) => {
  if (!selectedDay) return false;

  const selectedDate = `${year}-${String(
    currentDate.getMonth() + 1
  ).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}`;

  return task.dueDate === selectedDate;
});

  return (
    <>
      <Header />

      <div className="calendar-page">
        <div className="calendar-header">
          <button onClick={previousMonth}>◀</button>

          <h2>
            {month} {year}
          </h2>

          <button onClick={nextMonth}>▶</button>
        </div>

        <div className="weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        <div className="calendar-grid">
          {Array.from({ length: firstDay }).map((_, index) => (
            <div key={`empty-${index}`} className="empty"></div>
          ))}

          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;

            const dateString = `${year}-${String(
  currentDate.getMonth() + 1
).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

const dayTasks = tasks.filter(
  (task) => task.dueDate === dateString
);
console.log(dayTasks);

            const isToday =
              day === today.getDate() &&
              currentDate.getMonth() === today.getMonth() &&
              year === today.getFullYear();

            const isSelected = selectedDay === day;

            return (
              <div
               key={day}
               onClick={() => setSelectedDay(day)}
              className={`calendar-day ${isToday ? "today" : ""} ${
               isSelected ? "selected" : ""
               }`}
                >
               {day}

{dayTasks.length > 0 && (
  <div className="task-indicator">

    {dayTasks.map((task) => (
      <span
        key={task.id}
        className={`task-dot ${task.priority.toLowerCase()}`}
      ></span>
    ))}

  </div>
)}
            </div>
            );
          })}
        </div>
        {selectedDay && (
  <div className="selected-date">
    <h3>📅 Selected Date</h3>

    <p>
      {selectedDay} {month} {year}
    </p>

    <h4>Tasks:</h4>

    {selectedTasks.length === 0 ? (
      <p>No tasks for this day.</p>
    ) : (
      <ul>
        {selectedTasks.map((task) => (
          <li key={task.id}>
  <input
    type="checkbox"
    checked={task.completed}
    onChange={() => toggleTask(task.id)}
  />

  {task.text}
</li>
        ))}
      </ul>
    )}
  </div>
)}
      </div>
    </>
  );
}

export default Calendar;