import './Task.css'

export const Task = ({ taskId, task, handleDelete, handleDone }) => {
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