import React from "react";

// Function for handling input changes
export const handleChange = (
  // e is the event object representing the input change
  e: React.ChangeEvent<HTMLInputElement>,
  // setTodoInput is a function that takes a string and returns void
  setTodoInput: (value: string) => void
) => {
  // Update the todo input state with the current value of the input field
  setTodoInput(e.target.value);
};

export const handleSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  // setTodoInput is a function that takes a string and returns void
  setTodoInput: (value: string) => void
) => {
  // Prevent the form from refreshing the browser
  e.preventDefault();
  // Clear the todo input state to make the input field empty
  setTodoInput("");
};
