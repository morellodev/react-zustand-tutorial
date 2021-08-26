export const addTodo = (draft, todo) => {
  draft.todos.unshift(todo);
};

export const removeTodo = (draft, id) => {
  const todoIndex = draft.todos.findIndex((todo) => todo.id === id);

  if (todoIndex !== -1) {
    draft.todos.splice(todoIndex, 1);
  }
};

export const toggleTodo = (draft, id) => {
  const todoIndex = draft.todos.findIndex((todo) => todo.id === id);

  if (todoIndex !== -1) {
    draft.todos[todoIndex].done = !draft.todos[todoIndex].done;
  }
};
