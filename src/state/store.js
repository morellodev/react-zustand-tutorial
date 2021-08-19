import pipe from "ramda/es/pipe";
import create from "zustand";
import { devtools } from "zustand/middleware";

import immer from "./middlewares/immer";
import persist from "./middlewares/persist";

const createStore = pipe(devtools, immer, persist, create);

const useStore = createStore((set) => ({
  todos: [],
  addTodo: (todo) =>
    set((draft) => {
      draft.todos.unshift(todo);
    }),
  toggleTodo: (id) =>
    set((draft) => {
      const todoIndex = draft.todos.findIndex((todo) => todo.id === id);

      if (todoIndex !== -1) {
        draft.todos[todoIndex].done = !draft.todos[todoIndex].done;
      }
    }),
  removeTodo: (id) =>
    set((draft) => {
      const todoIndex = draft.todos.findIndex((todo) => todo.id === id);

      if (todoIndex !== -1) {
        draft.todos.splice(todoIndex, 1);
      }
    }),
}));

export default useStore;
