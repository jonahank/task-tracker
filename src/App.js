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

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} delete={deleteTask}/>
    </div>
  )
}

export default App