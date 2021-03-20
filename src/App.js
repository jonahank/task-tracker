//npm run build (to update the build folder for production)
//npm i react-router-dom (for router)
//npm i json-server (i think)

import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/About';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import Header from './components/Header';
import Tasks from './components/Tasks';
import dataFile from './data.json';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(()=>{  // runs when the page loads
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      console.log(tasksFromServer);
      setTasks(tasksFromServer);
    }

    getTasks();
  }, [] ) // we take an empty array as a "dependency array" if we want to pass in parameters

  // Fetch tasks from JSON-server
  const fetchTasks = async () =>{
      // local JSON for now
      const data = dataFile;
      //const res = await fetch('http://localhost:5001/tasks'); // res is = response
      //const data = await res.json();

      return data;
  }

  const fetchTask = async (id) =>{
      const res = await fetch(`http://localhost:5001/tasks/${id}`); // res is = response
      const data = await res.json();

      return data;
  }

  

  // Add a task
  const addTask = async (task) => {
    /* const res = await fetch('http://localhost:5001/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task),
    })

    const newTask = await res.json();
    setTasks([...tasks, newTask]);
 */
    //old local add. It adds id auto in json server
    // used for GitHub page
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks,newTask]);
  }

  // Delete a Task
  const deleteTask = async (id) => {
    /* await fetch(`http://localhost:5001/tasks/${id}`, {
      method: 'DELETE'
    }); */
    // for json-server 

    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle reminder
  const toggleReminder = async (id) =>{
    /* const taskToToggle = await fetchTask(id);
    const updatedTask = {...taskToToggle, reminder: !(taskToToggle.reminder)}

    const res = await fetch(`http://localhost:5001/tasks/${id}` ,{
      method: 'PUT',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask),
    })

    const data = await res.json();

    setTasks(tasks.map((task) => (
      task.id === id?
      {
      ...task,
      reminder: (data.reminder),
      } 
      : task
    ))) */

    // for GitHub
    setTasks(tasks.map((task) => (
      task.id === id?
      {
      ...task,
      reminder: (!task.reminder),
      } 
      : task
    )));
  }

  // Toggle add task
  function toggleAddTask() {
    setShowAddTask(!showAddTask);
  }

  return (
    <Router>
    <div className='container'>

      <Route path='/task-tracker' exact render={(props) => 
        (
        <>
          <Header toggleOn={showAddTask} showToggle={toggleAddTask} />
          {showAddTask ? <AddTask onAdd={addTask}/> : ''}
          {tasks.length > 0 ? <Tasks tasks={tasks} delete={deleteTask} toggle={toggleReminder}/> : "No active tasks. Well done!" }  
          <Footer />
        </>
        )}
       />
      <Route path='/about' component={About} />
      
    </div>
    </Router>
  )
}

export default App