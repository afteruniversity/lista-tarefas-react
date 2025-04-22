import "./TaskBoard.css";
import { useState } from "react";
import Task from "../Task/Task";
import FinishedTask from "../FinishedTask/FinishedTask";
import TaskInsertForm from "../TaskInsertForm/TaskInsertForm";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TaskBoard = () => {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);
  const [finishedTasks, setFinishedTasks] = useState([]);

  const handleTaskSubmit = (event) => {
    event.preventDefault(); // previne o comportamento padrão do navegador de lidar com envio de formulários
    if (task.trim() === "") {
      toast.warn("Por favor, insira uma tarefa válida.");
      return;
    }

    setTasksList((prevTasks) => [...prevTasks, task]);
    setTask("");
  };

  const handleDelete = (taskIdToDelete) => {
    // Filtra a lista e remove a tarefa com o Id passado
    const taskText = tasksList[taskIdToDelete];
    // Esse (_, index) esquisito so quer dizer que tamo ignorando o primeiro parametro recebido
    setTasksList((prevTasks) =>
      prevTasks.filter((taskText, index) => index !== taskIdToDelete)
    );
    toast.success(`Tarefa "${taskText}" deletada com sucesso!`);
  };

  const handleDeleteFinishedTask = (taskIdToDelete) => {
    // Filtra a lista e remove a tarefa com o Id passado
    setFinishedTasks((prevTasks) =>
      prevTasks.filter((_, index) => index !== taskIdToDelete)
    );
  };

  const handleDone = (finishedTaskId) => {
    const currentDate = new Date(); // p pegar a data de qnd a tarefa foi feita
    const formattedDate = currentDate.toLocaleString(); // transforma em string
    const finishedTaskText = tasksList[finishedTaskId];

    setTasksList((prevTasks) =>
      prevTasks.filter((_, index) => index !== finishedTaskId)
    );
    setFinishedTasks((prevTasks) => [
      ...prevTasks,
      { id: finishedTaskId, text: finishedTaskText, date: formattedDate },
    ]);
  };

  return (
    <div className="task-board">
      <h1 className="task-title">Lista de Tarefas</h1>
      <TaskInsertForm
        handleTaskSubmit={handleTaskSubmit}
        task={task}
        setTask={setTask}
      />
      {tasksList.map((taskInstance, index) => (
        <Task
          key={index}
          task={taskInstance}
          taskId={index}
          handleDelete={handleDelete}
          handleDone={handleDone}
        />
      ))}
      {finishedTasks.map((finishedTask, index) => (
        <FinishedTask
          key={index}
          id={finishedTask.id}
          text={finishedTask.text}
          date={finishedTask.date}
          handleDeleteFinishedTask={handleDeleteFinishedTask}
        />
      ))}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default TaskBoard;
