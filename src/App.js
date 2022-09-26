import logo from "./logo.svg";
import Counter from "./components/counter/Counter";
import "./App.css";
import "./bootstrap.css";
import TodoApp from "./components/todo/TodoApp";

function App() {
  return (
    <div className="App">
      {/* <Counter by={1} />
      <Counter by={5} />
      <Counter by={10} /> */}
      <TodoApp />
    </div>
  );
}

export default App;
