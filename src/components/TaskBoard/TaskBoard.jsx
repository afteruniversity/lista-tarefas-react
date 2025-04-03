import './TaskBoard.css'
import Task from '../Task/Task'
import { useState, useEffect } from 'react'

export const TaskBoard = () => {
    const [task, setTask] = useState('')
    const [tasksList, setTasksList] = useState([])

    const handleTaskSubmit= (event) => {
        event.preventDefault() // previne o comportamento padrão do navegador de lidar com envio de formulários
        if (task.trim() === '') { // verifica se tá vazio
            alert('Por favor, insira uma tarefa válida.');
            return;
        }
        setTasksList((prevTasks) => [...prevTasks, task])
        setTask('')
    }

    const handleDelete = (taskToDelete) => {
        setTasksList((prevTasks) => prevTasks.filter((taskId) => taskId !== taskToDelete));
    }
    const handleDone = () => {
        alert("Tarefa concluída com sucesso!")
    }

    useEffect(() => {
        console.log('A task was deleted. Current tasks:', tasksList);
    }, [tasksList]);


    return (
        <div className="task-board">
            <h1 className="task-title">Lista de Tarefas</h1>
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
            {tasksList.map((taskInstance, index) => (
                <Task 
                    key={index}
                    task={taskInstance}
                    taskId={index}
                    handleDelete={handleDelete} 
                    handleDone={handleDone} 
                />
))}

        </div>
    )
}

export default TaskBoard