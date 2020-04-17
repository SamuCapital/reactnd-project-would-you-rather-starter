import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { uiOperations } from 'app/state/ducks/UI/';
import Home from './home.react';

const ConnectedComponent = ({ state, filter, redirect, toggleRedirect }) => {
  useEffect(() => {
    redirect && toggleRedirect(false);
  });
  return <Home state={state} filter={filter} />;
};

ConnectedComponent.propTypes = {
  state: PropTypes.object.isRequired,
  filter: PropTypes.bool,
  redirect: PropTypes.bool.isRequired,
  toggleRedirect: PropTypes.func.isRequired,
};
ConnectedComponent.defaultProps = {
  filter: false,
};

const mapStateToProps = (state) => {
  return {
    state,
    filter: state.ui.filter,
    redirect: state.ui.redirectToIndex,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleRedirect: (bool) => dispatch(uiOperations.toggleRedirect(bool)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);
