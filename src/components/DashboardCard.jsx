function DashboardCard({ title, value, icon, color }) {
  return (
    <div className="card">
      <div className="icon" style={{ background: color }}>
        {icon}
      </div>

      <h3>{title}</h3>

      <h2>{value}</h2>
    </div>
  );
}

export default DashboardCard;