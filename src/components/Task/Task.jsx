import './Task.css'

export const Task = () => {
    return(
    <div className="task-container">
        <p>Texto da tarefa</p>
        <div className="buttons-container">
            <button>Excluir</button>
            <button>Concluir</button>
        </div>
    </div>
    )
}

export default Task