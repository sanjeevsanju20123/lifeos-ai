const generalCommand = (text) => {
  if (text.includes("hello")) {
    return "Hello, Sanjeev. Welcome back.";
  }

  if (text.includes("who are you")) {
    return "I am ARES, your personal AI operating system.";
  }

  return null;
};

export default generalCommand;