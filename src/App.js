import { useState } from "react";

// Uztaisi pogu, kas pamazina vērtību
// par 1.

// Pieliec, ka pieskaitīt var nevis 1,
// bet lietotāja ierakstītu ratio

// Uztaisi savu Counter komponenti...

function App() {
  const [result, setResult] = useState(0);
  const [ratioChange, setRatioChange] = useState(1);

  function addRatio() {
    setResult(result + ratioChange);
    console.log("Funkcija izsaukta");
    console.log("result ir " + result);
  }

  function subtractRatio() {
    setResult(result - ratioChange);
  }

  function handleRatioChange(kaķēns) {
    setRatioChange(kaķēns.target.value);
  }

  return (
    <div className="App">
      <input
        type="number"
        value={ratioChange}
        onChange={handleRatioChange}
      ></input>
      <button onClick={addRatio}>GANG +{ratioChange} ratio</button>
      <button onClick={subtractRatio}>GANG -{ratioChange} ratio</button>
      <h1>{result}</h1>
    </div>
  );
}

export default App;
