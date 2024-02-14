import { createContext, useContext } from "react";

// create Context
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo msg",
      completed: false,
    },
  ],

  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggle: (id) => {},
});

// create context provider
export const TodoProvider = TodoContext.Provider;

// create useContext
export const useTodo = () => {
  return useContext(TodoContext);
};
