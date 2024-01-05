type TodoProps = {
  todo: string;
};

const TodoList: React.FC<TodoProps> = ({ todo }) => {
  return (
    <ul id="list">
      <li className="list-item">
        <label className="list-item-label">
          <input className="label-input" type="checkbox" />
          <span className="label-text">{todo}</span>
        </label>
        <button className="delete-btn">Delete</button>
      </li>
    </ul>
  );
};

export default TodoList;
