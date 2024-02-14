import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";

function App() {
  const [todos, setTodos] = useState([]);

  // add new todo
  const addTodo = (todo) => {
    setTodos((prevList) => [{ id: Date.now(), ...todo }, ...prevList]);
  };

  // update the todo
  const updateTodo = (id, todo) => {
    setTodos((prevList) =>
    prevList.map((singleTodo) => (singleTodo.id === id ? todo : singleTodo))
    );
  };

  // delete the todo
  const deleteTodo = (id) => {
    setTodos((prevList) => prevList.filter((singleTodo) => singleTodo.id !== id));
  };

  // toggle on the todo
  const toggle = (id) => {
    setTodos((prevList) =>
    prevList.map((singleTodo) =>
        singleTodo.id == id
          ? { ...singleTodo, completed: !singleTodo.completed }
          : singleTodo
      )
    );
  };

  useEffect(()=>{
    const todoItem = JSON.parse(localStorage.getItem("todos"))

    if(todoItem && todoItem.length > 0){
    setTodos(todoItem)
   }

  },[]);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggle }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4"><TodoForm/></div>
          <div className="flex flex-wrap gap-y-3">
           {
            todos.map((todoItem)=>(
              <div key={todoItem.id} className="w-full"> 
                <TodoItems todo={todoItem} />
              </div>
            ))
           }
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
