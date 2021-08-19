import { ChakraProvider, Container, Heading, VStack } from "@chakra-ui/react";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { addTodoSelector } from "./state/selectors";
import useStore from "./state/store";

const App = () => {
  const addTodo = useStore(addTodoSelector);

  return (
    <ChakraProvider>
      <Container px={4} py={8}>
        <VStack align="stretch" spacing={10}>
          <Heading as="h1" textAlign="center">
            React Zustand Tutorial
          </Heading>

          <VStack align="stretch" spacing={4}>
            <TodoInput onTodoAdd={addTodo} />
            <TodoList />
          </VStack>
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

export default App;
