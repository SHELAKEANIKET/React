import React from "react";
import { useSearchParams } from "react-router-dom";

function SearchParamsHook() {
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get('name');
  const age = searchParams.get('age')
  const fullName = searchParams.get('fullName')

  function handleBtn(){
    setSearchParams({age:22})
  }

  return (
    <div style={{margin:'32px'}}>

      <input type="text" placeholder="type something" onChange={(e)=>setSearchParams({fullName:e.target.value})} />
      <br />  <br />
      <button onClick={handleBtn}>Click</button>
      <h2>{name}</h2>
      <br />
      <h2>{age}</h2>
      <br />
      <h2>{fullName}</h2>
    </div>
  );
}

export default SearchParamsHook;
