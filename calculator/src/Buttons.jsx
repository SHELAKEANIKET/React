import React from "react";

function Buttons({onClickBtn}) {
  const buttons = [
    "AC",
    "DEL",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    "00",
    ".",
    "=",
  ];

  return (
    <div className="btn-container">
      {buttons.map((btnName,index) => (
        <button key={index} className="btn" onClick={()=>{onClickBtn(btnName)}}>{btnName}</button>
      ))}
    </div>
  );
}

export default Buttons;
