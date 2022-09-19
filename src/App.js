import logo from "./logo.svg";
import Counter from "./components/counter/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter by={1} />
      <Counter by={5} />
      <Counter by={10} />
    </div>
  );
}

export default App;
