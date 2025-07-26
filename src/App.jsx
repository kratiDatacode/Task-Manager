import './App.css'
import AddTask from './Components/AddTask'
import FilterTask from './Components/FilterTask'
import TaskList from './Components/TaskList'

function App() {

  return (
    <>
      <div>
        <h1>Task Manager</h1>
        <AddTask/>
        <TaskList/>
        <FilterTask/>
      </div>
    </>
  )
}

export default App
