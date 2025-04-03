export const TaskInsertForm = ({ handleTaskSubmit, task, setTask }) => {
    return (
        <form onSubmit={handleTaskSubmit}>
            <label htmlFor="task-input">Digite aqui a tarefa</label>
            <input 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                type="text" 
                id="task-input"
            />
            <button type="submit">Adicionar tarefa</button>
        </form>
    )
}

export default TaskInsertForm