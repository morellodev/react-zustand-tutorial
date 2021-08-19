import { Icon, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useRef } from "react";
import { FiCornerDownLeft } from "react-icons/fi";

const TodoInput = ({ onTodoAdd }) => {
  const inputRef = useRef();

  const addTodo = (event) => {
    event.preventDefault();

    const text = inputRef.current.value.trim();

    if (text) {
      const newTodo = {
        id: nanoid(),
        text,
        done: false,
      };

      onTodoAdd?.(newTodo);
      inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={addTodo}>
      <InputGroup justifyItems="center">
        <Input
          ref={inputRef}
          autoFocus
          flexGrow={1}
          placeholder="What needs to be done?"
          size="lg"
        />
        <InputRightElement h="full">
          <Icon as={FiCornerDownLeft} color="gray.500" />
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default TodoInput;
