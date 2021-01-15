import "./App.css";
import React, { useState } from "react";

function App() {
  const [data, setDate] = useState(0);
  const [isLight, setIsLight] = useState(true);

  const color = isLight ? "white" : "black";

  const plusCount = () => {
    setDate(data + 1);
  };

  document.body.style.backgroundColor = color;
  return (
    <div className="App">
      <h4> {data} </h4>
      <button onClick={plusCount}>+</button>
      <button onClick={() => setDate(data - 1)}>-</button>
      <button onClick={() => setIsLight(!isLight)}>change theme</button>
    </div>
  );
}

export default App;
