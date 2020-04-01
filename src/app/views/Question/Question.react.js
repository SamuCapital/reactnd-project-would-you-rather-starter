import React from 'react';
import { Container, Background, ProfilePicture, PictureBorder, Header } from './Question.styled';
import useWindowDimensions from './Question.helper';

const Question = () => {
  const url = 'https://i.pinimg.com/564x/c3/98/41/c398410b49f5a52a7b566c3f9a9c0bf6.jpg';
  const { width } = useWindowDimensions();
  return (
    <Background width={width}>
      <PictureBorder>
        <ProfilePicture url={url} />
      </PictureBorder>
      <Container>
        <Header>Hello</Header>
        <Header>Hello</Header>
      </Container>
    </Background>
  );
};

export default Question;
