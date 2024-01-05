//👇 Define a type for the properties that the TodoList component expects to receive
type TodoProps = {
  // 👇 todoObject is an object with two properties:
  todoObject: {
    todo: string; // 👈 - todo: a string representing the text of the todo item
    id: string; // 👈 - id: a string representing the unique identifier of the todo item
  };

  // handleRemoveItem is a function that takes one parameter:
  // - id: a string representing the unique identifier of the todo item that should be removed
  // This function doesn't return a value (hence, 'void')
  handleRemoveItem: (id: string) => void;
};

const TodoList: React.FC<TodoProps> = ({ todoObject, handleRemoveItem }) => {
  // 👇 get the id from the todoObject prop via destructure
  const { id } = todoObject;

  const deleteItem = () => {
    // 👇 add the id to the handelRemoveItem via a other function called deleteItem
    handleRemoveItem(id);
  };
  return (
    <ul id="list">
      <li className="list-item">
        <label className="list-item-label">
          <input className="label-input" type="checkbox" />
          <span className="label-text">{todoObject.todo}</span>
        </label>
        <button className="delete-btn" onClick={deleteItem}>
          Delete
        </button>
      </li>
    </ul>
  );
};

export default TodoList;
