import './App.css'
import AddTask from './Components/AddTask'
import TaskList from './Components/TaskList'

function App() {

  return (
    <>
      <div>
        <h1>Task Manager</h1>
        <AddTask/>
        <TaskList/>
      </div>
    </>
  )
}

export default App
