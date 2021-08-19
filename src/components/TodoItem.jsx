import { Checkbox, HStack, Icon, IconButton, ListItem } from "@chakra-ui/react";
import { FiTrash } from "react-icons/fi";

const TodoItem = ({ todo, onTodoToggle, onTodoRemove }) => (
  <HStack as={ListItem} role="group">
    <Checkbox
      defaultChecked={todo.done}
      checked={todo.done}
      flexGrow={1}
      p={2}
      rounded="md"
      size="lg"
      color={todo.done ? "gray.500" : undefined}
      textDecoration={todo.done ? "line-through" : "none"}
      _groupHover={{
        backgroundColor: "gray.50",
      }}
      onChange={() => onTodoToggle?.(todo.id)}
    >
      {todo.text}
    </Checkbox>

    <IconButton
      icon={<Icon as={FiTrash} />}
      color="red.500"
      variant="text"
      visibility="hidden"
      size="md"
      _groupHover={{
        visibility: "visible",
      }}
      onClick={() => onTodoRemove?.(todo.id)}
    />
  </HStack>
);

export default TodoItem;
