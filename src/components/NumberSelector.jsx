import styled from "styled-components";
import propTypes from "prop-types";

const NumberSelector = ({
  SelectedNumber, setSelectedNumber,
}) => {

  return (
    <NumberContainer>
      <div className="flex">
        {[1, 2, 3, 4, 5, 6].map((value, i) => {
          return (
            <Box
              selected={value === SelectedNumber}
              key={i}
              onClick={() => setSelectedNumber(value)}
            >
              {value}
            </Box>
          );
        })}
      </div>
      <p>Select Number</p>
    </NumberContainer>
  );
};

export default NumberSelector;

const Box = styled.div`
  width: 4rem;
  height: 4rem;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  border: 2px solid black;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "black" : "white")};
  color: ${(props) => (!props.selected ? "black" : "white")};
  transition: 0.2s ease-in;

  &:hover {
    background-color: #000;
    color: white;

  }
`;

const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  .flex {
    height: fit-content;
    display: flex;
    gap: 1rem;
  }
  
  p {
    font-weight: 700;
    font-size: 1.2rem;
    margin-top: 1rem;
  }

`;

NumberSelector.propTypes = {
  toggle: propTypes.func,
  SelectedNumber: propTypes.number,
  setSelectedNumber: propTypes.func,
}