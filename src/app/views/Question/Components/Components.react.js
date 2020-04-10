/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';
import PropTypes from 'prop-types';

import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

import {
  Option,
  QuestionBy,
  Name,
  OptionContainer,
  Container,
  Headline,
  SubmitButton,
  AnimatedDiv,
  ResultBarContainer,
} from '../Question.styled';

export const Options = ({ optionOne, optionTwo }) => {
  Options.propTypes = {
    optionOne: PropTypes.string.isRequired,
    optionTwo: PropTypes.string.isRequired,
  };
  return (
    <OptionContainer>
      <RadioGroup onChange={(value) => console.log('SHOULD IMPLEMENT DISPATCH RIGHT HERE ', value)}>
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

export const AuthorName = ({ name }) => {
  AuthorName.propTypes = { name: PropTypes.string.isRequired };
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

export const QuestionData = ({ optionOne, optionTwo, setRenderQuestion }) => {
  QuestionData.propTypes = {
    optionOne: PropTypes.string.isRequired,
    optionTwo: PropTypes.string.isRequired,
    setRenderQuestion: PropTypes.func.isRequired,
  };
  return (
    <Container>
      <Headline>Would you rather...</Headline>
      <Options optionOne={optionOne} optionTwo={optionTwo} />
      <SubmitButton
        onClick={() => {
          setTimeout(() => {}, 1500);
          setRenderQuestion(false);
        }}
      >
        Submit!
      </SubmitButton>
    </Container>
  );
};

export const Fade = ({ show, children, shouldRender, setRender }) => {
  Fade.propTypes = {
    show: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired,
    shouldRender: PropTypes.bool.isRequired,
    setRender: PropTypes.func.isRequired,
  };
  useEffect(() => {
    if (show) setRender(true);
  }, [setRender, show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    shouldRender && (
      <AnimatedDiv show={show} onAnimationEnd={onAnimationEnd}>
        {children}
      </AnimatedDiv>
    )
  );
};

export const ProgressBar = ({ result }) => {
  ProgressBar.propTypes = { result: PropTypes.number };
  ProgressBar.defaultProps = { result: 0 };
  return (
    <ResultBarContainer>
      <Progress
        width={150}
        type="cirlce"
        percent={result}
        strokeWidth={10}
        status="success"
        theme={{
          error: {
            // symbol: `${percentage}%`,
            trailColor: 'pink',
            color: 'red',
          },
          default: {
            // symbol: `${percentage}%`,
            trailColor: 'lightblue',
            color: 'blue',
          },
          active: {
            // symbol: `${percentage}%`,
            trailColor: 'yellow',
            color: 'orange',
          },
          success: {
            // symbol: `${percentage}%`,
            trailColor: 'lime',
            color: 'green',
          },
        }}
      />
      <br />
      <Headline> {result}% of Users Share your Opinion!</Headline>
    </ResultBarContainer>
  );
};