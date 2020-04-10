import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Selectors } from '../../state/Shared';

import Question from '../Question';

const Home = ({ state, questions }) => {
  state.session && console.log('Answered: ', Selectors.filterQuestionsAnswered(state, true));
  state.session && console.log('Not Answered: ', Selectors.filterQuestionsAnswered(state, false));
  return (
    <div>
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

const mapStateToProps = (state) => {
  return { state, questions: state.questions };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
