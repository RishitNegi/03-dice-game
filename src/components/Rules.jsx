import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h1>How to play dice game</h1>
      <ul>
        <li>
          <p>Select any number</p>
        </li>
        <li>
          <p>Click on dice image</p>
        </li>
        <li>
          <p>
            After clicking on the dice, if selected number is equal to number on the dice, you will get same points as on the dice.
          </p>
        </li>
        <li>

          <p>
            If your guess is wrong, then 1 point will be deducted if the selected number is less than or equal to 3 and 2 points will be deducted if selected number is greater than 3.
          </p>
        </li>
      </ul>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  width: 49.63rem;
  padding: 1rem 2.5%;
  margin: 0 auto;
  margin-top: 2rem;
  background-color: #fbf1f1;
  ul{
    list-style: disc;
  }

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-weight: 500;
    font-size: 1rem;
  }
`;
