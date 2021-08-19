import { UnorderedList } from "@chakra-ui/react";

import TodoItem from "./TodoItem";
import {
  removeTodoSelector,
  todosSelector,
  toggleTodoSelector,
} from "../state/selectors";
import useStore from "../state/store";

const TodoList = () => {
  const todos = useStore(todosSelector);
  const toggleTodo = useStore(toggleTodoSelector);
  const removeTodo = useStore(removeTodoSelector);

  return (
    <UnorderedList>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onTodoToggle={toggleTodo}
          onTodoRemove={removeTodo}
        />
      ))}
    </UnorderedList>
  );
};

export default TodoList;
