import "./TaskInsertForm.css"

export const TaskInsertForm = ({ handleTaskSubmit, task, setTask }) => {
    return (
        <form onSubmit={handleTaskSubmit}>
            <label htmlFor="task-input">Digite sua tarefa:</label>
            
            <div className="input-button-row">
                <input 
                    value={task} 
                    onChange={(e) => setTask(e.target.value)} 
                    type="text" 
                    id="task-input"
                />
                <button type="submit">Adicionar tarefa</button>
            </div>
        </form>
    )
}

export default TaskInsertForm;
