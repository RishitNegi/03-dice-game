import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [IsGameStarted, setIsGameStarted] = useState(true);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <MainContainer>
      {IsGameStarted ? (
        <GamePlay toggle={toggleGamePlay} />
      ) : (
        <StartGame toggle={toggleGamePlay} />
      )}
      <ToastContainer limit={1} />
    </MainContainer>
  );
};

export default App;

const MainContainer = styled.div`
  height: fit-content;
  padding: 0 5%;
  padding-top: 4rem ;
`;
