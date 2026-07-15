import Header from "../components/Header";
import "../styles/Calendar.css";

function Calendar() {
  return (
    <>
      <Header />

      <div className="calendar-page">
        <div className="calendar-header">
          <button>{"<"}</button>

          <h2>July 2026</h2>

          <button>{">"}</button>
        </div>

        <div className="calendar-grid">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
      </div>
    </>
  );
}

export default Calendar;