import { Dispatch, SetStateAction, useState } from "react";
import {
  handleChange,
  handleSubmit,
} from "../../Functions/FormFunctions/FormFunctions";
import { v4 as uuidv4 } from "uuid";

// 👇 prop type definition that is coming from the app component
type FormProps = {
  todoArray: newTodos[];
  setTodoArray: Dispatch<SetStateAction<newTodos[]>>;
};

// 👇 Define the type for new todos
type newTodos = {
  id: string;
  todo: string;
};

const Form: React.FC<FormProps> = ({ todoArray, setTodoArray }) => {
  // 👇️ value of input is a string
  const [todoInput, setTodoInput] = useState("");

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
