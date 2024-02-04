import { useState } from "react";
import "./App.css";
import StateWithCaseComponent from "./StateWithClassComponent";
import PropesInReact from "./PropesInReact";
import StudentInfo from "./StudentInfo";
import StudentInfo2 from "./StudentInfo2";
import GetInputBox from "./GetInputBox";
import PrintUserInfo from "./PrintUserInfo";
import Toggle from "./Toggle";
import FormHandling from "./FormHandling";
import LoginValidation from "./LoginValidation";
import PassingFunc from "./PassingFunc";
import ConstructorLife from "./ConstructorLife";
import ComponentDidmount from "./ComponentDidmount";
import ComponentDidUpdate from "./ComponentDidUpdate";
import ComponentShouldUpdate from "./ComponentShouldUpdate";
import ComponentWillUnmount from "./ComponentWillUnmount";

function App() {
  return (
    <>
      {/* <StateWithClassComponent/> */}
      {/* <h1>Propes in React Js</h1> */}
      {/* <PropesInReact text="hello" /> */}

      {/* <PropesInReact
        text={{
          name: "Aniket",
        }}
        data="I want a job as a fresh"
      /> */}

      {/* <StudentInfo data = {{
        name:"Aniket",
        id : 10,
        branch : "BTech CSE"
      }} 
      text="react course"/> */}

      {/* <StudentInfo2 position="Developer"/> */}

      {/* <GetInputBox/> */}

      {/* <PrintUserInfo/> */}

      {/* <Toggle/> */}
      {/* <FormHandling/> */}

      {/* <LoginValidation/> */}

      {/* <PassingFunc/> */}.

      {/* <ConstructorLife/> */}

      {/* <ComponentDidmount/> */}
      {/* <ComponentDidUpdate/> */}
      {/* <ComponentShouldUpdate/> */}
      <ComponentWillUnmount/>
    </>
  );
}

export default App;
