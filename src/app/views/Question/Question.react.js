import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
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
  Header,
} from './Question.styled';
import { useWindowDimensions, useCompDimensions } from './Question.helper';

const Question = ({ url }) => {
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const { windowWidth } = useWindowDimensions();
  const [windowResized, setWindowResized] = useState(windowWidth);

  //   useCompDimensions(containerRef, dimensions, setDimensions, windowWidth, windowResized);
  //   useEffect(() => {
  //     if (dimensions.width !== 0 || width !== windowResized) {
  //       console.log(dimensions);
  //     }
  //   }, [dimensions, width, windowResized]);

  useLayoutEffect(() => {
    // if ((containerRef.current && dimensions.width === 0) || windowWidth !== windowResized) {
    setDimensions({
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
    });
    console.log('Set Dimensions!');
    // }
  }, [containerRef, dimensions.width, setDimensions, windowResized, windowWidth]);

  if (windowWidth !== windowResized) setWindowResized(windowWidth);
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
          <Header>Hello</Header>
          <Header>Hello</Header>
        </Container>
      </ContainerContainer>
    </Background>
  );
};

Question.propTypes = { url: PropTypes.string };
// TODO: REMOVE BEFORE PUBLISH
Question.defaultProps = {
  url: 'https://i.pinimg.com/564x/c3/98/41/c398410b49f5a52a7b566c3f9a9c0bf6.jpg',
};

export default Question;
