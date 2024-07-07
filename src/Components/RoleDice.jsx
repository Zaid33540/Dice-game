import { useState } from "react";
import styled from "styled-components";
import ShowRules from "./ShowRules";
function RoleDice({ number, generateRandomNumber, resetScore }) {
  const [rules, setRules] = useState(false);

  const handleScrollToBottom = () => {
    setRules((prev) => !prev);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <DiceRoll>
      <div className="dice">
        <div>
          <img
            onClick={generateRandomNumber}
            src={`./images/dice${number}.png`}
          />
        </div>
        <p>Click on Dice to roll</p>
        <Button onClick={resetScore}>Reset Score</Button>
        <Button1 onClick={handleScrollToBottom}>Show Rules</Button1>
        {rules ? <ShowRules /> : !(<ShowRules />)}
      </div>
    </DiceRoll>
  );
}

export default RoleDice;

const DiceRoll = styled.div`
  .dice {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  color: black;
  padding: 10px 18px;
  background: white;
  border-radius: 5px;
  width: 220px;
  height: 44px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 16px;
  transition: 0.4s background ease-in;
  cursor: pointer;

  &:hover {
    background-color: black;
    border-color: 1px solid black;
    color: white;
    transition: 0.3s background ease-in;
    cursor: pointer;
  }
`;

const Button1 = styled.button`
  color: white;
  padding: 10px 18px;
  background: black;
  border-radius: 5px;
  width: 220px;
  height: 44px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 16px;
  transition: 0.4s background ease-in;
  cursor: pointer;

  &:hover {
    background-color: white;
    border-color: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
    cursor: pointer;
  }
`;
