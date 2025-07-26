import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../features/task/taskSlice";

const TaskItem = ({task}) =>{
    const dispatch = useDispatch();
        return(
            <li>
                {task.text}
                <div>
                    <button onClick={()=>dispatch(toggleTask(task.id))}>{task.completed ? "Undo" : "Done" }</button>
                    <button onClick={()=> dispatch(deleteTask(task.id))}>Delete</button>
                </div>
            </li>
        )
}

export default TaskItem;