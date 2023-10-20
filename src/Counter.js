import { useState } from "react";

// Uztaisi pogu, kas pamazina vērtību
// par 1.

// Pieliec, ka pieskaitīt var nevis 1,
// bet lietotāja ierakstītu ratio

// Uztaisi savu Counter komponenti...

// 1. Uztaisi komponenti Hello,
// tajā ir input, un, kad inputā
// ieraksta vārdu, apakšā parādās
// Hello, vārds!

// 2. Izdari tā, lai uz ekrāna būtu
// 2 Hello komponentes.

// 3. Uztaisi masīvu ar 3 vērtībām,
// katrai uztaisi Hello kopmonenti

function Counter() {
  const [result, setResult] = useState(0);
  const [ratioChange, setRatioChange] = useState(1);

  function addRatio() {
    setResult(result + parseInt(ratioChange));
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

export default Counter;
