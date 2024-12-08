import React from "react";
import Task from "./Task";

function TaskList({ tasks, onTaskDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onTaskDelete} />
      ))}
    </div>
  );
}

export default TaskList;
