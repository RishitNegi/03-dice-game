import styled from "styled-components";
import propTypes from "prop-types";

const StartGame = ({toggle}) => {
  return (
    <>
      <Container>
        <img src="Images/Dices.png" alt="" />
        <div className="content">
          <h1>DICE GAME</h1>
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </Container>
    </>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 10px;
  font-weight: 600;
  color: white;
  cursor: pointer;

  min-width: 220px;
  height: 44px;

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
    transition: 0.3s background ease-in ;
  }
`;

StartGame.propTypes = {
  toggle: propTypes.func
}