import { Dispatch, SetStateAction, useState } from "react";
import {
  handleChange,
  handleSubmit,
} from "../../Functions/FormFunctions/FormFunctions";
import { v4 as uuidv4 } from "uuid";

// 👇 prop type definition that is coming from the app component
type FormProps = {
  todoArray: newTodos[]; // 👈 The current list of todos
  setTodoArray: Dispatch<SetStateAction<newTodos[]>>; // 👈 A function to update the list of todos
};

// 👇 Define the type for new todos
type newTodos = {
  id: string; // 👈 The unique identifier for a todo
  todo: string; // 👈 The text of the todo
};

const Form: React.FC<FormProps> = ({ todoArray, setTodoArray }) => {
  // 👇️ value of input is a string
  const [todoInput, setTodoInput] = useState("");

  // 👇 Function to add a new todo
  const handleAddTodo = () => {
    // 👇 Create a new todo object
    const newTodo: newTodos = {
      id: uuidv4(), // 👈 Generate a unique ID for the new todo
      todo: todoInput, // 👈 Use the current input value as the todo text
    };
    // 👇 Add the new todo object to the todoArray
    setTodoArray([...todoArray, newTodo]); // 👈 Call setTodoArray with a new array that includes all the old todos and the new todo
    setTodoInput(""); // 👈 Clear the input
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
