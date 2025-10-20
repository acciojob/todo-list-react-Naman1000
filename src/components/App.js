
import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task }]);
    setTask("");
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(tasks[index].text);
  };

  const handleSave = (index) => {
    const newTasks = [...tasks];
    newTasks[index].text = editText;
    setTasks(newTasks);
    setEditIndex(null);
  };

  return (
    <div>
      {/* ✅ Add Task Section */}
      <div className="add_tasks_section">
        <h3>To-Do List</h3>
        <textarea
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        ></textarea>
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* ✅ Tasks Section */}
      <div className="tasks_section">
        {tasks.map((t, index) => (
          <div className="task" key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button className="save" onClick={() => handleSave(index)}>
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{t.text}</span>
                <button className="edit" onClick={() => handleEdit(index)}>
                  Edit
                </button>
                <button className="delete" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
