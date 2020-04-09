/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from 'react';
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';
import PropTypes from 'prop-types';
import { keyframes } from 'styled-components';
import { flipInX } from 'react-animations';

import {
  Option,
  QuestionBy,
  Name,
  OptionContainer,
  ContainerContainer,
  ContainerBG,
  Container,
  Headline,
  SubmitButton,
  AnimatedDiv,
} from './Question.styled';

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

export const QuestionData = ({
  containerRef,
  dimensions,
  optionOne,
  optionTwo,
  setRenderQuestion,
}) => (
  <ContainerContainer>
    {/* <ContainerBG /> */}
    <Container>
      <Headline>Would you rather...</Headline>
      <Options optionOne={optionOne} optionTwo={optionTwo} />
      <SubmitButton
        onClick={() => {
          setRenderQuestion(false);
          console.log('CLICK');
        }}
      >
        Submit!
      </SubmitButton>
    </Container>
  </ContainerContainer>
);
QuestionData.propTypes = {
  optionOne: PropTypes.string.isRequired,
  optionTwo: PropTypes.string.isRequired,
  containerRef: PropTypes.object.isRequired,
  dimensions: PropTypes.objectOf(PropTypes.number).isRequired,
  setRenderQuestion: PropTypes.func.isRequired,
};

export const Fade = ({ show, children }) => {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    console.log('TRIGGERED');
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
