import GlassCard from "./ui/GlassCard";
import "../styles/HeroCard.css";

function HeroCard() {
  return (
    <GlassCard className="hero-card">
      <div className="hero-left">
        <span className="hero-badge">🚀 LifeOS AI</span>

        <h2>Your Second Brain</h2>

        <p>
          Organize tasks, build habits, manage your finances,
          monitor your health, and let ARES help you stay productive.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">➕ Add Task</button>
          <button className="secondary-btn">🤖 Open ARES</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="productivity-circle">
          <span>84%</span>
          <small>Productivity</small>
        </div>
      </div>
    </GlassCard>
  );
}

export default HeroCard;