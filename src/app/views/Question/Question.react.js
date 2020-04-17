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
  style,
  content,
  path,
  results,
  loggedIn,
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
        {!loggedIn && <Redirect to="/login" />}
        {loggedIn && path === '/' && <Redirect to={`/questions/${id}`} />} {results}
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
  style: PropTypes.object.isRequired,
  content: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
  results: PropTypes.element,
  loggedIn: PropTypes.bool.isRequired,
};
Question.defaultProps = { results: null };

export default Question;
