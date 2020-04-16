import React from 'react';
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';
import PropTypes from 'prop-types';
import { Option, OptionContainer } from '../Question.styled';

const Options = ({ question, renderResults, session, path, filter, setQuestionAnswer }) => {
  Options.propTypes = {
    question: PropTypes.object.isRequired,
    renderResults: PropTypes.bool.isRequired,
    filter: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
    session: PropTypes.string.isRequired,
  };
  return (
    <OptionContainer>
      <RadioGroup
        value={renderResults ? null : undefined}
        onChange={(value) => setQuestionAnswer(question.id, value)}
      >
        <ReversedRadioButton
          pointColor="#8e0045"
          rootColor="#001427"
          padding={10}
          value="optionOne"
          disabledColor
          disabled={
            (renderResults && question.optionOne.votes.includes(session)) ||
            !session ||
            (path === '/' && !filter)
          }
        >
          <Option>{question.optionOne.text}</Option>
        </ReversedRadioButton>
        <ReversedRadioButton
          pointColor="#8e0045"
          rootColor="#001427"
          padding={10}
          value="optionTwo"
          disabledColor
          disabled={
            (renderResults && question.optionTwo.votes.includes(session)) ||
            !session ||
            (path === '/' && !filter)
          }
        >
          <Option>{question.optionTwo.text}</Option>
        </ReversedRadioButton>
      </RadioGroup>
    </OptionContainer>
  );
};

export default Options;
