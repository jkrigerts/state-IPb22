import { useState } from "react";

function Hello(props) {
  const [name, setName] = useState(props.name);

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
