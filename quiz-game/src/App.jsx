import { useState } from "react";
import Header from "./components/Header";

import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Gameboard>

      </Gameboard>
      <Scoreboard />
    </>
  );
}

export default App;
