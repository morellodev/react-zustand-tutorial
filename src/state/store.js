import pipe from "ramda/es/pipe";
import create from "zustand";
import { devtools } from "zustand/middleware";

import immer from "./middlewares/immer";
import persist from "./middlewares/persist";
import { addTodo, removeTodo, toggleTodo } from "./utils";

const createStore = pipe(devtools, immer, persist, create);

const useStore = createStore((set) => ({
  todos: [],
  addTodo: (todo) => set((draft) => addTodo(draft, todo)),
  removeTodo: (id) => set((draft) => removeTodo(draft, id)),
  toggleTodo: (id) => set((draft) => toggleTodo(draft, id)),
}));

export default useStore;
