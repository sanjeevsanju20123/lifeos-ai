const researchSkill = (command) => {
  const text = command.toLowerCase();

  if (text.startsWith("search ")) {
    const query = command.substring(7);

    return {
      handled: true,
      response: `Searching for "${query}"...`,
    };
  }

  return {
    handled: false,
  };
};

export default researchSkill;