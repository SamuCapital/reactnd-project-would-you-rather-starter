import React, {
  useRef,
  //  useLayoutEffect,
  useState,
  useEffect,
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
  Header,
} from './Question.styled';
import { useWindowDimensions, useContainerLayout } from './Question.helper';

const Question = ({ url }) => {
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const { width: windowWidth } = useWindowDimensions();
  const [windowResized, setWindowResized] = useState(0);
  const [initialLoaded, setInitialLoaded] = useState(false);

  useContainerLayout(
    containerRef,
    dimensions,
    initialLoaded,
    setDimensions,
    windowResized,
    windowWidth,
    setWindowResized,
    setInitialLoaded,
  );

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
  //   url: 'https://i.pinimg.com/564x/f1/f4/9c/f1f49ce816d324b40bf7b5c07e464854.jpg',
};

export default Question;
