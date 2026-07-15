import { useState } from "react";
import Header from "../components/Header";
import "../styles/Calendar.css";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

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

            const isToday =
              day === today.getDate() &&
              currentDate.getMonth() === today.getMonth() &&
              year === today.getFullYear();

            return (
              <div
                key={day}
                className={`calendar-day ${isToday ? "today" : ""}`}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Calendar;