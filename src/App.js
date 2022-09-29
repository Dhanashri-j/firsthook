import { useState } from "react";
import "./styles.css";
import {Task} from './Task';

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [newtask, setNewTask] = useState("");
  // const [complete,setComplete] = useState([true,false]);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddList = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newtask,
      complete:false 
    };

    setTodoList(...todoList, task);
    };

  const deleteList = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  const chngeComplete=(id) =>{
    setTodoList(
      todoList.map((task) => {
      if(task.id===id){
        return {...task,completed:true}
      }
    else {
        return task
    }
      }))
  };
  return (
    <div className="App">
      <h1>Hello </h1>
      <div className="Addtask">
        <input onChange={handleChange} />
        <button onClick={handleAddList}>Addtask</button>
      </div>
      <div className="list" >
        {todoList.map((task) => {
          return (
            <Task taskName={task.taskName}
            id={task.id}
            completed={task.completed}
            chngeComplete={chngeComplete}
            deleteList={deleteList}
            />
          );
        })}
      </div>
    </div>
  );
}
