import { useEffect, useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import { v4 } from 'uuid';


function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  function onClikTask(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task;
    });
    setTasks(newTasks);
  }

  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskClick(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false
    }
    setTasks([...tasks, newTask])
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className='flex justify-center w-full min-h-screen p-6 bg-slate-500'>
      <div className='w-125 space-y-4'>
        <h1 className='text-3xl font-bold text-center text-slate-100 mb-4'>Gerenciador de Tarefas</h1>
        <AddTask onAddTaskClick={onAddTaskClick} />
        <Tasks tasks={tasks} onClikTask={onClikTask} deleteTask={deleteTask} />
      </div>
    </div>
  )
}

export default App;
