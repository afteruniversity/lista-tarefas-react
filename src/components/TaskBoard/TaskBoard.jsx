import './TaskBoard.css'
import Task from '../Task/Task'

export const TaskBoard = () => {
    return (
        <div className="task-board">
            <h1 className="task-title">Lista de Tarefas</h1>
            <Task/>
            <Task/>
            <Task/>
        </div>
    )
}

export default TaskBoard