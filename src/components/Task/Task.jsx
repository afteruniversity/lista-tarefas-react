import './Task.css'

export const Task = ({ taskId, task, handleDelete, handleDone }) => {
    console.log(taskId)
    return(
    <div className="task-container">
        <p>{task}</p>
        <div className="buttons-container">
            <button onClick={() => handleDelete(taskId)}>Excluir</button>
            <button onClick={() => handleDone(taskId)}>Concluir</button>
        </div>
    </div>
    )
}

export default Task