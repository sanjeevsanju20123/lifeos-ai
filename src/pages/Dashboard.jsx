import GlassCard from "../components/ui/GlassCard";
import Header from "../components/Header";
import HeroCard from "../components/HeroCard";

function Dashboard() {
  return (
    <>
      <Header />

      <HeroCard />

      <GlassCard>
        <h2>🚀 Welcome to LifeOS AI</h2>

        <p>This is our first premium component.</p>
      </GlassCard>
    </>
  );
}

export default Dashboard;