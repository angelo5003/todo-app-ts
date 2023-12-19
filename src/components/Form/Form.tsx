import { useState } from "react";

const Form = () => {
  const [todoInput, setTodoInput] = useState("");

  // 👇️ type event as React.FormEvent<HTMLFormElement>
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // prevent the form from refreshing the browser
    e.preventDefault();
    setTodoInput("");
  };

  // We typed the event as React.ChangeEvent<HTMLInputElement> because we're typing an onChange event on an input element.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
    console.log(`inputVlaue:`, e.target.value);
  };

  return (
    <form id="new-todo-form" onSubmit={handleSubmit}>
      <label htmlFor="todo-input">
        <input
          type="text"
          id="todo-input"
          value={todoInput}
          onChange={handleChange}
        />
        <button type="submit">Add Todo</button>
      </label>
    </form>
  );
};

export default Form;
