import React, { useState, useEffect, useRef } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const isInitialMount = useRef(true);

  // Recupera as tarefas do localStorage quando o componente é montado
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    console.log('Recuperando tarefas do localStorage:', storedTasks);
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Armazena as tarefas no localStorage sempre que a lista de tarefas é atualizada
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      console.log('Salvando tarefas no localStorage:', tasks);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    console.log('Adicionando tarefa:', task);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    console.log('Removendo tarefa no índice:', index);
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    console.log('Trocando estado de completude da tarefa no índice:', index);
  };

  return (
    <div className="App">
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
