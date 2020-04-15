import React from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';
import { Background, UserData, ProfilePicture, PictureBorder } from './Question.styled';

import { Fade, AuthorName } from './Components';

const Question = ({
  id,
  url,
  authorName,
  renderQuestion,
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
        <Redirect to={`/questions/${id}`} />
      </Fade>
    </Background>
  );
};

Question.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  renderQuestion: PropTypes.bool.isRequired,
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
