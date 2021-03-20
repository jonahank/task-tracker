//npm run build (to update the build folder for production)

import { useState, useEffect } from 'react'
import AddTask from './components/AddTask';
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(()=>{  // runs when the page loads
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks();
  }, [] ) // we take an empty array as a "dependency array" if we want to pass in parameters

  // Fetch tasks from JSON-server
  const fetchTasks = async () =>{
      const res = await fetch('http://localhost:5001/tasks'); // res is = response
      const data = await res.json();

      return data;
    }


  // Add a task
  function addTask(task){
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks,newTask]);
  }

  // Delete a Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle reminder
  function toggleReminder(id){
    setTasks(tasks.map((task) => (
      task.id === id?
      {
      ...task,
      reminder: !(task.reminder),
      } 
      : task
    )))
  }

  // Toggle add task
  function toggleAddTask() {
    setShowAddTask(!showAddTask);
  }

  return (
    <div className='container'>
      <Header toggleOn={showAddTask} showToggle={toggleAddTask} />
      {showAddTask ? <AddTask onAdd={addTask}/> : ''}
      {tasks.length > 0 ? <Tasks tasks={tasks} delete={deleteTask} toggle={toggleReminder}/> : "No active tasks. Well done!" }
    </div>
  )
}

export default App