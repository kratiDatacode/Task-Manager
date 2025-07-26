const TaskItem = ({task}) =>{
        return(
            <li>
                {task.text}
                <div>
                    <button>Done</button>
                    <button>Delete</button>
                </div>
            </li>
        )
}

export default TaskItem;