import { useState } from "react";
import "./App.css";
import Display from "./Display";
import Buttons from "./Buttons";

function App() {
  const [calValue, setCalValue] = useState("");

  const handleBtn = (btnName) => {
    if (btnName === "AC") {
      setCalValue("");
    } 
    else if (btnName === "DEL") {
      setCalValue(calValue.toString().slice(0,-1))
    } 
    else if (btnName === "=") {
      const result = eval(calValue);
      setCalValue(result);
    }
    else {
      const newDisplayValue = calValue + btnName;
      setCalValue(newDisplayValue);
    }
  };
  return (
    <div className="app">
      <div className="container">
        <Display data={calValue} />
        <Buttons onClickBtn={handleBtn} />
      </div>
    </div>
  );
}

export default App;
