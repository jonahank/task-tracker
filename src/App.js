import { useState } from 'react'
import AddTask from './components/AddTask';
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'Update to nicer layout',
    day: 'End of March',
    reminder: true,
    },
    {
    id: 2,
    text: 'Add algorithm maze generator',
    day: 'Mid April',
    reminder: true,
    },
    {
    id: 3,
    text: 'Legacy snake game',
    day: 'End of April',
    reminder: false,
    },
  ]);

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