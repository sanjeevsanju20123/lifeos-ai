import { addTask, getTasks } from "../services/tasks";

const taskCommand = (command) => {
  const text = command.toLowerCase();

  if (text.startsWith("add task ")) {
    const task = command.substring(9);

    addTask(task);

    return `Task added: ${task}`;
  }

  if (text.includes("show tasks")) {
    const tasks = getTasks();

    if (tasks.length === 0) {
      return "You have no tasks.";
    }

    return tasks
      .map((task, index) => `${index + 1}. ${task.title}`)
      .join("\n");
  }

  return null;
};

export default taskCommand;