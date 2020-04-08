import React, {
  useRef,
  //  useLayoutEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
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
          <Option>Option one</Option>
          <Option>Option two</Option>
          <SubmitButton>Submit!</SubmitButton>
        </Container>
      </ContainerContainer>
    </Background>
  );
};
Question.propTypes = {
  url: PropTypes.string.isRequired,
  windowWidth: PropTypes.number,
  containerRef: PropTypes.string,
  dimensions: PropTypes.objectOf(PropTypes.number),
};

Question.defaultProps = {
  windowWidth: 0,
  containerRef: '',
  dimensions: { width: 0, height: 0 },
};

export default Question;
