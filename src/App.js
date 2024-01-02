import React from "react";
import Todos from "./todoComponents/Todos";
import { createContext } from "./todoComponents/usecontext/UseContext";

function App() {
  return (
    <createContext.Provider value={"Mirazul"}>
    <div className="App mx-20">
       <Todos/>
    </div>
    </createContext.Provider>
  );
}

export default App;
