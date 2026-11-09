
"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

type Todo = {
  id: number;
  title: string;
};

type TodosContextValue = {
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (id: number, title: string) => void;
  deleteTodo: (id: number) => void;
};

const TodosContext = createContext<TodosContextValue | null>(null);

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Learn React Context" },
    { id: 2, title: "Practice Todo List" },
  ]);

  const addTodo = (title: string) => {
    setTodos((current) => [
      ...current,
      { id: Date.now() + Math.random(), title },
    ]);
  };

  const updateTodo = (id: number, title: string) => {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, title } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodosContext() {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("useTodosContext must be used inside TodosProvider");
  }
  return context;
}
