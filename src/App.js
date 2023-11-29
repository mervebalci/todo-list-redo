import './App.css';
import { useState } from 'react';

let counter = 0;

export default function App() {
  const [tasks, setTasks] = useState([]);

  function addTask() {
    const userInput = document.getElementById('userInput').value;
    
    const task = {id: counter, name: userInput};

    setTasks([...tasks, task]);

    document.getElementById('userInput').value = "";
    
    counter = counter + 1;
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <input id="userInput" type="text" placeholder="Add a new to do..."></input>
      <button className="addButton" onClick={addTask}>Add</button>
      <TodoList className="todoList" taskList={tasks} setTasks={setTasks}/>
    </div>
  );
}

function TodoList({ taskList, setTasks }) {
  function removeTask(id) {
    console.log(taskList)
    let remainingTasks = taskList.filter(function(task) {
      return task.id !== id
    })
    setTasks(remainingTasks)
  }
  return (
    <ul className="todoList">
      {taskList.map((task) =>
        <li key={task.id} className="task">
          <button className="checkbox" id={task.id} onClick={() => removeTask(task.id)}></button>
          <span>{task.name}</span>
        </li>
      )}
    </ul>
  );
}