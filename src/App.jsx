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
      <ToastContainer limit={1}/>
    </MainContainer>
  );
};

export default App;

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 4rem 5rem;
`;
