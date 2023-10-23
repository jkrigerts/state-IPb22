import Counter from "./Counter";
import Hello from "./Hello";

function App() {
  const allNames = ["Jēkabs", "Markuss", "Klucis"];

  // Nav 3 reizes Hello, bet ir map
  const helloJSX = allNames.map((name, index) => {
    return <Hello key={index} name={name} />;
  });
  return (
    <>
      <Counter />
      {helloJSX}
    </>
  );
}

export default App;
