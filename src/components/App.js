

import React, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  // Add task
  const addTask = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setTasks([...tasks, input.trim()]);
    setInput("");
  };

  // Delete task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Start editing a task
  const editTask = (index) => {
    setEditingIndex(index);
    setEditText(tasks[index]);
  };

  // Save edited task
  const saveTask = (index) => {
    if (editText.trim() === "") return;
    const updatedTasks = [...tasks];
    updatedTasks[index] = editText.trim();
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditText("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px" }}>
      <h2>To-Do List</h2>

      {/* Add Task Section */}
      <form className="add_tasks_section" onSubmit={addTask}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new task"
          style={{ padding: "8px", width: "70%" }}
        />
        <button type="submit" style={{ marginLeft: "10px" }}>
          Add
        </button>
      </form>

      {/* Tasks Section */}
      <div className="tasks_section" style={{ marginTop: "20px" }}>
        {tasks.length === 0 ? (
          <p>No tasks yet.</p>
        ) : (
          tasks.map((task, index) => (
            <div
              key={index}
              className="task"
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    style={{ flex: "1", padding: "6px" }}
                  />
                  <button
                    className="save"
                    onClick={() => saveTask(index)}
                    style={{ marginLeft: "10px" }}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span style={{ flex: "1" }}>{task}</span>
                  <button
                    className="edit"
                    onClick={() => editTask(index)}
                    style={{ marginRight: "10px" }}
                  >
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;

