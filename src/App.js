import React, { useState, useEffect } from "react";
import { Root } from "./Routes/root";
import { Contexto } from "./context/data";

function App() {
  return (
    <>
      <Contexto>
        <Root />
      </Contexto>
    </>
  );
}

export default App;
