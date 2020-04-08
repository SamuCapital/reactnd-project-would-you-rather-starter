import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Question from '../Question';

const Home = ({ questions, users }) => {
  questions && !questions.loadInitialState && console.log('got the questions');
  return (
    <div>
      Hello world{' '}
      {questions &&
        !questions.loadInitialState &&
        users &&
        !users.loadInitialState &&
        Object.values(questions).map((question) => (
          <Question question={question} key={question.id} />
        ))}
    </div>
  );
};

Home.propTypes = {
  questions: PropTypes.object.isRequired,
};

const mapStateToProps = ({ questions, users }) => {
  return { questions, users };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
