import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import propTypes from "prop-types";
import RollDice from "./RollDice";
import { useState } from "react";
import Rules from "./Rules";

const GamePlay = ({ toggle }) => {
  const [SelectedNumber, setSelectedNumber] = useState(0);
  const [CurrentDice, setCurrentDice] = useState(4);
  const [Score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);

  const genRandomNum = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const rollDice = () => {
    const randomNumber = Math.floor(genRandomNum(1, 7));
    setCurrentDice(randomNumber);
    // setDiceNumber(randomNumber);

    if (SelectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else if (SelectedNumber !== randomNumber && SelectedNumber > 3) {
      setScore((prev) => prev - 2);
    } else {
      setScore((prev) => prev - 1);
    }
  };

  return (
    <Main>
      <Button onClick={toggle}>Back</Button>
      <div className="flex-box">
        <TotalScore Score={Score} setScore={setScore} />
        <NumberSelector
          SelectedNumber={SelectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice
        CurrentDice={CurrentDice}
        rollDice={rollDice}
        SelectedNumber={SelectedNumber}
      />
      <div className="buttons">
        <OutlineButton
          onClick={() => {
            setScore(0);
            setSelectedNumber(undefined);
          }}
        >
          Reset score
        </OutlineButton>
        <ShowButton onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </ShowButton>
      </div>

      {showRules && <Rules />}
    </Main>
  );
};
export default GamePlay;

const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;

  .flex-box {
    display: flex;
    justify-content: space-between;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.63rem;
    margin-top: 1.5rem;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 2%;
  left: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 10px;
  font-weight: 600;
  color: white;
  cursor: pointer;

  background: #000;
  border: none;
  border-radius: 5px;

  flex: none;
  order: 1;
  flex-grow: 0;
  transition: 0.4s background ease-in;
  border: 1px solid transparent;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;

const OutlineButton = styled.button`
  width: 220px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 10px 18px;
  font-weight: 600;
  transition: 0.2s background ease-in;
  border: 1px solid #000;
  background-color: #fff;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const ShowButton = styled.button`
  width: 220px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 10px 18px;
  font-weight: 600;
  transition: 0.2s background ease-in;
  border: 1px solid #000;

  background-color: #000;
  color: #fff;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

GamePlay.propTypes = {
  toggle: propTypes.func,
};
