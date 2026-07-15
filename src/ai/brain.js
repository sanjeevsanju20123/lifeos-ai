import generalCommand from "../commands/generalCommand";
import taskCommand from "../commands/taskCommand";
import researchSkill from "../skills/researchSkill";

const brain = (command) => {

  const task = taskCommand(command);
  if (task) return task;

  const research = researchSkill(command);
  if (research.handled) return research.response;

  const general = generalCommand(command);
  if (general) return general;

  return "I'm still learning.";
};

export default brain;