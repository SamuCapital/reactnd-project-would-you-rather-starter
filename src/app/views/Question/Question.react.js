import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton, RadioGroup, ReversedRadioButton } from 'react-radio-buttons';
import {
  ContainerContainer,
  ContainerBG,
  Container,
  Background,
  UserData,
  QuestionBy,
  Name,
  ProfilePicture,
  PictureBorder,
  Headline,
  Option,
  SubmitButton,
} from './Question.styled';

const Question = ({ url, windowWidth, containerRef, dimensions }) => {
  return (
    <Background width={windowWidth}>
      <UserData>
        <PictureBorder>
          <ProfilePicture url={url} />
        </PictureBorder>
        <QuestionBy>
          <i>Question By:</i>
          <br />
          <Name>
            <b>Samuel</b>
          </Name>
        </QuestionBy>
      </UserData>
      <ContainerContainer ref={containerRef}>
        <ContainerBG dimensions={dimensions} />
        <Container dimensions={dimensions}>
          <Headline>Would you rather...</Headline>
          <RadioGroup onChange={(value) => console.log(value)}>
            <ReversedRadioButton
              pointColor="#8e0045"
              rootColor="#001427"
              padding={10}
              value="apple"
            >
              <Option>Option one</Option>
            </ReversedRadioButton>
            <ReversedRadioButton
              pointColor="#8e0045"
              rootColor="#001427"
              padding={10}
              value="orange"
            >
              <Option>Option two</Option>
            </ReversedRadioButton>
          </RadioGroup>
          <SubmitButton>Submit!</SubmitButton>
        </Container>
      </ContainerContainer>
    </Background>
  );
};
Question.propTypes = {
  url: PropTypes.string.isRequired,
  windowWidth: PropTypes.number,
  containerRef: PropTypes.object,
  dimensions: PropTypes.objectOf(PropTypes.number),
};

Question.defaultProps = {
  windowWidth: 0,
  containerRef: {},
  dimensions: { width: 0, height: 0 },
};

export default Question;
