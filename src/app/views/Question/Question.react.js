import React from 'react';
import PropTypes from 'prop-types';

import {
  Background,
  UserData,
  ProfilePicture,
  PictureBorder,
  Container,
  Headline,
  SubmitButton,
} from './Question.styled';

import { Fade, AuthorName, ProgressBar } from './Components';

const Question = ({
  url,
  creatingQuestion,
  authorName,
  renderQuestion,
  handleSubmit,
  shouldRender,
  setRender,
  percentage,
  style,
  content,
}) => {
  return (
    <Background style={style}>
      <UserData>
        <PictureBorder>
          <ProfilePicture url={url} />
        </PictureBorder>
        <AuthorName name={authorName} />
      </UserData>

      <Fade show={renderQuestion} shouldRender={shouldRender} setRender={setRender}>
        {content}
      </Fade>
      <Fade show={!renderQuestion} shouldRender={!shouldRender} setRender={setRender}>
        <ProgressBar result={percentage} />
      </Fade>
    </Background>
  );
};

Question.propTypes = {
  url: PropTypes.string.isRequired,
  creatingQuestion: PropTypes.bool.isRequired,
  authorName: PropTypes.string.isRequired,
  renderQuestion: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  shouldRender: PropTypes.bool.isRequired,
  setRender: PropTypes.func.isRequired,
  percentage: PropTypes.number,
  style: PropTypes.object.isRequired,
  content: PropTypes.element.isRequired,
};
Question.defaultProps = {
  percentage: 0,
};

export default Question;
