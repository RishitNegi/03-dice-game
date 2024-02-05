import styled from "styled-components";
import propTypes from "prop-types";

const TotalScore = ({
  Score
}) => {


  return (
    <ScoreContainer>
      <h1>{Score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  height: 100%;
  max-width: 200px;
  text-align: center;
  justify-content: flex-end;
  h1 {
    font-size: 6.25rem;
    line-height: 100px;
  }

  p {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;


TotalScore.propTypes = {
  Score: propTypes.number,
  setScore: propTypes.func
}