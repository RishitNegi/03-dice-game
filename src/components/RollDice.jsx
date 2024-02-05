import styled from "styled-components";
import propTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RollDice = ({
  CurrentDice,
  rollDice,
  setScore,
  SelectedNumber,
  setSelectedNumber
}) => {
  console.log(SelectedNumber);
  const notify = () =>
    toast("Please Select Number", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      limit: 1,
    });

  return (
    <DiceContainer>
      <div className="DiceBox">
        <img
          onClick={() => (SelectedNumber === undefined || SelectedNumber === 0 ? notify() : rollDice())}
          src={`src/assets/Dice/dice_${CurrentDice}.png`}
          alt={`Dice ${CurrentDice}`}
        />
        <p>Click on dice to roll </p>

        <button onClick={() => {setScore(0); setSelectedNumber(0)}} className="reset">
          Reset score
        </button>
        <button className="rules">Show Rules</button>
      </div>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .DiceBox {
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 10px 18px;
    margin: 10px;
    font-weight: 600;
    transition: 0.2s background ease-in;
    border: 1px solid #000;
  }

  .reset {
    background-color: #fff;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }

  .rules {
    background-color: #000;
    color: #fff;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
`;

RollDice.propTypes = {
  CurrentDice: propTypes.number,
  rollDice: propTypes.func,
  Score: propTypes.number,
  setScore: propTypes.func,
  SelectedNumber: propTypes.number,
  setSelectedNumber: propTypes.func,

};
