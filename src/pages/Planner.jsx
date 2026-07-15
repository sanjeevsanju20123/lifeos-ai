import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "../styles/Planner.css";
import Header from "../components/Header";
import StatsCards from "../components/StatsCards";
import TaskCard from "../components/TaskCard";
import EditTaskModal from "../components/EditTaskModal";

function Planner() {
  const [task, setTask] = useState("");

  const [priority, setPriority] = useState("Medium");

  const [category, setCategory] = useState("Personal");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedTask, setSelectedTask] = useState(null);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("all");

  const [sortBy, setSortBy] = useState("newest");

  const [dueDate, setDueDate] = useState("");

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

const addTask = () => {
  if (!task.trim()) return;

  setTasks(prev => [
    ...prev,
  {
  id: Date.now(),
  text: task,
  completed: false,
  priority,
  category,
  dueDate,
  createdAt: new Date().toISOString(),
    },
  ]);

  setTask("");
setPriority("Medium");
setCategory("Personal");
setDueDate("");
};

const toggleTask = (id) => {
  setTasks((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, completed: !item.completed }
        : item
    )
  );
};

const deleteTask = (id) => {
  setTasks(prev =>
    prev.filter(item => item.id !== id)
  );
};

const editTask = (id) => {
  const taskToEdit = tasks.find(task => task.id === id);

  if (!taskToEdit) return;

  setSelectedTask(taskToEdit);
  setIsModalOpen(true);
};

const totalTasks = tasks.length;

const completedTasks = tasks.filter(
  (task) => task.completed
).length;

const remainingTasks = totalTasks - completedTasks;

const progress =
  totalTasks === 0
    ? 0
    : Math.round((completedTasks / totalTasks) * 100);

    const filteredTasks = tasks.filter((item) => {
  // Search filter
  const matchesSearch = item.text
    .toLowerCase()
    .includes(search.toLowerCase());

  // Status filter
  const matchesFilter =
    filter === "all"
      ? true
      : filter === "active"
      ? !item.completed
      : item.completed;

  return matchesSearch && matchesFilter;
});

const sortedTasks = [...filteredTasks].sort((a, b) => {
  if (sortBy === "newest") {
    return new Date(b.createdAt) - new Date(a.createdAt);
  }

  if (sortBy === "oldest") {
    return new Date(a.createdAt) - new Date(b.createdAt);
  }

  if (sortBy === "priority") {
    const order = {
      High: 3,
      Medium: 2,
      Low: 1,
    };

    return order[b.priority] - order[a.priority];
  }

  if (sortBy === "dueDate") {
    if (!a.dueDate) return 1;
    if (!b.dueDate) return -1;

    return new Date(a.dueDate) - new Date(b.dueDate);
  }

  return 0;
});

  return (
    <div className="planner">
      <Header />
      <h1>📅 Planner</h1>
<StatsCards
  totalTasks={totalTasks}
  completedTasks={completedTasks}
  remainingTasks={remainingTasks}
  progress={progress}
/>

<div className="progress-container">
  <motion.div
    className="progress-bar"
    initial={{ width: 0 }}
    animate={{ width: `${progress}%` }}
    transition={{
      duration: 0.6,
      ease: "easeInOut",
    }}
  />
</div>

<p className="progress-text">{progress}% Completed</p>

<div className="search-box">
  <input
    type="text"
    placeholder="🔍 Search tasks..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>

<div className="filter-buttons">
  <button
    className={filter === "all" ? "active-filter" : ""}
    onClick={() => setFilter("all")}
  >
    All
  </button>

  <button
    className={filter === "active" ? "active-filter" : ""}
    onClick={() => setFilter("active")}
  >
    Active
  </button>

  <button
    className={filter === "completed" ? "active-filter" : ""}
    onClick={() => setFilter("completed")}
  >
    Completed
  </button>
</div>

<div className="sort-box">
  <label>Sort By: </label>

  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
  >
    <option value="newest">Newest</option>
    <option value="oldest">Oldest</option>
    <option value="priority">Priority</option>
    <option value="dueDate">Due Date</option>
  </select>
</div>

      <div className="planner-input">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <select
  value={priority}
  onChange={(e) => setPriority(e.target.value)}
>
  <option>Low</option>
  <option>Medium</option>
  <option>High</option>
</select>

<select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option>Personal</option>
  <option>Work</option>
  <option>Study</option>
  <option>Health</option>
  <option>Shopping</option>
</select>

<input
  type="date"
  value={dueDate}
  onChange={(e) => setDueDate(e.target.value)}
/>

        <button onClick={addTask}>Add</button>
      </div>

      <ul>
  <AnimatePresence>
    {sortedTasks.map((item, index) => (
      <TaskCard
        key={item.id}
        item={item}
        index={index}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ))}
  </AnimatePresence>
</ul>
<EditTaskModal
  isOpen={isModalOpen}
  task={selectedTask}
  onClose={() => {
    setIsModalOpen(false);
    setSelectedTask(null);
  }}
  onSave={(updatedTask) => {
  setTasks((prev) =>
    prev.map((item) =>
      item.id === updatedTask.id ? updatedTask : item
    )
  );

  setIsModalOpen(false);
  setSelectedTask(null);
}}
/>
    </div>
  );
}

export default Planner;