type TodoProps = {
  todoObject: {
    todo: string;
    id: string;
  };
  handleRemoveItem: (id: string) => void;
};

const TodoList: React.FC<TodoProps> = ({ todoObject, handleRemoveItem }) => {
  const { id } = todoObject;

  const deleteItem = () => {
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
