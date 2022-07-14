import {useState} from "react";
import './App.css';

function App() {
  const [todos, setTodos] =useState([
    {text: "learn about react",
    isCompleted:false},
    {text: "Meet with a friend",
    isCompleted:false},
    {text:"Buiild really cool todo app",
    isCompleted:false}
  ])

  const addTodo = (text) =>{
    const newTodos = [...todos, {text}];
    setTodos(newTodos)
  }
  /* To line-through after complete it */
  const completeTodo = (index) =>{
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }
  /* to delete */
  const removeTodo = (index)=>{
    const newTodos =[...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function TodoForm({addTodo}){
    const [value, setValue] =useState("");
    const handleSubmit = (e) =>{
      e.preventDefault();
      if(!value) return;
      addTodo(value);
      setValue("");
    };

    return (
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        className="input"
        value={value}
        onChange={(e) =>{setValue(e.target.value)}}
        />
      </form>
    )
  }

  function Todo ({todo, index, completeTodo, removeTodo}){
    return(
      <div className="todo"
        style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
        {todo.text}
        <div>
          <button onClick={() => completeTodo(index)}> Complete</button>
          <button onClick={() =>removeTodo(index)}>X</button>
        </div>
      </div>
    )
  }


  return (
    <div className="app"> 
    <div className="todo-list">
    {todos.map((todo, index) =>
      <Todo
      key={index}
      index={index}
      todo={todo}
      completeTodo ={completeTodo}
      removeTodo={removeTodo}
      />
    )}
    <TodoForm addTodo={addTodo} />
    </div>
    </div>
  );
}

export default App;