import React, { useState } from "react";

function PrintUserInfo() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [print, setPrint] = useState(false);

  function getUsername(e) {
    setUsername(e.target.value);
  }
  function getPassword(e) {
    setPassword(e.target.value);
  }

  function showData(){
    if(username && password){
        setPrint(true)
    }
  }
  return (
    <div>
      {print ? (
        <div>
          <h2>Username : {username}</h2>
          <h2>Password : {password}</h2>
        </div>
      ) : null}
      <input
        type="text"
        onChange={getUsername}
        placeholder="username"
        style={{ marginBottom: 20, padding: 5 }}
      />
      <br />
      <br />
      <input
        type="password"
        onChange={getPassword}
        placeholder="password"
        style={{ padding: 5 }}
      />
      <br />
      <button
        onClick={() => {
          showData()
        }}
        style={{ marginTop: 20 }}
      >
        Show
      </button>
    </div>
  );
}

export default PrintUserInfo;
