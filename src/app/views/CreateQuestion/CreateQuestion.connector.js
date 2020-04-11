import React from 'react';
import { connect } from 'react-redux';
import CreateQuestion from './CreateQuestion.react';

const ConnectedComponent = ({ dispatch }) => {
  return <CreateQuestion dispatch={dispatch} />;
};

export default connect()(ConnectedComponent);
