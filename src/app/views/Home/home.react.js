import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Selectors } from 'app/state/Shared';
import Question from '../Question';

const Home = ({ state, filter }) => {
  const questions = state.session
    ? Selectors.filterQuestionsAnswered(state, filter)
    : Selectors.getAllQuestions(state);
  console.log('Questions: ', questions);
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

const mapStateToProps = (state) => {
  return { state, filter: state.ui.filter };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
