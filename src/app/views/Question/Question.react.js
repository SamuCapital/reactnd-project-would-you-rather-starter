import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Background,
  UserData,
  QuestionBy,
  Name,
  ProfilePicture,
  PictureBorder,
  Header,
} from './Question.styled';
import useWindowDimensions from './Question.helper';

const Question = ({ url }) => {
  const { width } = useWindowDimensions();
  return (
    <Background width={width}>
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
      <Container>
        <Header>Hello</Header>
        <Header>Hello</Header>
      </Container>
    </Background>
  );
};

Question.propTypes = { url: PropTypes.string };
// TODO: REMOVE BEFORE PUBLISH
Question.defaultProps = {
  url: 'https://i.pinimg.com/564x/c3/98/41/c398410b49f5a52a7b566c3f9a9c0bf6.jpg',
};

export default Question;
