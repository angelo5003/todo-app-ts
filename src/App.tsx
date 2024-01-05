import { useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import TodoList from "./Components/TodoList/TodoList";

function App() {
  // 👇 The <newTodos[]> is a type assertion in TypeScript, saying that todoArray will be an array of newTodos objects.

  // 👇️ state that hold the array of todos objects
  const [todoArray, setTodoArray] = useState<newTodo[]>([]);

  console.log(`todoArray:`, todoArray);

  // 👇 Define the type outside the component for better readability and reusability
  type newTodo = {
    id: string;
    todo: string;
  };
  return (
    <>
      <section>
        {Array.isArray(todoArray) ? (
          // 👇 For each todo object in todoArray, pass the todo string as a prop to the TodoList component.
          todoArray.map((todo) => <TodoList key={todo.id} todo={todo.todo} />)
        ) : (
          <div>Oops there is no data</div>
        )}
        {/*👇 Pass todoArray and setTodoArray as props to the Form component */}
        <Form todoArray={todoArray} setTodoArray={setTodoArray} />
      </section>
    </>
  );
}

export default App;
