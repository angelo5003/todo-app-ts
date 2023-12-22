import { useState } from "react";
import {
  handleChange,
  handleSubmit,
} from "../../Functions/FormFunctions/FormFunctions";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  // 👇️ value of input is a string
  const [todoInput, setTodoInput] = useState("");
  // 👇️ state that to hold the array of todos objects
  //  <newTodos[]> is a type assertion in TypeScript. It's saying that the todoArray will be an array where each element follows the structure defined by the newTodos type.
  const [todoArray, setTodoArray] = useState<newTodos[]>([]);
  console.log(`todoArray:`, todoArray);

  // 👇 Define the type for new todos
  type newTodos = {
    id: string;
    todo: string;
  };

  // 👇 Function to add a new todo
  const handleAddTodo = () => {
    // 👇 Create a new todo object
    const newTodo: newTodos = {
      id: uuidv4(),
      todo: todoInput,
    };
    // 👇 Add the new todo object to the todoArray
    setTodoArray([...todoArray, newTodo]);
    setTodoInput("");
  };

  // Event handler for form submission
  const onSubmitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    // Call the handleSubmit function with the event object and setTodoInput function
    handleSubmit(e, setTodoInput);
  };

  return (
    <form id="new-todo-form" onSubmit={onSubmitTodo}>
      <label htmlFor="todo-input">
        <input
          type="text"
          id="todo-input"
          value={todoInput}
          // Call the handleChange function when the input changes
          // Takes an event object (e) and a function (setTodoInput).
          onChange={(e) => handleChange(e, setTodoInput)}
        />
        <button type="submit" onClick={handleAddTodo}>
          Add Todo
        </button>
      </label>
    </form>
  );
};

export default Form;
