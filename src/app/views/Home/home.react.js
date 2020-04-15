import React from 'react';
import PropTypes from 'prop-types';
import Question from '../Question';
import { getQuestions } from './home.helper';

const Home = ({ state, filter }) => {
  const questions = getQuestions(state, filter);
  return (
    <div style={{ overflow: 'hidden' }}>
      {questions.length > 0 &&
        questions.map((question) => <Question question={question} key={question.id} />)}
    </div>
  );
};

Home.propTypes = {
  state: PropTypes.object.isRequired,
  filter: PropTypes.bool,
};
Home.defaultProps = {
  filter: false,
};

export default Home;
