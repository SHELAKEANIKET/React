import React, { useCallback, useState, useRef, useEffect } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, charAllowed, numberAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const passRef = useRef();

  const copyPassword = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="max-w-lg bg-red-400 h-58 p-3 rounded-lg">
      <div className="flex shadow rounded-lg mb-4 gap-2 text-xl">
        <input
          type="text"
          className="rounded-md px-[10px] text-black outline-none text-xl font-medium"
          placeholder="Password"
          readOnly
          value={password}
          ref={passRef}
        />
        <button
          className="bg-black py-2 px-3 rounded-md"
          onClick={copyPassword}
        >
          Copy
        </button>
      </div>
      <div className="mx-4">
        <div className="flex gap-3 text-lg font-semibold my-1">
          <input
            type="range"
            className=""
            min={6}
            max={20}
            onChange={(e) => setLength(e.target.value)}
            value={length}
          />
          <label>Length : {length}</label>
        </div>
        <div className="flex gap-3 text-lg font-semibold my-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label>Include Numbers</label>
        </div>
        <div className="flex gap-3 text-lg font-semibold my-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label>Include Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
