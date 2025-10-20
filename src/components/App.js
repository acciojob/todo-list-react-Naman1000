
import React, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  // Add Task
  const handleAdd = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    setTasks([...tasks, text.trim()]);
    setText("");
  };

  // Delete Task
  const handleDelete = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  // Edit Task
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(tasks[index]);
  };

  // Save Edited Task
  const handleSave = (index) => {
    if (editText.trim() === "") return;
    const updated = [...tasks];
    updated[index] = editText.trim();
    setTasks(updated);
    setEditIndex(null);
    setEditText("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>To-Do List</h2>

      {/* Add Task Section */}
      <form className="add_tasks_section" onSubmit={handleAdd}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a task"
          style={{ width: "300px", height: "60px" }}
        />
        <button type="submit">Add Task</button>
      </form>

      {/* Tasks Section */}
      <div className="tasks_section" style={{ marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <div className="task" key={index}>
            {editIndex === index ? (
              <>
                <textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  style={{ width: "250px", height: "40px" }}
                />
                <button
                  className="save"
                  onClick={() => handleSave(index)}
                  style={{ marginLeft: "10px" }}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{task}</span>
                <button
                  className="edit"
                  onClick={() => handleEdit(index)}
                  style={{ marginLeft: "10px" }}
                >
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() => handleDelete(index)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
