import { motion } from "framer-motion";

function TaskCard({
  item,
  index,
  toggleTask,
  deleteTask,
  editTask,
}) {
  return (
    <motion.li
  className="task-card"
  layout
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{
    opacity: 0,
    x: 100,
    transition: { duration: 0.25 },
  }}
  transition={{ duration: 0.35 }}
  whileHover={{
    scale: 1.02,
    y: -3,
  }}
>
      <div className="task-top">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => toggleTask(item.id)}
        />

        <span className={item.completed ? "completed-task" : ""}>
          {item.text}
        </span>
      </div>

      <div className="task-details">
        <span
  className={`category-badge ${item.category.toLowerCase()}`}
>
  🏷 {item.category}
</span>

        <span
  className={`priority-badge ${item.priority.toLowerCase()}`}
>
          🚩 {item.priority}
        </span>
      </div>

      <div className="task-actions">
        <motion.button
  className="edit-btn"
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => editTask(item.id)}
>
  ✏ Edit
</motion.button>

        <motion.button
  className="delete-btn"
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => deleteTask(item.id)}
>
  🗑 Delete
</motion.button>
      </div>
    </motion.li>
  );
}

export default TaskCard;