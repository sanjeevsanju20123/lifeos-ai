const STORAGE_KEY = "ares_tasks";

const loadTasks = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
};

let tasks = loadTasks();

const saveTasks = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

export const addTask = (task) => {
  tasks.push({
    id: Date.now(),
    title: task,
    completed: false,
  });

  saveTasks();
};

export const getTasks = () => {
  return tasks;
};

export const completeTask = (id) => {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: true } : task
  );

  saveTasks();
};

export const deleteTask = (id) => {
  tasks = tasks.filter((task) => task.id !== id);

  saveTasks();
};