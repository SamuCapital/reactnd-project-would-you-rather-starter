import React from 'react';

import Question from '../Question';

import { handleInputChange, handleSubmit } from './CreateQuestion.helper';

import { Input, InputContainer } from './CreateQuestion.styled';

const OPTION_ONE = 'optionOne';
const OPTION_TWO = 'optionTwo';

const inp = () => (
  <InputContainer>
    <Input type="text" onChange={(event) => handleInputChange(event, OPTION_ONE)} />
    <Input type="text" onChange={(event) => handleInputChange(event, OPTION_TWO)} />
  </InputContainer>
);

const CreateQuesion = ({ dispatch }) => {
  return (
    <Question
      createQuestion={inp()}
      handleSubmit={() => handleSubmit('Hello ', 'World :)', 'tylermcginnis', dispatch)}
    />
  );
};

export default CreateQuesion;
