import React from "react";
import styled from "styled-components";
import { AppContext } from "../Providers/AppProvider";
import { COLORS } from "../../constants";

function SettingsModal({ handleDismiss }) {
  const { wordLength, setWordLength, numOfChances, setNumofChances } =
    React.useContext(AppContext);
  const [userWordLength, setUserWordLength] = React.useState(wordLength);
  const [userNumOfChances, setUserNumOfChances] = React.useState(numOfChances);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userWordLength, userNumOfChances);
    setWordLength(userWordLength);
    setNumofChances(userNumOfChances);
    handleDismiss();
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h2>SETTINGS</h2>
      <FormRow>
        <label htmlFor="word-length">WordLength: </label>
        <Input
          type="number"
          id="word-length"
          value={userWordLength}
          onChange={(event) => setUserWordLength(event.target.value)}
          min={3}
          max={8}
        />
      </FormRow>
      <FormRow>
        <label htmlFor="num-chances">Chances: </label>
        <Input
          type="number"
          id="num-chances"
          value={userNumOfChances}
          onChange={(event) => setUserNumOfChances(event.target.value)}
          min={3}
          max={10}
        />
      </FormRow>
      <ApplyButton>Apply</ApplyButton>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  gap: 10px;
`;
const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`;

const Input = styled.input`
  max-width: 50px;
`;
const ApplyButton = styled.button`
  background-color: ${COLORS.secondaryTheme};
  color: hsl(0, 0%, 100%);
  cursor: pointer;
  transition: All 0.2s;
  &:hover {
    background-color: ${COLORS.primaryTheme};
    transform: scale(1.2);
  }
`;
export default SettingsModal;
