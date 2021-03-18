import Task from "./Task"

const Tasks = (props) => {
    return (
        <>
            {props.tasks.map((task) => (
                <Task 
                    key={task.id} 
                    task={task}
                    delete={props.delete}
                    toggle={props.toggle}
                    /> // here we are passing the task further down as a prop
            ))}
        </>
    )
}

export default Tasks
