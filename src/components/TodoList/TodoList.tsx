const TodoList = () => {
  return (
    <ul id="list">
      <li className="list-item">
        <label className="list-item-label">
          <input className="label-input" type="checkbox" />
          <span className="label-text">Placeholder text</span>
        </label>
        <button className="delete-btn">Delete</button>
      </li>
    </ul>
  );
};

export default TodoList;
