import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function EditTaskModal({ isOpen, task, onClose, onSave }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (task) {
      setText(task.text);
    }
  }, [task]);

  if (!isOpen) return null;

  return (
    <motion.div
  className="modal-overlay"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
      <motion.div
  className="modal"
  initial={{
    scale: 0.8,
    opacity: 0,
    y: -30,
  }}
  animate={{
    scale: 1,
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.3,
  }}
>
        <h2>✏ Edit Task</h2>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Task name"
        />

        <div className="modal-buttons">
          <button onClick={onClose}>
            Cancel
          </button>

          <button
  onClick={() =>
    onSave({
      ...task,
      text,
    })
  }
>
  Save
</button>
        </div>
      </motion.div>
</motion.div>
  );
}

export default EditTaskModal;