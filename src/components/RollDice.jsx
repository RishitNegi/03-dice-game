import styled from "styled-components";
import propTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RollDice = ({ CurrentDice, rollDice, SelectedNumber }) => {
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
          onClick={() =>
            SelectedNumber === undefined || SelectedNumber === 0
              ? notify()
              : rollDice()
          }
          src={`src/Images/dice-${CurrentDice}.png`}
          alt={`Dice ${CurrentDice}`}
        />
        <p>Click on dice to roll </p>
      </div>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
width: fit-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;

  .DiceBox {
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    }
  
  img {
    width: 200px;
  }


  p {
    margin-top: 15px;
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
