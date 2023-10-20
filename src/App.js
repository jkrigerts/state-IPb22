import Counter from "./Counter";
import Hello from "./Hello";

function App() {
  const allNames = ["Jēkabs", "Markuss", "Klucis"];
  return (
    <>
      <Counter />
      <Hello />
      <Hello />
      <Hello />
    </>
  );
}

export default App;
