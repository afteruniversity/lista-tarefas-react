import './FinishedTask.css'

export const FinishedTask = ({ id, text, date, handleDeleteFinishedTask }) => {
    return (
        <div className="finished-tasks-board">
            <div className="finished-task">
                <p><s>{`"${text}" foi concluída em ${date}`}</s></p>
                
            </div>
            <button onClick={() => handleDeleteFinishedTask(id)}>X</button>
        </div>
    )
}

export default FinishedTask