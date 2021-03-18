import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'abc',
    day: 'Monday',
    reminder: true,
    },
    {
    id: 2,
    text: 'def',
    day: 'Tuesday',
    reminder: true,
    },
    {
    id: 3,
    text: 'ghi',
    day: 'Friday',
    reminder: false,
    },
  ]);

  // Delete a Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  function toggleReminder(id){
    setTasks(tasks.map((task) => (
      task.id === id?
      {
      id: task.id,
      text: task.text,
      day: task.day,
      reminder: (!task.reminder),
      } 
      : task
    )))
  }

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} delete={deleteTask} toggle={toggleReminder}/> : "No active tasks. Well done!" }
    </div>
  )
}

export default App