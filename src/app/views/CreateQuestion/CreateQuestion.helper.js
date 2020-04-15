import React from 'react';

import { Input, InputContainer } from './CreateQuestion.styled';

const OPTION_ONE = 'optionOneText';
const OPTION_TWO = 'optionTwoText';

export const handleInputChange = (event, option, setInputText) => {
  setInputText(option, event.target.value.trim());
};

export const createInputFormula = (setInputText) => (
  <InputContainer>
    <Input type="text" onChange={(event) => handleInputChange(event, OPTION_ONE, setInputText)} />
    <Input type="text" onChange={(event) => handleInputChange(event, OPTION_TWO, setInputText)} />
  </InputContainer>
);

export const handleCreateQuestion = (
  createQuestion,
  session,
  optionOneText,
  optionTwoText,
  author,
) => {};
