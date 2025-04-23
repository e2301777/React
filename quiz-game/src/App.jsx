import { useState } from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";
import "./App.css";

function App() {

    const [gameStarted, setGameStarted] = useState(false);

  return (
    <>
      <Header setGameStarted={setGameStarted}/>
      {gameStarted ? <Gameboard/> : null}
      <Scoreboard />
    </>
  );
}

export default App;
