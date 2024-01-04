import { useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import TodoList from "./Components/TodoList/TodoList";

function App() {
  // 👇️ state that hold the array of todos objects
  //  <newTodos[]> is a type assertion in TypeScript. It's saying that the todoArray will be an array where each element follows the structure defined by the newTodos type.
  const [todoArray, setTodoArray] = useState<newTodo[]>([]);

  type newTodo = {
    id: string;
    todo: string;
  };
  return (
    <>
      <section>
        <TodoList />
        <Form todoArray={todoArray} setTodoArray={setTodoArray} />
      </section>
    </>
  );
}

export default App;
