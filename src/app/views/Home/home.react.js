import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Selectors } from '../../state/Shared';

import Question from '../Question';

import CreateQuestion from '../CreateQuestion';

import Login from '../Login';

const Home = ({ state, filter }) => {
  const questions = state.session ? Selectors.filterQuestionsAnswered(state, filter) : [];
  return (
    <div>
      <CreateQuestion />
      {questions.map((question) => (
        <Question question={question} key={question.id} />
      ))}
      <Login />
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
