/* eslint-disable import/prefer-default-export */
import React from 'react';
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';
import PropTypes from 'prop-types';
import { Option, QuestionBy, Name, OptionContainer } from './Question.styled';

export const Options = ({ optionOne, optionTwo }) => {
  Options.propTypes = {
    optionOne: PropTypes.string.isRequired,
    optionTwo: PropTypes.string.isRequired,
  };
  return (
    <OptionContainer>
      <RadioGroup onChange={(value) => console.log(value)}>
        <ReversedRadioButton pointColor="#8e0045" rootColor="#001427" padding={10} value="apple">
          <Option>{optionOne}</Option>
        </ReversedRadioButton>
        <ReversedRadioButton pointColor="#8e0045" rootColor="#001427" padding={10} value="orange">
          <Option>{optionTwo}</Option>
        </ReversedRadioButton>
      </RadioGroup>
    </OptionContainer>
  );
};

export const Username = ({ name }) => {
  Username.propTypes = { name: PropTypes.string.isRequired };
  return (
    <QuestionBy>
      <i>Question By:</i>
      <br />
      <Name>
        <b>{name}</b>
      </Name>
    </QuestionBy>
  );
};
