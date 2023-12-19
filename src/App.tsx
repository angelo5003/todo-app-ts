import "./App.css";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
function App() {
  return (
    <>
      <section>
        <TodoList />
        <Form />
      </section>
    </>
  );
}

export default App;
