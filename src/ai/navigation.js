const navigation = (command, navigate) => {
  const text = command.toLowerCase();

  if (text.includes("planner")) {
    navigate("/planner");
    return "Opening Planner.";
  }

  if (text.includes("dashboard")) {
    navigate("/");
    return "Opening Dashboard.";
  }

  if (text.includes("finance")) {
    navigate("/finance");
    return "Opening Finance.";
  }

  if (text.includes("habits")) {
    navigate("/habits");
    return "Opening Habits.";
  }

  if (text.includes("health")) {
    navigate("/health");
    return "Opening Health.";
  }

  if (text.includes("mood")) {
    navigate("/mood");
    return "Opening Mood.";
  }

  return null;
};

export default navigation;