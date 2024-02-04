import React, { useState } from "react";

function Toggle() {
  const [status, setStatus] = useState(false);
  const [user, setUser] = useState("user2");

  return (
    <div>
      {/* <h1>Hide and Show</h1>
      {
        status
      ?
      <h2>hello react</h2>
      :
      null
      } */}

      {/* <button onClick={()=>{setStatus(false)}}>Hide</button>
      <button onClick={()=>{setStatus(true)}}>Show</button> */}

      {/* <button onClick={()=>{
        status ? setStatus(false) : setStatus(true)
      }}>Hide/Show</button> */}

      {/********* best approach **********/}
      {/* <button onClick={()=>{
       setStatus(!status)
      }}>Hide/Show</button> */}

      {
      user == "user1" ? (
        <h2>User 1</h2>
      ) : user == "user2" ? (
        <h2>User 2</h2>
      ) : user == "user3" ? (
        <h2>User 3</h2>
      ) : (
        <h2>User not found</h2>
      )
      }

    </div>
  );
}

export default Toggle;

