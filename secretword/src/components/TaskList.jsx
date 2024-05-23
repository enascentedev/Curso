import React from 'react';
import '../assets/TaskList.css'

function TaskList({ tasks, removeTask, toggleComplete }) {
  return (
    <div className="task-list">
      <ul className='container-ul'>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <div onClick={() => toggleComplete(index)}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
