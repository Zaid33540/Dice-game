import styled from "styled-components";
import StartGame from "./Components/StartGame";
import "./index.css";
import { useState } from "react";
import GamePlay from "./Components/GamePlay";


function App() {

  const [gameStarted,setGameStarted] = useState(false);

  const toggleGamePlay = ()=>{
    setGameStarted((prev) => !prev);
  }

  return (
    <>
  {gameStarted ? <GamePlay/> : <StartGame toggleGamePlay={toggleGamePlay} />}
    </>
  )
}

export default App
