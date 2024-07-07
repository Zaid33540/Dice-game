import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import { useState } from "react"
import TotalScore from "./TotalScore"
import RoleDice from "./RoleDice"

function GamePlay() {
  const [selectedNumber , setSelectedNumber] = useState();
  const [number, setNumber] = useState(1);
  const [score , setScore] = useState(0);
  const[error , setError] =useState();


  const generateRandomNumber = () => {
    if(!selectedNumber){
     setError("You have not selected any number");
     return
    }
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setNumber(()=> randomNumber);

    if(selectedNumber== randomNumber ){
     setScore((prev)=> prev + randomNumber)
    }
    else{
      setScore((prev)=> prev-2)
    }
    setSelectedNumber(undefined);
    };

    const resetScore=()=>{
      setScore(0)
    }

  return (
    <MainContainer>
      <div className="top_section">
      <TotalScore score={score} />
      <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RoleDice number={number} generateRandomNumber={generateRandomNumber} resetScore={resetScore} />
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
  padding-top: 40px;
  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  @media (max-width: 800px) {

    .top_section{display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;}
    
  }
`