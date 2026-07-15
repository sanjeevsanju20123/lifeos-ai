import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";
import "../styles/Dashboard.css";

function Dashboard() {
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

    </div>
  );
}

export default Dashboard;