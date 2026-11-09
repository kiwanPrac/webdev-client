
"use client";
import { useState } from "react";
import { useTodosContext } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [title, setTitle] = useState("");

  return (
    <div id="wd-react-context-todo-list" className="mt-4">
      <h3>React Context Todo List</h3>
      <div className="mb-3 flex max-w-lg gap-2">
        <input
          id="wd-context-todo-title"
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New todo"
        />
        <button
          type="button"
          id="wd-context-todo-add"
          onClick={() => {
            if (title.trim()) {
              addTodo(title.trim());
              setTitle("");
            }
          }}
          className="rounded bg-green-600 px-3 py-1.5 text-white"
        >
          Add
        </button>
      </div>
      <ul className="max-w-lg space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2">
            <input
              className="w-full rounded border border-neutral-300 px-3 py-1.5"
              value={todo.title}
              onChange={(e) => updateTodo(todo.id, e.target.value)}
            />
            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}
              className="rounded bg-red-600 px-3 py-1.5 text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
