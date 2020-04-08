import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Question from '../Question';

const Home = ({ questions }) => {
  return (
    <div>
      Hello world{' '}
      {questions &&
        !questions.loadInitialState &&
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
  return { questions };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
