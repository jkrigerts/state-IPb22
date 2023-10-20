import { useState } from "react";

function Hello() {
  const [name, setName] = useState("");

  function changeName(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={changeName}></input>
      <p>hello, {name}</p>
    </div>
  );
}

export default Hello;
